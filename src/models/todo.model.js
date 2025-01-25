const mongoose = require('mongoose');
const { STATUS_VALUE } = require('../config/todo');

const SubtaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, required: true, default: false },
});

const TodoSchema = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: Object.values(STATUS_VALUE), required: true },
  dueDate: { type: Date, required: true },
  description: { type: String, required: true },
  isImportant: { type: Boolean, required: true, default: false },
  isUrgent: { type: Boolean, required: true, default: false },
  subtasks: { type: [SubtaskSchema], default: [] },
  notes: { type: String },
  tags: { type: [String], default: [] },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
