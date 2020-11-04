const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/test', (req, res) => {
  res.send('Ok');
});

app.listen(port || 3000, () => {
  console.log(`Started on port ${port}`);
  console.log(`Started on host ${host}`);
});
