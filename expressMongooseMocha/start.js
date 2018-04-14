const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/expressMongooseMocah');
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', (err) => {
  console.error('[DB]error: ', err);
});
