const db = require('../../database/models');

module.exports = {
    list: (req, res) => {
        db.Categoria.findAll()
        .then((categorias) => {
            res.render("admin/categories/categoryAdmin", {
                titulo: "Categorias",
                categorias,
                session: req.session
            })
        })
        .catch((error) => { res.send(error)})  
    },

    categoryAdd: (req, res) => {
        res.render("admin/categories/addCategory", {
            titulo: "Agregar categoria",
            session: req.session
        })
    },

    categoryCreate: (req, res) => {
        db.Categoria.create({
            name: req.body.name,

        })
        .then((result)=>{
            res.redirect("/admin/categories")
        })
        .catch((error) => { res.send(error)})
    },

    categoryEdit: (req,res) => {
        let id_categoria = +req.params.id;

        db.Categoria.findByPk(id_categoria)
        .then((category) => {
            res.render('admin/categories/editCategory', {
                titulo: "Editar Categorias",
                category,
                session: req.session
            })
        })
        .catch((error) => { res.send(error)})
    },

    categoryUpdate: (req, res) => {
        let category= +req.params.id

        db.Categoria.update({
            name: req.body.name
        }, {
            where: {
                id: category
            }
        })
        .then((result) => {
            if(result){
                return res.redirect("/admin/categories")
            }else{
                return res.send("No se puede actualizar la categoria.")
            }
        })
        .catch((error) => { res.send(error)})
    },

    categoryDelete: (req, res) => {
        let category = +req.params.id

        db.Categoria.destroy({
            where: {
                id: category
            }
        })
        .then((result) => {
            if(result){
                res.redirect("/admin/categories")
            }else{
                res.send("Categoria eliminada.")
            }
        })
        .catch((error) => { res.send(error)})
    }

};