const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
