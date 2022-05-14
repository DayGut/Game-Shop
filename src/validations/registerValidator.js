const {users} = require('../data');
const { check, body } = require('express-validator');

let validateRegister = [
 check("name")
    .notEmpty().withMessage("El nombre es requerido")
    .isLength({ min:2}).withMessage("ingrese nombre valido"),
 check("email")
    .notEmpty().withMessage("Se Requiere email")
    .isEmail().withMessage("ingrese un email valido"),
    body("email").custom((value)=>{
      let user = users.find(user => user.email === value);
      if(user){
          return false;
      }
      return true;
  }).withMessage("Email ya registrado"),
  check("pass")
      .notEmpty().withMessage("Ingrese una contraseña")
      .isLength({min: 8}).withMessage("La contraseña debe tener por lo menos 8 caracteres"), 
  check("pass2")
      .notEmpty().withMessage("Reingrese su contraseña"),

  body("pass2").custom((value, { req }) => {
      if(value !== req.body.pass){
          return false;
      }
      return true;
  }).withMessage("Las contraseñas no coinciden"),

  check("terms")
      .isString("on").withMessage("Debes aceptar los términos y condiciones")
];

module.exports = validateRegister;