const {check, body} = require('express-validator');
const db = require('../database/models');

let validateAddProducts = [
    check("name")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isAlphanumeric().withMessage("Nombre no valido").bail()
        .isLength({min:5}).withMessage("Debe tener al menos 4 caracteres"),
    check("price")
         .notEmpty().withMessage("Ingerese un precio").bail()
         .isNumeric().withMessage("Ingrese un valor numerico"),
    check("categoryId")
         .notEmpty().withMessage("selecciona una categoria"),
    body("discount").custom(value =>{
        
        if(value >=0 && value <= 100){
            return true;
        }
        return false;
    }).withMessage("El descuesto tiene que ser entre 0 y 100")
    

 
];

module.exports = validateAddProducts;