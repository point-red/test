const express = require('express')
const userController = require('../controllers/users')
const router = express.Router()

router
.post('/', userController.createUser)
.get('/', userController.readUser)
.patch('/:id', userController.updateUser)
.delete('/:id', userController.deleteUser)

module.exports = router
