const {getProducts} = require('../data')

module.exports = {
    listProduct: (req, res) => {
        res.render('admin/products/listProduct', { 
            title: 'Listado de productos',
            productos:getProducts
        })
    },
        addProduct: (req, res) => {
            res.render('admin/products/listProduct', { 
                title: 'Agregar los productos'
            })
        },
            editProduct: (req, res) => {
                res.render('admin/products/editProduct', { 
                    title: 'Editar los Productos'
                })

            }

    }