const express= require('express')
const Route = express.Router()


const userRoutes = require('./routes/user')
Route.use('/api/users', userRoutes)

module.exports = Route