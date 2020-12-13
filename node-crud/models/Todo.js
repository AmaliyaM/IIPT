var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  type: String,
  checked: Boolean,
  label: String,
  created_by: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);
