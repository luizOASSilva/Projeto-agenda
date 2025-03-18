const ContatoModel = require('../models/ContatoModel')

exports.contato = (req, res) => {
    res.render('contato');
};

exports.registraContato = async (req, res) => {
    await ContatoModel.enviaContato(req);
    res.redirect('/')
}
