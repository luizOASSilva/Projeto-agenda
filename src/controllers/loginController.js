exports.login = (req, res) => {
    res.render('login', {
        formTitle: 'Login',
        formUrl: '/',
        confirmPassword: false,
        figureUrl: '/img/ssshape_login.svg',
        buttonText: 'Entrar'
    });
};

exports.sendLogin = (req, res) => {
    res.render('index');
};

exports.cadastro = (req, res) => {
    res.render('cadastro', {
        formTitle: 'Cadastro',  
        formUrl: '/login/cadastro',
        confirmPassword: true,
        figureUrl: '/img/ssshape_cadastro.svg',
        buttonText: 'Cadastrar-se'
    });
};
