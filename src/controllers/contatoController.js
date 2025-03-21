const Contato = require('../models/ContatoModel');

exports.contato = (req, res) => {
    res.render('contato', { errorMessage: req.flash('errors') });
};

exports.registraContato = async (req, res) => {
    const contato = new Contato(req.body);
    try{
        await contato.enviaContato();

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);

            req.session.save(() => {
                res.redirect('/contato');
            })
        } else {
            res.redirect('/');
        }
    } catch(e) {
        console.log(e);
    }
};

exports.deletaContato = async(req, res) => {
    const contato = new Contato(req.body);
    try {
        await contato.deletaContato(req.param.id);

        res.redirect('/');
    } catch(e) {
        console.log(e);
    }
}
