
const {validationResult}=require('express-validator');
const db =require('../../database/models')
const path = require('path')
const fs = require('fs');

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
                    imagen: req.file ? req.file.filename : "PS4.jpeg"
                }, {
                    where: {
                        id: req.params.id
                    }
                })

                .then((producto) => {
                    if (req.file) {
                        if (fs.existsSync("/images", producto.imagen)
                            &&
                            producto.imagen !== "PS4.jpeg"){
                            fs.unlinkSync("/images", producto.imagen)
                        }
                    }
                    res.redirect('/admin/productos/listar')
                })
                .catch(error => console.log(error))
            
              }else{    
                res.render('admin/products/editProduct', { 
                    titulo: "Editar producto",
                    errors: errors.mapped(),
                    old: req.body
                   })
              }
        },  

         productDelete: (req, res) => {
            db.Producto.destroy({
                where : { id : req.params.id}
            })
            .then(() => {
                res.redirect('/admin/productos/listar')
            })
            
            .catch(error => console.log(error))
        },
        
    }


