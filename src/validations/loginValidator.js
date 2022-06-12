const {check, body} = require('express-validator');
//const {users} = require('../data');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let validateLogin = [
    check("email")
        .notEmpty().withMessage("Ingrese su email").bail()
        .isEmail().withMessage("Email no valido").bail(),
    body("custom").custom((value, { req })=>{
        //let user = users.find(user => user.email === req.body.email);
        return db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user)=>{
        if(bcrypt.compareSync(req.body.password, user.password)){
            return Promise.reject();
        }
    })
    .catch(error => {
 return Promise.reject("Usuario o contraseña incorrectos");
        
    })
}),
    check("password")
        .notEmpty().withMessage("Ingrese su contraseña"),
];

module.exports = validateLogin;
