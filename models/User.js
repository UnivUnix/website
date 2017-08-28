var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  our_id: Number,
  service_id: Number,
  service: String,
  name: String,
  email: String,
  admin: Boolean,
  linked_ids: [String],
  roles: [String],
  emailValidated: Boolean,
  lastAccess: Date

});

var User = mongoose.model('User',userSchema);
module.exports = User;