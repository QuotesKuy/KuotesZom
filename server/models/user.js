var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fId: String,
  name: String,
  email: String,
  password: String,
  salt: String
});

var User = mongoose.model('User', userSchema);

module.exports = User
