const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { host, port, db, authApiUrl } = require('./configuration');
const { response } = require('express');
const app = express();

const postSchema = new mongoose.Schema({
  name: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port || 3000, () => {
    console.log(`Started on port ${port}`);
    console.log(`Started on host ${host}`);
    console.log(`Our database ${db}`);

    const silence = new Post({ name: 'Silence' });
    silence.save(function(err, savedSilcence) {
      if (err) return console.log(err);
      console.log('savedSilence with volumes', savedSilcence);
    });
  });
}

app.get('/test', (req, res) => {
  res.send('Ok');
});

app.get('/testWithCurrentUser', (req, res) => {
  axios.get(authApiUrl + '/currentUser')
    .then(response => {
      res.json({
        testWithCurrentUser: true,
        currentUserFromAuth: response.data
      });
    });
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);