const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email: {
          type: String,
          required: true,
          unique: true
      },
    age: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);