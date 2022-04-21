
module.exports = {
    login: (req, res) => {
        res.render('user/login', {
            titulo:"Login",
            css:"login.css"
        })
    }, 
    registro: (req, res) => {
        res.render('user/register', {
            titulo: "Registro",
            css:"register.css"
        })
    }, 
}