module.exports= {
    index: (req, res) => {
        res.render('admin/adminIndex',{
            titulo:'Administrador',
            session: req.session
        })
    }
}