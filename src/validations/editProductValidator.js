const {check, body} = require('express-validator');

let validateEditProducts = [
    check("name")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isAlphanumeric().withMessage("Nombre no valido").bail()
        .isLength({min:5}).withMessage("Debe tener al menos 4 caracteres"),
    check("price")
         .notEmpty().withMessage("Ingerese un precio").bail()
         .isNumeric().withMessage("Ingrese un valor numerico"),
    check("categorias_id")
         .notEmpty().withMessage("selecciona una categoria"),
    body("discount").custom(value =>{
        if(value >=0 && value <= 100){
            return true;
        }
        return false;
    }).withMessage("El descuesto tiene que ser entre 0 y 100"),
    check("description").notEmpty().withMessage("Ingrese una descripcion"),
    

 
];

module.exports = validateEditProducts;