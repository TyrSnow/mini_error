const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');
const app = express();
require('./start');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(route);

process.on('uncaughtException', (err) => {
  console.error('UnCaughtException: ', err);
});

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection: ', err);
});

module.exports = app;