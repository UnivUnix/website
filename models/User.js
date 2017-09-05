var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({

  _id: Schema.Types.ObjectId,
  service_id: Number,
  service: String,
  username: { type: String, required: true, minlength: 3, maxlength: 20},
  email: String,
  linked_ids: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  roles: [String], //admin, mod, user, newbies, validated, deactivated
  lastLogin: { type: Date, default: Date.now },
  registerDate: { type: Date, required: true, default: Date.now }

});

var User = mongoose.model('User',userSchema);
module.exports = User;