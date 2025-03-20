const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true},
    senha: { type: String, required: true}
});

const LoginModel = mongoose.model('Usuario', LoginSchema); 

class User{
    constructor(body) {
        this.body = body;
        this.errors = [];
    }

    async auth() {
        valida();

        console.log(this.errors);
        
        if(this.errors.length > 0) return;

        try {
            await LoginModel.findOne({email: this.email});

            if(this.user) {
                this.errors.push('Usuário não existe');
            }

            if(!bcrypt.compareSync(this.body.senha, this.user.password)) {
                this.errors.push('Senha inválida');
            }
            
        } catch(e) {
            console.log(e);
        }
    }

    valida() {
        if(!this.body.email || !this.body.senha) this.errors.push('Email e senha são obrigatórios');
    }

}

module.exports = User;
