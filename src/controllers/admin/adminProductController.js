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

            res.redirect('/products/listProductos')    
        
    },
    
    }