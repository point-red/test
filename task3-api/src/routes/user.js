const express = require('express')
const Route = express.Router()

const userController = require('../controllers/users')
const { validation } = require('../middleware/validation')



Route
    .get('/',  userController.getUsers)
    .get('/:id',  userController.getUserById) 
    .post('/', validation, userController.postUser) 
    .put('/:id',  userController.putUser) 
    .delete('/:id',  userController.deleteUser) 
    
module.exports = Route