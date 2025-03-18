const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
    email: String,
    senha: String
});

const CadastroModel = mongoose.model('usuarios', CadastroSchema);

exports.cadastraUsuario = async req => {
    try{ 
        const modal = new CadastroModel(req.body);
        await CadastroModel.create(modal);
    } catch(e) {
        console.log(e);
    }
};

exports = CadastroModel;
