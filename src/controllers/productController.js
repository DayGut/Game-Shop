const { products } = require('../data');


module.exports = {
    list: (req, res) => {
      
        res.render("products/products", {
            products,
            titulo:"Productos",
            session: req.session
        })
    },
    

    detalle:(req,res)=>{
             // 1- Obtener el id del producto
     let idProducto = +req.params.id
     let producto = products.find(producto => producto.id === idProducto)
     //mostrar en la vista
        res.render('products/productDetail', { 
            titulo: "Detalle de producto",
            producto,
            session: req.session
        });
    },
    carrito:(req, res) => {
        res.render('products/productCart', { 
            titulo: "Carrito de compras",
            session: req.session 
        }) 
    },
    todosLosProductos: (req, res) => {
        res.render("casa/home", {
            titulo: "Productos",
            session: req.session
        })

    }
}