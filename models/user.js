const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, // email should be unique
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true }); // timestamps will add createdAt and updatedAt fields automatically

// Model
const User = mongoose.model('user', userSchema);

module.exports = User;