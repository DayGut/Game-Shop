const { check, body } = require('express-validator');
const db = require('../database/models');

let validateRegister = [
 check("name")
    .notEmpty().withMessage("El nombre es requerido")
    .isLength({ min:2}).withMessage("ingrese nombre valido"),
 check("email")
    .notEmpty().withMessage("Se Requiere email")
    .isEmail().withMessage("ingrese un email valido"),
    body("email").custom((value)=>{
      
        return db.Usuario.findOne({
            where: {
                email: value
            }
        })
        .then((user)=>{ 
      if(user){
          return Promise.reject("El email ya existe");
      }
    })
  }),
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
  body("avatar").custom((value, {req}) => {
    let file = req.file
    let extensionesPermitidas = ["jpg","jpeg","png", "gif"];
        if(!file){
            return Promise.reject("Subir un avatar")
        }
        let extensionOriginal = req.file.mimetype.split("/").pop()
        if(!extensionesPermitidas.includes(extensionOriginal)){
            throw new Error(`Las extensiones permitidas son ${extensionesPermitidas.join(', ')}`)
        }
        return true;
    }),
    check("terms")
          .isString("on").withMessage("Debes aceptar los términos y condiciones")
];


//             throw new Error(`Debe ser archivo de imagen ${extensiones.join(', ')}`)
//         }
//     }),

//   check("terms")
//       .isString("on").withMessage("Debes aceptar los términos y condiciones")
       
// ];

module.exports = validateRegister;