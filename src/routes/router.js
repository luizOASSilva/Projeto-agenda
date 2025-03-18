const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const contatoController = require('../controllers/contatoController');

router.get('/', homeController.home);
router.post('/contato', contatoController.contato);

router.get('/login', loginController.login);
router.post('/', loginController.sendLogin)
router.get('/login/cadastro', loginController.cadastro);

router.get('/login/cadastro', loginController.cadastro);

module.exports = router;
