const mongoose = require('mongoose');
require('dotenv').config();

const conn = process.env.MONGODB_URI;

const connection = mongoose.createConnection(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
  admin: Boolean,
});

const User = connection.model('User', UserSchema);

module.exports = connection;
