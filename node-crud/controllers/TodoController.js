var mongoose = require("mongoose");

var Todo = require('../models/Todo.js');

var todoController = {};
todoController.list = function(req, res) {
  console.log('111')
  Todo.find(function (err, todos) {
  console.log('222')
    if (err) {
      console.log("Error:", err);
      return next(err);
    }
    else {
      console.log('it works!', todos)
      res.json(todos);
    }
  });
};

todoController.save = function(req, res) {
  console.log('save req', req.body)
  var todo = new Todo(req.body);

  todo.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.json(todo)
      console.log("Successfully created a todo.", todo);
    }
  });
};

// todoController.switch = function(req, res) {
//   Todo.findOne({_id: req.params.id}).exec(function (err, todo) {
//     if (err) {
//       console.log("Error:", err);
//     }
//     else {
//       res.render("../views/todos/check", {todo: todo});
//     }
//   });
// };

todoController.delete = function(req, res) {
  Todo.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Todo deleted!");
      res.redirect("/todos");
    }
  });
};

module.exports = todoController
