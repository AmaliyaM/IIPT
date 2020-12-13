var mongoose = require("mongoose");

var Todo = require('../models/Todo.js');

var todoController = {};

todoController.list = function(req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
      return next(err);
    }
    else {
      res.json(todos.filter(item => item.created_by === req.params.created_by));
    }
  });
};

todoController.save = function(req, res) {
  var todo = new Todo(req.body)
  todo.checked = false
  todo.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.json(todo)
    }
  });
};

todoController.switch = function(req, res) {
  Todo.findByIdAndUpdate(req.params.id, { checked: !req.body.checked }, {new: true}, function (err, todo) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(req.params.id)
    }
  });
};

todoController.delete = function(req, res) {
  Todo.deleteOne({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(req.params.id)
    }
  });
};

module.exports = todoController
