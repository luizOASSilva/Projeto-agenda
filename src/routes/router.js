const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const contatoController = require('../controllers/contatoController');

    // rotas da home
    router.get('/', homeController.home);
    router.post('/contato', homeController.adicionarContato);

    // rotas de contato
    router.get('/contato', contatoController.contato);
    router.post('/', contatoController.registraContato);


    // rotas de login
    router.get('/login', authController.login);
    router.post('/', authController.fazLogin);

    //rotas de cadastro
    router.get('/login/cadastro', authController.cadastro);
    router.post('/login', authController.criaCadastro);

module.exports = router;
