const {getUsers, writeUsers} = require('../data');

module.exports = {
    logueo: (req, res) => {
        res.render('./login_register/login', {
            titulo: "Login"
        })
    }, 
    registro: (req, res) => {
        res.render('./login_register/register', {
            titulo: "Registro"
        })
    }, 
}