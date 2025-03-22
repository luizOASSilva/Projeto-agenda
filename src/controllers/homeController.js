const Contato = require('../models/ContatoModel');

exports.home = async(req, res) => {
    const contato = new Contato(req.body);
    
    try {

        const arrContatos = await contato.buscaContato();

        res.locals.mensagemDeletado = req.flash('delete');
        res.locals.mensagemEditado = req.flash('edit');
        res.locals.mensagemCriado = req.flash('register');

        res.render('index', { arrContatos } );
    } catch(e) {
        console.log(e);
    }
};

exports.adicionarContato = (req, res) => {
    res.render('contato', { errorMessage: req.flash('errors') || '', contato: '', telefoneLimpo: '' });
};
