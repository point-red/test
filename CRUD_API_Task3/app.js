require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/v1/', routes)

const PORT = process.env.PORT

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
