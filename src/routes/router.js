const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const contatoController = require('../controllers/contatoController');
const { loginObrigatorio } = require('../middleware/globalMiddlewares');

// rotas da home
router.get('/', homeController.home);
router.post('/contato', loginObrigatorio, homeController.adicionarContato);

// rotas de contato
router.get('/contato', loginObrigatorio, contatoController.contato);
router.post('/', loginObrigatorio, contatoController.registraContato);


// rotas de login
router.get('/login', authController.login);
router.post('/teste', authController.fazLogin);

//rotas de cadastro
router.get('/login/cadastro', authController.cadastro);
router.post('/login', authController.criaCadastro);

// rota de logout
router.get('/login/logout/', loginObrigatorio, authController.logout);

// rota para deletar contato
router.delete('/contato/deleta/id:', contatoController.deletaContato);


module.exports = router;
