const {getUsers, writeUsers} = require('../data');

module.exports = {
    logueo: (req, res) => {
        res.render('login', {
            titulo: "Login"
        })
    }, 
    registro: (req, res) => {
        res.render('register', {
            titulo: "Registro"
        })
    }, 
}