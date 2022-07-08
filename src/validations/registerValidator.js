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
<<<<<<< HEAD
    let extensionesPermitidas = ["jpg","jpeg","png", "gif"];
=======
    let extensiones = ["jpg","jpeg","png", "gif"];
>>>>>>> 5fb54dbc35d13539a919ec878ed959bfe01331c2
        if(!file){
            return Promise.reject("Seleccione una imagen");
        }
        let extensionOriginal = req.file.mimetype.split("/").pop()
<<<<<<< HEAD
        if(!extensionesPermitidas.includes(extensionOriginal)){
            throw new Error(`Debe ser archivo de imagen ${extensionesPermitidas.join(', ')}`)
        }
        return true;
    }),

=======
        if(!extensiones.includes(extensionOriginal)){
            return Promise.reject("Formato de imagen no valido");
        }
        return true;
    }
    ).withMessage("Formato de imagen no valido")
];/* A template literal. */
>>>>>>> 5fb54dbc35d13539a919ec878ed959bfe01331c2

//             throw new Error(`Debe ser archivo de imagen ${extensiones.join(', ')}`)
//         }
//         return true;
//     }),

//   check("terms")
//       .isString("on").withMessage("Debes aceptar los términos y condiciones")
       
// ];

module.exports = validateRegister;