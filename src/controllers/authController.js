const CadastroModel = require('../models/CadastroModel');
const User = require('../models/CadastroModel');

exports.login = (req, res) => {
    res.render('login', {
        formTitle: 'Login',
        formUrl: '/login/auth',
        confirmPassword: false,
        figureUrl: '/img/ssshape_login.svg',
        buttonText: 'Entrar',
    });
};

exports.fazLogin = (req, res) => {

}

exports.cadastro = (req, res) => {
    res.render('cadastro', {
        formTitle: 'Cadastro',  
        formUrl: '/login',
        confirmPassword: true,
        figureUrl: '/img/ssshape_cadastro.svg',
        buttonText: 'Cadastrar-se'
    });
};

exports.criaCadastro = async(req, res) => {
    const user = new User(req.body);

    try {
        await user.auth();
        res.redirect('/login');
    } catch(e) {
        console.log(e)
    }

    // if(user.errors.length > 0) {
    //     // req.flash('errors', this.login.errors);
    //     req.session.save(() => {
    //         return res.redirect('/cadastro');
    //     });
    //     return;
    // }
};
