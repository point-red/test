const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post(
  '/',
  userController.validate('createUser'),
  userController.createUser
);

module.exports = router;
