const CadastroModel = require('../models/CadastroModel');

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
    const login = new Login(req.body);
    res.send(login.body);
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
    await CadastroModel.cadastraUsuario(req);
    res.redirect('/login');
};
