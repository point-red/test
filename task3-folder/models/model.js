const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  age: {
    type: Number,
    required: true,
    maxlength: 1,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = function UsersModel() {
  return mongoose.model("user", usersSchema);
};
