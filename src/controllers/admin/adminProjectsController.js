const { products} = require('../../data');

module.exports = {
    list: (req, res) => {
        res.render('#', {
            titulo: "#",
            producto: products
        })
    },

    projectAdd: (req, res) => {
        res.render ()

    },
     
    projectCreate: (req, res) => {

    },

     projectEdit: (req, res) => {

    },

     projectUpdate: (req, res) => {

    },
