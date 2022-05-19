const {check, body} = require('express-validator');
const {users} = require('../data');
const bcrypt = require('bcryptjs');

let validateLogin = [
    check("email")
        .notEmpty().withMessage("Ingrese su email").bail()
        .isEmail().withMessage("Email no valido").bail(),
    body("custom").custom((value, { req })=>{
        let user = users.find(user => user.email === req.body.email);
        if(bcrypt.compareSync(req.body.password, user.password)){
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("password")
        .notEmpty().withMessage("Ingrese su contraseña"),
];

module.exports = validateLogin;
