import * as express from 'express';
import * as bodyParser from 'body-parser';
import route from './route';
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

export default app;
