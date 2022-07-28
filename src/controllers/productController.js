const { products } = require('../data');
const db = require('../database/models');
const { carshop, writeShop } = require('../data');


module.exports = {
    list: (req, res) => {
        db.Producto.findAll()
        .then(function(products){
                   res.render("products/products", {
            products,
         titulo:"Productos",
        session: req.session
            })
         })
         .catch(function(error){
             console.log(error)
         })
        
    },
    

    detalle:(req,res)=>{
             // 1- Obtener el id del producto
             let idProducto = +req.params.id
             db.Producto.findByPk(idProducto, {include:[{association:'Categoria'}]})
        .then((producto) =>{
            res.render('products/productDetail', { 
                imagen: req.file ? req.file.filename : "PS4.jpeg",
                  titulo: "Detalle de producto",
                  producto,
                session: req.session
                   });

             })
            
       .catch(error => console.log(error))
         },
    
    carrito:(req, res) => {
        db.Producto.findAll()
        .then(function(products){
        res.render('products/productCart', { 
            titulo: "Carrito de compras",
            carshop,
            session: req.session,
            produsctos: products
        }) 
    })
    .catch(error => console.log(error))
    },

    categories:(req, res) => {
        db.Categoria.findOne({
            where: {
                id: req.params.id
            },
            include:[{association:'Producto'}]})
            .then(products => {
                let productos = [];
                let category = productos.category;
                category.forEach(product => {
                    products.push(product);
            })
        res.render('products/categories', { 
            titulo: "Categorias",
            products,
            session: req.session
        }) 
    })
    .catch(error => console.log(error))
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
