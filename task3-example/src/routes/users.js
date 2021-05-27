const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController')

router.post('/user', usersController.create)

module.exports = router; 