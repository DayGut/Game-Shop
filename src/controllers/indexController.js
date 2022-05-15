const { products } = require('../data')

module.exports= {

    index: (req, res) => {
        res.render("home", {
            titulo: "Home",
            products_title: "Productos",
            css:"home.css",
            products,
            //session: req.session
        })
        
    }
    
}
