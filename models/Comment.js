var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = Schema({

  _id: Schema.Types.ObjectId,
  parent: { type: Schema.Types.ObjectId, ref: 'Comment' },
  page_url: String,
  author_id: { type: Schema.Types.ObjectId, ref: 'User' },
  guest_name: { type: String, required: false, minlength: 3, maxlength: 20 },
  date: { type: Date, default: Date.now },
  upvotes: Number,
  total_votes: Number,
  body: { type: String, required: true, minlength: 10, maxlength: 450 }

});

var Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;