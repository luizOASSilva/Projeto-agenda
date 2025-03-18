const contatoModel = require('../models/ContatoModel')

exports.home = async(req, res) => {
    try {
        const arrContatos = await contatoModel.buscaContato();
        res.render('index', { arrContatos });
    } catch(e) {
        console.log(e);
    }
};

exports.adicionarContato = (req, res) => {
    res.render('contato');
};

