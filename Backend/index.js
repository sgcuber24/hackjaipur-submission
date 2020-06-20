/* eslint-disable max-len */
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());


app.get('/', function (req, res) {
  res.send(
    'Welcome to this API! Navigate to /api/v1/count to view the results!'
  );
});

module.exports = app;
