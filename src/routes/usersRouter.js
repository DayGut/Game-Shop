const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

/*Renderiza vista login */
router.get('/logueo', usersController.logueo);
/* Renderiza vista registro */
router.get('/registro', usersController.registro);


module.exports = router;