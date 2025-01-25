const Todo = require('../models/todo.model');

const createTodo = async (todoBody) => {
  const todo = await Todo.create(todoBody);
  return todo;
};

const getTodos = async () => {
  const todos = await Todo.find();
  return todos;
};

const getTodo = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const findById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

module.exports = {
  createTodo,
  findById,
  getTodos,
  getTodo,
};
