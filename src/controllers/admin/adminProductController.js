
const {validationResult}=require('express-validator');
const db =require('../../database/models')

module.exports = {

 //crear una funcion que liste los productos de la base de datos por ruta parametrizada
 list: (req, res) => {

    db.Producto.findAll(
        {include:[{association:'Categoria'}]})
    .then(function(productos){
        res.render('admin/products/listProduct', {
               titulo: "Listado de productos",
                producto: productos,
                session: req.session
        })
    })
    .catch(function(error){
        res.send(error)
    })
    },

    productAdd: (req, res) => {
        res.render('admin/products/addProduct', {
            titulo: "Agregar producto",
            session: req.session
        })
    },
        productCreate: (req, res) => {
            let errors = validationResult(req);
             
            if(errors.isEmpty()){
               db.Producto.create({include:[{association:'Categoria'}],
                 ...req.body,
                 stock: req.body.stock ? req.body.stock = 1 : req.body.stock = 0,
                 imagen: req.file ? req.file.filename : "PS4.jpeg"

              })
              
            .then(() => res.redirect('/admin/productos/listar'))

               .catch(error => res.send(error))
            }else{
              res.render('admin/products/addProduct', { 
                titulo: "Agregar producto",
                errors: errors.mapped(),
                old: req.body
               })
            } 
           },
    editProduct: (req, res) => {

    // 1- Obtener el id del producto
        let idProducto = +req.params.id

    //2- Obtener el producto de la base de datos
        db.Producto.findByPk(idProducto, {include:[{association:'Categoria'}]})
        .then((producto) =>{
            res.render('admin/products/editProduct', {
                titulo: "Editar producto",
                 producto, 
                session: req.session
             })
            }) 
       .catch(error => res.send(error))
         },
        productoEditado: (req, res) => {
            let errors = validationResult(req);
    
              // Buscar el producto a editar y modificar el producto
              if(errors.isEmpty()){
                db.Producto.update({
                    ...req.body,
                    stock: req.body.stock ? req.body.stock = 1 : req.body.stock = 0,
                    user_id: "admin"
                }, {
                    where: {
                        id: req.params.id
                    }
                })

                .then(() => {
                    res.redirect('/admin/productos/listar')
                })
                .catch(error => res.send(error))
            
              }else{    
                res.render('admin/products/editProduct', { 
                    titulo: "Editar producto",
                    errors: errors.mapped(),
                    old: req.body
                   })
              }
        },  

         productDelete: (req, res) => {
            /* 1 - Obtener el id del producto a eliminar */
            let idProducto = +req.params.id;
            /* 2 - Buscar el producto dentro del array y eliminarlo */

            
            
            products.forEach(producto => {
                if(producto.id === idProducto){
                    //Obtener la ubicación (índice) del producto a eliminar
                    let productToDeleteIndex = products.indexOf(producto);
                    //Elimino el producto del array
                    products.splice(productToDeleteIndex, 1)
                }
            })
            /* 3 - Sobreescribir el json */
            writeProducts(products);
            /* 4 - Enviar respuesta  */
            res.redirect('/admin/productos/listar')
        } 
    }


