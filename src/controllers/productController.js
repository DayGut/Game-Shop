const { getProducts } = require('../data');


module.exports = {

    detalle:(req,res)=>{
        res.render('products/productDetail', { 
            title: "Detalle del producto", 
        });
    },
    carrito:(req, res) => {
        res.render('products/productCart', { 
            title: "Carrito de compras",
        }) 
    },
    todosLosProductos: (req, res) => {
        res.render("casa/home", {
            title: "Productos", getProducts 
        })

    }
}