//const {users, writeUsers} = require('../data');
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
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.pass, 8),
                    avatar: req.file ? req.file.filename : "user-avatar.jpeg",
                    rol: "admin"//toma los datos los carga en la base de datos
                })
                .then((user) => {
                    res.redirect('/user/login')//luego redirecciona a la pagina de login
                })
                .catch(error => console.log(error))//vuelvo a cargar en el login y me muestrael error
                
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
    }
};
