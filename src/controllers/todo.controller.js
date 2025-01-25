const { todoService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(todo);
});

const getTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getTodos();
  res.status(httpStatus.OK).send(todos);
});

const getTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getTodo(req.params.id);
  res.status(httpStatus.OK).send(todo);
});

module.exports = {
  createTodo,
  getTodos,
  getTodo,
};
