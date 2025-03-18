const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: String,
    senha: String
});

class Login {
    contructor(body) {
        this.body = body;
    }
};

module.exports = Login;
