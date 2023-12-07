const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.route('/').get((req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

router.route('/add').post((req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: false,
  });

  todo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
