const User = require('../models/AuthModel');

exports.login = (req, res) => {

    res.locals.successMessage = req.flash('success');
    res.locals.errorMessage= req.flash('errors');
    res.locals.loginObrigatorio= req.flash('loginObrigatorio');

    res.render('login', {
        formTitle: 'Login',
        formUrl: '/login/auth',
        confirmPassword: false,
        figureUrl: '/img/ssshape_login.svg',
        buttonText: 'Entrar',
    });
};

exports.fazLogin = async(req, res) => {
    const user = new User(req.body);

    try {
        await user.login();

        if(user.errors.length > 0) {
            req.flash('errors', user.errors);

            req.session.save(() => {
                return res.redirect('/login'); 
            });
        }else {
            req.session.user = user.user;

            res.redirect('/');
        }
    } catch(e) {
        console.log(e);
    }
}

exports.cadastro = (req, res) => {

    res.locals.errorMessage = req.flash('errors');

    res.render('cadastro', {
        formTitle: 'Cadastro',  
        formUrl: '/login/cadastro/auth',
        confirmPassword: true,
        figureUrl: '/img/ssshape_cadastro.svg',
        buttonText: 'Cadastrar-se',
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

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
