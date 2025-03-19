const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true},
    senha: { type: String, required: true}
});

module.exports = User;
