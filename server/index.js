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
})

app.get('*', (req, res) => {
  res.redirect('/');
});

io.on('connection', socket => {
  socket.on('message-out', data => {
    io.emit('message-in', data);
  })
});

mongo.connect('mongodb://localhost', (err, client) => {
  const db = client.db('portfolio');
  if (err) throw err;
  console.log('Connected to MongoDB');

  app.post('/save-profile', (req, res) => {
    let o_id;
    if (!req.body._id) {
      db.collection('profiles').insertOne(req.body).then(response => {
        res.send(response.ops[0]._id);
      });
    } else {
      o_id = objectId(req.body._id);
      delete req.body._id;
      db.collection('profiles').updateOne(
        { _id: o_id },
        { $set: req.body }
      ).then(response => {
        res.send(response)
      });
    };
  });
});

const port = 2626;
http.listen(port, () => {
  console.log('Server running on port ' + port);
});
