const cookieSession = (req,res,next) =>{
    if (req.cookies.pagCookie){
        req.session.user =req.cookies.pagCookie;
        res.local.user = req.session.user;
    }
}