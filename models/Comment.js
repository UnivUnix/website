var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({

  

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

var Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;