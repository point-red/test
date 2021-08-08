const express = require('express') // Import express
const router = express.Router() // Make router from app
const UserController = require('../controllers/userController.js') // Import userController
const userValidator = require('../middlewares/validators/userValidator.js') // Import validator to validate every request from user

router.get('/', UserController.getAll) // If accessing localhost:3000/user, it will call getAll function in userController class
router.get('/:id', UserController.getOne) // If accessing localhost:3000/user/:id, it will call getOne function in userController class
router.post('/create', userValidator.create, UserController.create) // If accessing localhost:3000/user/create, it will call create function in userController class
router.put('/update/:id', userValidator.update, UserController.update) // If accessing localhost:3000/user/update/:id, it will call update function in userController class
router.delete('/delete/:id', UserController.delete) // If accessing localhost:3000/user/delete/:id, it will call delete function in userController class

module.exports = router; // Export router
