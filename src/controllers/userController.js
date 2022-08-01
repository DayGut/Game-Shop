const db = require('../database/models');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');


module.exports = {
    login: (req, res) => {

        res.render('user/login', {
            titulo:"Login",
            css:"login.css",
            session: req.session
        })
    },  
    processlogin: (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){

            db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user)=>{
            req.session.user= {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar:user.avatar,
                rol: user.rol
            }
           
         if(req.body.remember){
            const TIME_IN_MILISECONDS = 60000; 
            res.cookie("pagCookie", req.session.user,{
                expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                httpOnly: true,
                secure: true
            })
         }
        res.locals.user = req.session.user

        res.redirect('/')
        })
        .catch(error => console.log(error))
        }else{           

        res.render('user/login', {
            titulo: "Login",
            css: "login.css",
            errors: errors.mapped(),
            session: req.session
        })
    
    }
   
    },

    registro: (req, res) => {
        res.render('user/register', {
            titulo: "Registro",
            css:"register.css",
            session: req.session
        })
    },
   
        processRegister: (req, res) => {
            
        let errors = validationResult(req);
        if(errors.isEmpty()){
                db.Usuario.create({
                    
                    name: req.body.name,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.pass, 8),
                    avatar: req.file ? req.file.filename : "user-avatar.jpeg",
                    rol: "admin"//toma los datos los carga en la base de datos
                })
                .then((user) => {
                    res.render('user/login',{
                  session: req.session,
                    titulo: "Login",
                  user
                 })//luego redirecciona a la pagina de login
                })
                .catch(error => res.send(error))//vuelvo a cargar en el login y me muestrael error
                
        }else{
            
            res.render('user/register', {
                titulo: "Registro",
                css: "registro.css",
                errors: errors.mapped(),
                session: req.session,
                old: req.body//para que se vea en el formulario y no se vuelve a llenar
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();//destruye la session

        if(req.cookies.pagCookie){
            res.cookie('pagCookie', '', { maxAge: -1 })
        }

        res.redirect('/')
    },
    perfil:(req,res)=>{
        db.Usuario.findByPk(req.session.user.id)
        .then(user => {
            res.render('user/editProfile', {
                titulo: "Editar Perfil",
                session: req.session,
                user,
            })
        })
        .catch(errors => console.log(errors))
       
    },
            editProfile : async (req, res) => {
                try {
                    let usuarioEdit = await db.Usuario.findByPk(req.params.id)
                    await db.Usuario.update({
                        ...req.body,
                        avatar: req.file ? req.file.filename : req.session.user.avatar
                    },{
                        where : {id : req.params.id}
                    })
                    let usuario = await db.Usuario.findByPk(req.params.id)
                   
                    req.session.user = {
                        id : usuario.id,
                        name : usuario.name,
                        lastname : usuario.lastname,
                        avatar : usuario.avatar,
                        rol : usuario.rol
                    }
                  
                    
                    
                    res.locals.user = req.session.user;
                    res.redirect('/')
                } catch (error) {
                    console.log(error);
                }
            }
};
