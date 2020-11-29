var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  type: String,
  checked: Boolean,
  label: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);
