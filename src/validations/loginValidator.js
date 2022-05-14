const { check, body } = require('express-validator');
const {users} = require('../data');
const bcrypt = require('bcryptjs');

let validateLogin = [
    check("email")
        .notEmpty().withMessage("Ingrese su email").bail()
        .isEmail().withMessage("Email no valido").bail(),
    body("email").custom((value, { req })=>{
        let user = users.find(user => user.email === value);
        if(bcrypt.compareSync(user.pass === req.body.pass)){
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("password")
        .notEmpty().withMessage("Ingrese su contraseña"),
];

module.exports = validateLogin;