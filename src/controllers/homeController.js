const Contato = require('../models/ContatoModel')

exports.home = async(req, res) => {
    const contato = new Contato(req.body);
    
    try {
        const arrContatos = await contato.buscaContato();
        res.render('index', { arrContatos } );
    } catch(e) {
        console.log(e);
    }
};

exports.adicionarContato = (req, res) => {
    res.render('contato', { errorMessage: req.flash('errors') || '' });
};
