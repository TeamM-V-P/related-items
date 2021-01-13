const mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;
const mongoUri = `mongodb+srv://${process.env.mongoDBUser}:${process.env.mongoDBPW}@heroku.z2uuf.mongodb.net/${process.env.mongoDB}?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;