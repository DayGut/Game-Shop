const {users, writeUsers} = require('../data');
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
            
            let user= users.find(user => user.email === req.body.email)
            
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
        
        }else{
           

        res.render('user/login', {
            titulo: "Login",
            css: "login.css",
            errors: errors.mapped(),
            session: req.session
        })
        res.send(req.session)
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
                    password: bcrypt.hashSync(req.body.pass, 8),
                    avatar: req.file ? req.file.filename : "user-avatar.jpeg",
                    rol: "user"
                }
    
        
            users.push(newUser)

        
            writeUsers(users)

            res.redirect('/user/login')

        }else{
            
            res.render('user/register', {
                titulo: "Registro",
                css: "registro.css",
                errors: errors.mapped(),
                session: req.session
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
