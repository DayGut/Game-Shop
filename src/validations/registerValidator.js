const { check } = require('express-validator');

let validateRegister = [
 check("name")
    .notEmpty().withMessage("El nombre es requerido")
    .isLength({ min:2}).withMessage("ingrese nombre valido"),
 check("user")
    .notEmpty().withMessage("Se Requiere email").bail()
    .isEmail().withMessage("ingrese un email valido"),
 check("password")
 .notEmpty().withMessage("Ingrese una contraseña")
  .isLength({min: 8}).withMessage("La contraseña debe tener minimo 8 caracteres"),
]