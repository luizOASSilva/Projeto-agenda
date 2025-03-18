const moongose = require('mongoose');

const ContatoSchema = new moongose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    telefone: Number,
});

const ContatoModel = moongose.model('contato', ContatoSchema);

exports.enviaContato = async req => {
    try {
        const model = new ContatoModel(req.body);
        await ContatoModel.create(model);
    } catch(e) {
        console.log(e);
    }
};

exports.buscaContato = async() => {
    try {
        return await ContatoModel.find();
    } catch(e) {
        console.log(e);
    }
};

exports = ContatoModel;



