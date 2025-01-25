const express = require('express');
const { todoController } = require('../../controllers');
const { todoValidation } = require('../../validations');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .post(auth('createTodo'), validate(todoValidation.createTodo), todoController.createTodo)
  .get(auth('getTodos'), todoController.getTodos);

router.route('/:id').get(auth('getTodo'), todoController.getTodo);

module.exports = router;
