const cookieSession = (req,res,next) =>{
    if (req.cookies.pagCookie){
        req.session.user = req.cookies.pagCookie;
        res.locals.user = req.session.user;
    }
    next()
}

module.exports = cookieSession;