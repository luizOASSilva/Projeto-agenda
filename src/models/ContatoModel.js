const moongose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new moongose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    telefone: String,
});

const ContatoModel = moongose.model('contato', ContatoSchema);

class Contato{
    constructor(body) {
        this.body = body;
        this.telefoneLimpo = '';
        this.errors = [];
    }

    async enviaContato() {
        this.valida();

        if(this.errors.length > 0) return

        try {
            const model = new ContatoModel(this.body);
            await ContatoModel.create(model);
        } catch(e) {
            console.log(e);
        }
    }

    async buscaContato() {
        try {
            return await ContatoModel.find();
        } catch(e) {
            console.log(e);
        }
    }

    valida() {
        if(!this.body.nome || !this.body.sobrenome){
            this.errors.push('Campos: "nome" e "sobrenome" são obrigatórios');
            return;
        } 

        if(!this.body.email && !this.body.telefone){
            this.errors.push('Pelo menos uma forma de é contato obrigatória (e-mail ou telefone)');
            return;
        } 
        
        this.limpaTelefone();

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.telefoneLimpo.length < 11) this.errors.push('Telefone incompleto');
    }

    limpaTelefone() {
        this.telefoneLimpo = this.body.telefone.replace(/\D/g, '');
    }

    async procuraPorId(id) {
        try {
            const contato = await ContatoModel.findById({_id: id});
            this.telefoneLimpo = contato.telefoneLimpo;
            return contato;
        } catch(e) {
            console.log(e);
        }
    }

    async editaContato(id) {
        try {
            this.valida();

            if(this.errors > 0) return

            await ContatoModel.findByIdAndUpdate(id, this.body)
        } catch(e) {
            console.log(e);
        }
    }

    async deletaContato(id) {
        try {
            await ContatoModel.findOneAndDelete({_id: id});
        } catch(e) {
            console.log(e);
        }
    }

}

module.exports = Contato;
