const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

mongoose
  .connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err))

const User = require('./User')

module.exports = { User }

