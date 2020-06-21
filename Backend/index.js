/* eslint-disable max-len */
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
app.use(morgan('dev'));
app.use(express.json());

const crowdCountRouter = require('./routes/crowdCountRoute');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/v1/count', crowdCountRouter);

module.exports = app;
