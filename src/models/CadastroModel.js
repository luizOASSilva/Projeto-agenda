const mongoose = require('mongoose');
const validator = require('validator');

const CadastroSchema = new mongoose.Schema({
    email: String,
    senha: String
});

const CadastroModel = mongoose.model('usuarios', CadastroSchema);

class User {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async auth() {
        this.valida();

        if(this.errors.length > 0) return

        try{
            this.user = await CadastroModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    valida() {

        if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

        if(this.body.senha.length < 4 || this.body.senha.length > 50) this.errors.push('A senha deve conter entre 4 e 50 caracteres');
    }
}

module.exports = User;


exports = CadastroModel;
