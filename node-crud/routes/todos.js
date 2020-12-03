var express = require('express');
var router = express.Router();

var todo = require("../controllers/TodoController.js");
var Todo = require('../models/Todo.js');

router.get('/', todo.list);
router.post('/', todo.save);
router.put('/:id', todo.switch);
router.delete('/:id', todo.delete);

module.exports = router;
