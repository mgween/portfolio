const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const request = require('request');
const io = require('socket.io')(http);
const nodemailer = require('nodemailer');
const r = require('rethinkdbdash')({
  port: 28015,
  host: 'localhost',
  db: 'portfolio'
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

const transporter = nodemailer.createTransport(
  {
    service: 'SendPulse',
    auth: {
      user: 'dev@mattgween.com',
      pass: '***REMOVED***'
    }
  }
);

app.post('/send-message', (req, res) => {
  r.table('contact_messages')
  .insert(req.body)
  .catch(err => console.log(err));
  
  transporter.sendMail(
    {
      from: 'dev@mattgween.com',
      to: 'dev@mattgween.com',
      subject: req.body.subject,
      text: req.body.message,
      html: `
        <h3>Name: ${req.body.name}</h3>
        <h3>Email: ${req.body.email}</h3>
        <p>${req.body.message}</p>
      `
    },
    (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.send(info);
      };
    }
  );
});

app.get('/xkcd', (req, res) => {
  if (!req.query.num) {
    request('http://xkcd.com/info.0.json', (err, response, body) => {
      res.send(body);
    });
  } else {
    request(`http://xkcd.com/${req.query.num}/info.0.json`, (err, response, body) => {
      res.send(body);
    });
  };
});

app.post('/save-profile', (req, res) => {
  req.body.birthday = new Date(req.body.birthday);
  req.body['timestamp'] = new Date();
  if (!req.body.id) {
    r.table('profiles')
    .insert(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err));
  } else {
    r.table('profiles')
    .get(req.body.id)
    .update(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err));
  };
});

app.get('/get-profiles', (req, res) => {

  const nicknameMatch = () => {
    const escapeSpecialChars = (string) => {
      const pattern = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
      return string.replace(pattern, '\\$&');
    };
    return r.row('nickname').match('(?i)' + escapeSpecialChars(req.query.nickname));
  };

  const birthdayMatch = () => {
    const searchBefore = () => {
      return r.row('birthday').le(new Date(req.query.bdayEnd))
    };
    const searchAfter = () => {
      return r.row('birthday').ge(new Date(req.query.bdayStart))
    };

    if (req.query.bdayStart && req.query.bdayEnd) {
      return searchAfter().and(searchBefore());
    } else if (req.query.bdayStart) {
      return searchAfter();
    } else if (req.query.bdayEnd) {
      return searchBefore();
    } else {
      return r.row;
    };
  };

  const strictMatch = (dbParam, reqParam) => {
    if (reqParam) {
      return r.row(dbParam).eq(reqParam);
    } else {
      return r.row;
    };
  };

  r.table('profiles')
  .filter(
    nicknameMatch()
    .and(birthdayMatch())
    .and(strictMatch('icon', req.query.icon))
    .and(strictMatch('drink', req.query.drink))
  )
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

io.on('connection', socket => {
  socket.on('message-out', data => {
    io.emit('message-in', data);
  })
});

const port = 2626;
http.listen(port, () => {
  console.log('Server running on port ' + port);
});
