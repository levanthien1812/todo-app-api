const Joi = require('joi');
const { STATUS_VALUE } = require('../config/todo');

const createTodo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    createdAt: Joi.date().optional().default(new Date()),
    status: Joi.string()
      .valid(...Object.values(STATUS_VALUE))
      .required(),
    dueDate: Joi.date().required(),
    description: Joi.string().required(),
    isImportant: Joi.boolean().required(),
    isUrgent: Joi.boolean().required(),
    subtasks: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          isCompleted: Joi.boolean().required(),
        })
      )
      .optional(),
    notes: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional(),
  }),
};

module.exports = {
  createTodo,
};
