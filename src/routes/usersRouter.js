const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const uploadFile = require('../middlewares/unploadAvatar');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

/*Renderiza vista login */
router.get('/login', usersController.login);
router.post('/login', usersController.processlogin);
/* Renderiza vista registro */
router.get('/registro', usersController.registro);
/* POST - Crea un nuevo usuario */
 router.post('/registro', uploadFile.single('avatar'),registerValidator, usersController.processRegister)



module.exports = router;