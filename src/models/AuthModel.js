const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const AuthSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true},
});

const AuthModel = mongoose.model('usuarios', AuthSchema);

class User {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async registra() {

        this.validaRegistro();

        if(this.errors.length > 0) return

        await this.usuarioExiste();

        try{
            const salt = bcrypt.genSaltSync();
            this.body.senha = bcrypt.hashSync(this.body.senha, salt);

            this.body = await AuthModel.create(this.body);

        } catch(e) {
            console.log(e);
        }
    }

    async login() {

        this.validaLogin();
            
        if(this.errors.length > 0) return;
    
        try {
            this.user = await AuthModel.findOne({email: this.body.email});
    
            if(!this.user || !bcrypt.compareSync(this.body.senha, this.user.senha)) {
                this.errors.push('Email ou senha inválida');
                return;
            }
                
        } catch(e) {
            console.log(e);
        }
    }

    validaRegistro() {

        if(!this.body.email || !this.body.senha) {
            this.errors.push('Campos: "e-mail" e "senha" são obrigatórios');
            return;
        }

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.body.senha.length < 4 || this.body.senha.length > 50) this.errors.push('A senha deve conter entre 4 e 50 caracteres');

        if(validator.isEmail && this.body.senha != this.body.confirmaSenha) this.errors.push('As senhas não coincidem');
    }

    validaLogin() {

        if(!this.body.email || !this.body.senha) {
            this.errors.push('Campos: "e-mail" e "senha" são obrigatórios');
            return;
        }

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    }

    async usuarioExiste() {
        if(await AuthModel.findOne({email: this.body.email})) {
            this.errors.push('Já existe um usuário com este e-mail cadastrado');
        }
    }
}

module.exports = User;
