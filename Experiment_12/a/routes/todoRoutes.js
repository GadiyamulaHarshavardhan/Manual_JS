const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get All Todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

// Add New Todo
router.post('/add', async (req, res) => {
  const { task } = req.body;
  if (task.trim()) {
    await Todo.create({ task });
  }
  res.redirect('/');
});

// Toggle Completed Status
router.get('/toggle/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.redirect('/');
});

// Delete Todo
router.get('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;