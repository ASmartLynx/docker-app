const express = require('express');
const { connectDb } = require('./helpers/db');
const { host, port, db } = require('./configuration');
const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth on port ${port}`);
    console.log(`Started on host ${host}`);
    console.log(`Our database ${db}`);
  });
}

app.get('/test', (req, res) => {
  res.send('Our api auth is working correctly');
});

app.get('/api/currenUser', (req, res) => {
  res.json({
    id: '123',
    email: 'foo@email.com'
  });
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);