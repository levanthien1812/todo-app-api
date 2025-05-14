const httpStatus = require('http-status');
const { todoService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(todo);
});

const getTodos = catchAsync(async (req, res) => {
  const params = req.query;
  console.log({ params });
  const options = {
    page: parseInt(params.page) || 1,
    limit: parseInt(params.limit) || 10,
    sortBy: params.sortBy || 'createdAt',
    sortType: params.sortType || 'desc',
  };
  const filter = {
    ...(params.searchString && params.searchString.length > 0
      ? {
          $or: [
            { title: { $regex: params.searchString, $options: 'i' } },
            { description: { $regex: params.searchString, $options: 'i' } },
          ],
        }
      : {}),
    status: params.status || null,
    isImportant: params.isImportant || null,
    isUrgent: params.isUrgent || null,
    tags: params.tags ? { $regex: params.tags || '', $options: 'i' } : null,
  };

  const todos = await todoService.getTodos(filter, options);
  res.status(httpStatus.OK).send(todos);
});

const getTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getTodo(req.params.id);
  res.status(httpStatus.OK).send(todo);
});

const updateTodo = catchAsync(async (req, res, next) => {
  const updatedTodo = await todoService.updateTodo(req.params.id, req.body);
  return res.status(httpStatus.CREATED).send({ todo: updatedTodo });
});

const deleteTodo = catchAsync(async (req, res, next) => {
  const deletedTodo = await todoService.deleteTodo(req.params.id);
  return res.status(httpStatus.OK).send({ todo: deletedTodo });
});

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
