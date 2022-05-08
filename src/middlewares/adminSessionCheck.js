const adminSessionCheck = (req, res, next) => {
    if(req.session.usuario.rol === "admin"){
        next()
    }else{
        res.redirect('No tenes permiso')
    }
}

module.exports = adminSessionCheck;