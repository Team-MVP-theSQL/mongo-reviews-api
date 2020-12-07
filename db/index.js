const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/mongoreviews';
mongoose.Promise = global.Promise;

var db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
