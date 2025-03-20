const User = require('../models/AuthModel');

exports.login = (req, res) => {
    res.render('login', {
        formTitle: 'Login',
        formUrl: '/teste',
        confirmPassword: false,
        figureUrl: '/img/ssshape_login.svg',
        buttonText: 'Entrar',
        errorMessage: req.flash('errors'),
        successMessage: req.flash('success') || ''
    });
};

exports.fazLogin = async(req, res) => {
    const user = new User(req.body);
    try {
        await user.login();

        if(user.errors.length > 0) {
            req.flash('errors', user.errors);
            req.session.save(() => {
                res.redirect('/login'); 
            });
        }else {
            res.redirect('/');
        }
    } catch(e) {
        console.log(e);
    }
}

exports.cadastro = (req, res) => {
    res.render('cadastro', {
        formTitle: 'Cadastro',  
        formUrl: '/login',
        confirmPassword: true,
        figureUrl: '/img/ssshape_cadastro.svg',
        buttonText: 'Cadastrar-se',
        errorMessage: req.flash('errors'),
    });
};

exports.criaCadastro = async(req, res) => {
    const user = new User(req.body);

    try {
        await user.registra();

        if(user.errors.length > 0) {
            req.flash('errors', user.errors);

            req.session.save(() => {
                return res.redirect('/login/cadastro'); 
            });
            return;
        }else {
            req.flash('success', 'E-mail cadastrado com sucesso!');
            return res.redirect('/login'); 
        }
    } catch(e) {
        console.log(e);
    }
};
