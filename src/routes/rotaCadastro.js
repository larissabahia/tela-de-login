const express = require('express');

const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/cadastro', cadastroController.index);



module.exports = router;
