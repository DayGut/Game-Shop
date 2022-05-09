const {users, writeUsers} = require('../data');


module.exports = {
    login: (req, res) => {
        res.render('user/login', {
            titulo:"Login",
            css:"login.css",
            session: req.session
        })
    },  
    processlogin: (req, res) =>{
        let user = users.find(user => user.email === req.body.email);
        console.log(user);
        req.user = {
            id: user.id, 
            email: user.email,
            password: user.pass,
            avatar: user.avatar,
            rol: user.rol,
        }

       //res.locals.user = req.session.user

       res.redirect('/')
    },

    registro: (req, res) => {
        res.render('user/register', {
            titulo: "Registro",
            css:"register.css",
            session: req.session
        })
    },
   
        processRegister: (req, res) => {
                //Registrar un usuario - Guardarlo en el JSON
                // Paso 1 - Crear un objeto User

                //res.send(req.body)//es solo para comprobar si la imagen y los datos se subieron correctamente
    
                let lastId = 0;
                users.forEach(user => {
                    if(user.id > lastId){
                        lastId = user.id
                    }
                });
    
                let newUser = {
                    id: lastId + 1,
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.pass,
                    avatar: req.file ? req.file.filename : "user-avatar.jpeg",
                    rol: "user"
                }
    
                // Paso 2 - Guardar el nuevo usuario en el array de usuarios
    
                users.push(newUser)
    
                // Paso 3 - Escribir el JSON de usuarios con el array actual
    
                writeUsers(users)
    
                // Paso 4 - Devolver respuesta (redirección)
    
                res.redirect('/user/login')
    
           
        }
    
};
