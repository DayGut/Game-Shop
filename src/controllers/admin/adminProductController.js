const { products, writeProducts} = require('../../data');

module.exports = {
    list: (req, res) => {
        res.render('admin/products/listProduct', {
            titulo: "Listado de productos",
            producto: products
        })
    },
    productAdd: (req, res) => {
        res.render('admin/products/addProduct', {
            titulo: "Agregar producto"
        })
    },
        productCreate: (req, res) => {
        
       
        
            /* 1 - Crear el objeto producto */
            let lastId = 0;
            products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id;
                }
            });
           

            let newProduct = {
                id: lastId + 1,
        name: req.body.name,
        price: req.body.price,
        description:req.body.description,
        categoryId: req.body.categoryId,
        discount: req.body.discount,
        image: "sekiroo.jpeg",
        stock: req.body.stock 
            }
            res.send(newProduct)
            // Paso 2 - Guardar el nuevo producto en el array de usuarios

            products.push(newProduct)

            // Paso 3 - Escribir el JSON de productos con el array actual

            writeProducts(products)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('admin/products/addProduct')    
        
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
                    producto.categoryId = req.body.categoryId
                    producto.stock = req.body.stock ? true : false
                    producto.description = req.body.description
    
                }

                // Paso 3 - Escribir el JSON de productos con el array actual

            writeProducts(products)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('/admin/productos/listar')    
        
                
            });
    

        },

        editProduct: (req, res) => {
            // 1- Obtener el id del producto
         let idProducto = +req.params.id
         let producto = products.find(producto => producto.id === idProducto)
         //mostrar en la vista
         res.render('admin/products/editProduct', { 
             titulo : 'editar productos', 
            producto 
         })

        }
        // productDelete: (req, res) => {
        //     // 1- Obtener el id del producto
        //  let idProductos = +req.params.id
        //  let productos = products.find(producto => producto.id === idProductos)
        //  //mostrar en la vista
        //  res.render('admin/products/listProduct', { 
        //      titulo : 'borrar productos', 
        //     productos  
        //     })
        

    }

    