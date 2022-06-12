//const { products } = require('../data');
const db = require('../database/models');
const { carshop, writeShop } = require('../data');


module.exports = {
    list: (req, res) => {
        db.Producto.findAll()
        .then(function(productos){
            res.send(productos)
            // res.render('admin/productos/list', {
            //     productos: productos
            })
        // }
        // )
        // .catch(function(error){
        //     console.log(error)
        // })
        


        // res.render("products/products", {
        //     products,
        //     titulo:"Productos",
        //     session: req.session
        // })
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
            carshop,
            session: req.session 
        }) 
    },

    addcarshop: (req, res) => {
       
        let idcompra= req.params.id

        products.forEach(products => {
           if(idcompra==products.id){
               carshop.push(products)
               writeShop(carshop)
           }
       });
       res.render('products/productCart', {
           titulo: "Compras",
           carshop,
           session: req.session
           
       })
    },
       productDeleteshop: (req, res) => {
        /* 1 - Obtener el id del producto a eliminar */
        let idProducto = +req.params.id;
        /* 2 - Buscar el producto dentro del array y eliminarlo */
        carshop.forEach(producto => {
            if(producto.id === idProducto){
                //Obtener la ubicación (índice) del producto a eliminar
                let productToDeleteIndex = carshop.indexOf(producto);
                //Elimino el producto del array
                carshop.splice(productToDeleteIndex, 1)
            }
        })
        /* 3 - Sobreescribir el json */
        writeShop(carshop);
        /* 4 - Enviar respuesta  */
        res.redirect('/products/carrito')
    }
            
}
