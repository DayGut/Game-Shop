const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const uploadFile = require('../middlewares/unploadAvatar');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userInSessionCheck = require('../middlewares/userInSessionCheck');

/*Renderiza vista login */
router.get('/login', usersController.login);
router.post('/login', loginValidator, usersController.processlogin);
/* Renderiza vista registro */
router.get('/registro', userInSessionCheck, usersController.registro);
router.get('/login', userInSessionCheck, usersController.login);
/* GET - Logout */
router.get('/logout', usersController.logout);
/* POST - Crea un nuevo usuario */
router.post('/registro', uploadFile.single('avatar'),registerValidator, usersController.processRegister)
/*perfil del usuario*/
router.get('/perfil',uploadFile.single('avatar'),registerValidator, usersController.editProfile);
//router.put('/perfil/:id', editProfile)


module.exports = router;