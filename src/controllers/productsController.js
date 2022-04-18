const { getProducts } = require('../data');


module.exports = {

    products:(req,res)=>{
        res.render('products/productDetail', { 
            title: "Productos",
            products: getProducts
        });
    },
    productCart:(req, res) => {
        res.render('products/productCart', { 
            title: "Carrito de compras" 
        }) 
    },
   
}