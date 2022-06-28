const {check, body} = require('express-validator');

let validateAddProducts = [
    check("name")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isAlphanumeric().withMessage("Nombre no valido").bail()
        .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
        check("description")
        .notEmpty().withMessage("Ingrese una descripcion").bail()
        .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
    check("price")
         .notEmpty().withMessage("Ingerese un precio").bail()
         .isNumeric().withMessage("Ingrese un valor numerico"),
    check("categorias_id")
         .notEmpty().withMessage("selecciona una categoria"),
    check("image")
            .custom(value =>{
                if(value.match(/\.(jpg|jpeg|png|gif)$/)){
                    return true;
                }
                return false;
            }).withMessage("jpg, jpeg, png, gif"),
            
    body("discount").custom(value =>{
        if(value >=0 && value <= 100){
            return true;
        }
        return false;
    }).withMessage("El descuesto tiene que ser entre 0 y 100")
    

 
];

module.exports = validateAddProducts;