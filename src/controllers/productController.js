const { getProducts } = require('../data');


module.exports = {
    list: (req, res) => {
        res.render("products/products", {
            products,
            titulo:"Productos"
        })
    },

    detalle:(req,res)=>{
        res.render('products/productDetail', { 
            titulo: "Detalle del producto",
        });
    },
    carrito:(req, res) => {
        res.render('products/productCart', { 
            titulo: "Carrito de compras" 
        }) 
    },
    todosLosProductos: (req, res) => {
        res.render("casa/home", {
            titulo: "Productos", getProducts 
        })

    }
}