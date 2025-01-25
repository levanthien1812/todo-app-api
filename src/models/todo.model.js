const mongoose = require('mongoose');
const { STATUS_VALUE } = require('../config/todo');
const { toJSON } = require('./plugins');

const SubtaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, required: true, default: false },
});

const TodoSchema = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: Object.values(STATUS_VALUE), required: true },
  dueDate: { type: Date, required: true },
  description: { type: String, required: false },
  isImportant: { type: Boolean, required: true, default: false },
  isUrgent: { type: Boolean, required: true, default: false },
  subtasks: { type: [SubtaskSchema], default: [], required: false },
  notes: { type: String, required: false },
  tags: { type: [String], default: [], required: false },
});

const Todo = mongoose.model('Todo', TodoSchema);

TodoSchema.plugin(toJSON);

module.exports = Todo;
