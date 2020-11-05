const express = require('express')
const Route = express.Router()

const userController = require('../controllers/users')
const { validation } = require('../middleware/validation')



Route
    .get('/',  userController.getUsers)
    .get('/:name',  userController.getUserByName) 
    .post('/', validation, userController.postUser) 
    .put('/:name',  userController.putUser) 
    .delete('/:name',  userController.deleteUser) 
    
module.exports = Route