const CadastroModel = require('../models/CadastroModel');
const LoginModel = require('../models/LoginModel');

exports.login = (req, res) => {
    res.render('login', {
        formTitle: 'Login',
        formUrl: '/',
        confirmPassword: false,
        figureUrl: '/img/ssshape_login.svg',
        buttonText: 'Entrar',
        flashMessage: req.flash('errors'),
    });
};

exports.fazLogin = async(req, res) => {
    const user = new LoginModel(req.body);
    try {
        await user.auth();

        if(user.errors.length > 0) {
            req.flash('errors', newUser.errors);
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
        flashMessage: req.flash('errors'),
    });
};

exports.criaCadastro = async(req, res) => {
    const newUser = new CadastroModel(req.body);

    try {
        await newUser.auth();

        if(newUser.errors.length > 0) {
            req.flash('errors', newUser.errors);

            req.session.save(() => {
                res.redirect('/login/cadastro'); 
            });
            return;
        }else {
            res.redirect('/login');
        }
    } catch(e) {
        console.log(e);
    }
};
