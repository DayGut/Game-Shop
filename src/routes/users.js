const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const unploadFile = require('../')


/*Renderiza vista login */
router.get('/login', usersController.login);
/* Renderiza vista registro */
router.get('/register', usersController.register);


module.exports = router;