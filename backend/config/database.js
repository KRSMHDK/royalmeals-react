const mongoose = require('mongoose');
require('dotenv').config();

const conn = process.env.MONGODB_URI;

const connection = mongoose.createConnection(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
