const { getProducts } = require('../data')



module.exports = {
    index: (req,res) => {

        res.render("home.ejs",{
            productos:getProducts,
            titulo: "Game-Shop"
        })
     
    }
}