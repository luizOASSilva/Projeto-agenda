const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const CadastroSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true},
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

        this.usuarioExiste();

        try{
            const salt = bcrypt.genSaltSync();
            this.body.senha = bcrypt.hashSync(this.body.senha, salt);

            this.user = await CadastroModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    valida() {

        if(!this.body.email || !this.body.senha) {
            this.errors.push('Email e senha são obrigarórios');
            return;
        }

        if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

        if(this.body.senha.length < 4 || this.body.senha.length > 50) this.errors.push('A senha deve conter entre 4 e 50 caracteres');

        if(validator.isEmail && this.body.senha != this.body.confirmaSenha) this.errors.push('As senhas não coincidem');
    }

    async usuarioExiste() {
        if(await CadastroModel.findOne({email: this.body.email})) {
            this.errors.push('Já existe um usuário com esse email cadastrado');
        }
    }
}

module.exports = User;


exports = CadastroModel;
