const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const request = require('request');
const io = require('socket.io')(http);
const nodemailer = require('nodemailer');
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

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

io.on('connection', socket => {
  socket.on('message-out', data => {
    io.emit('message-in', data);
  })
});

mongo.connect('mongodb://localhost', (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');

  const db = client.db('portfolio');

  app.post('/save-profile', (req, res) => {
    req.body.birthday = new Date(req.body.birthday);
    if (!req.body._id) {
      db.collection('profiles')
      .insertOne(req.body)
      .then(data => res.send(data.ops[0]._id));
    } else {
      delete req.body._id;
      db.collection('profiles')
      .updateOne(
        { _id: objectId(req.body._id) },
        { $set: req.body }
      )
      .then(data => res.send(data));
    };
  });

  app.get('/get-profiles', (req, res) => {

    const params = {};

    if (req.query.nickname) {
      params['nickname'] = {
        $regex: req.query.nickname,
        $options: 'i'
      };
    };

    if (req.query.bdayStart && req.query.bdayEnd) {
      req.query.bdayStart = new Date(req.query.bdayStart);
      req.query.bdayEnd = new Date(req.query.bdayEnd);
      params['birthday'] = {
        $gte: req.query.bdayStart,
        $lte: req.query.bdayEnd
      };
    }
    else if (req.query.bdayStart && !req.query.bdayEnd) {
      req.query.bdayStart = new Date(req.query.bdayStart);
      params['birthday'] = { $gte: req.query.bdayStart };
    }
    else if (!req.query.bdayStart && req.query.bdayEnd) {
      req.query.bdayEnd = new Date(req.query.bdayEnd);
      params['birthday'] = { $lte: req.query.bdayEnd };
    };

    if (req.query.icon) {
      params['icon'] = req.query.icon;
    };

    db.collection('profiles')
    .find(params)
    .toArray()
    .then((data, err) => {
      if (err) throw err;
      data.map(item => {
        item['created'] = item._id.getTimestamp();
      });
      res.send(data);
    });
  });

});

const port = 2626;
http.listen(port, () => {
  console.log('Server running on port ' + port);
});
