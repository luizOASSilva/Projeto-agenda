const Contato = require('../models/ContatoModel');

exports.contato = (req, res) => {
    res.locals.errorMessage = req.flash('errors');
    res.render('contato', { contato: '' });
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
            req.flash('register', 'Contato adicionado à sua lista com sucesso');
            res.redirect('/');
        }
    } catch(e) {
        console.log(e);
    }
};

exports.edita = async(req, res) => {
    try {
        const contato = new Contato(req.body);

        const data = await contato.procuraPorId(req.params.id);

        res.locals.errorMessage = req.flash('errors');

        res.render('contato', { contato: data })
    } catch(e) {
        console.log(e);
    }
}

exports.editaContato = async(req, res) => {
    try{
        const contato = new Contato(req.body);

        await contato.editaContato(req.params.id);

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);

            req.session.save(() => {
                res.redirect(`/contato/edita/${req.params.id}`);
            })
        } else {
            req.flash('edit', 'Contato editado com sucesso');
            res.redirect('/');
        }
    } catch(e) {
        console.log(e);
    }
}

exports.deletaContato = async(req, res) => {
    const contato = new Contato(req.body);
    try {
        await contato.deletaContato(req.params.id);

        req.flash('delete', 'Contato deletado com sucesso');

        res.redirect('/');
    } catch(e) {
        console.log(e);
    }
};
