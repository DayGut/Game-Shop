const { products } = require('../data');


module.exports = {
    list: (req, res) => {
           // 1- Obtener el id del producto
     let idProducto = +req.params.id
     let producto = products.find(producto => producto.id === idProducto)
     //mostrar en la vista
        res.render("products/products", {
            producto,
            titulo:"Productos"
        })
    },
    

    detalle:(req,res)=>{
        res.render('products/productDetail', { 
            titulo: "Detalle",
            products
        });
    },
    carrito:(req, res) => {
        res.render('products/productCart', { 
            titulo: "Carrito de compras" 
        }) 
    },
    todosLosProductos: (req, res) => {
        res.render("casa/home", {
            titulo: "Productos"
        })

    }
}