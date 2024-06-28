const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema)