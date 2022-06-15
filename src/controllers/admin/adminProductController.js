
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
/* 1 - Crear el objeto producto */
            let lastId = 0;
            products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id;
                }
            });
           

            
            let newProduct = {
                ...req.body,//require todo con los ...
                id: lastId +1,
                image: req.file ? req.file.filename : "juego1.png",
                stock: req.body.stock ? true: false
            }


            // Paso 2 - Guardar el nuevo producto en el array de usuarios

            products.push(newProduct)

            // Paso 3 - Escribir el JSON de productos con el array actual

            writeProducts(products)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('/admin/productos/listar')
            }else{
 res.render('admin/products/addProduct', {
            titulo: "Agregar producto",
            session: req.session,
            errors:errors.mapped()
        })
            }


            /* 1 - Crear el objeto producto */
            let lastId = 0;
            products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id;
                }
            });
           

            
            let newProduct = {
                ...req.body,//require todo con los ...
                id: lastId +1,
                image: req.file ? req.file.filename : "juego1.png",
                stock: req.body.stock ? true: false
            }


            // Paso 2 - Guardar el nuevo producto en el array de usuarios

            products.push(newProduct)

            // Paso 3 - Escribir el JSON de productos con el array actual

            writeProducts(products)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('/admin/productos/listar')    
        
    },
    editProduct: (req, res) => {
      let errors = validationResult(req);

      if(errors.isEmpty()){
          

      }
        // 1- Obtener el id del producto
     let idProducto = +req.params.id
     let producto = products.find(producto => producto.id === idProducto)
     //mostrar en la vista
     res.render('admin/products/editProduct', { 
         titulo : 'editar productos', 
        producto,
        session: req.session
     })

    },
        productoEditado: (req, res) => {
            // 1- Obtener el id del producto
        let idProducto = +req.params.id
            // 2 - Buscar el producto a editar y modificar el producto

            products.forEach(producto => {
                if(producto.id === idProducto){
                    // para modificar todos los valores del objeto
                    producto.name = req.body.name
                    producto.price = req.body.price
                    producto.discount = req.body.discount
                    producto.image = req.body.image,
                    producto.Categoria = req.body.Categoria,
                    producto.stock = req.body.stock ? true : false
                    producto.description = req.body.description
    
                }
            })
                // Paso 3 - Escribir el JSON de productos con el array actual
            writeProducts(products)
            // Paso 4 - Devolver respuesta (redirección)
            res.redirect('/admin/productos/listar')    
    

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

    