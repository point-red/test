const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
