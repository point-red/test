const express = require('express')
const usersRouters = require('./users')
const router = express.Router()

router
  .use('/users', usersRouters)

module.exports = router
