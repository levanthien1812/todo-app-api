const Todo = require('../models/todo.model');

const createTodo = async (todoBody) => {
  const todo = await Todo.create(todoBody);
  return todo;
};

const getTodos = async (filter, options) => {
  const { results: todos, ...rest } = await Todo.paginate(filter, options);
  return todos;
};

const getTodo = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const updateTodo = async (id, todoBody) => {
  const updatedTodo = await Todo.findByIdAndUpdate(id, { $set: todoBody }, { new: true });
  return updatedTodo;
};

const deleteTodo = async (id) => {
  const todo = await Todo.findByIdAndDelete(id);
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
  updateTodo,
  deleteTodo,
};
