const db =require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const {Op} = db.Sequelize;


module.exports= {

    index: (req, res) => {

        db.Producto.findAll(
            {include:[{association:'Categoria'}]})
        .then(function(productos){
            res.render('./home/home', {
                   titulo: "Home",
                   products_title: "Productos",
                   CSS:"home.css",
                    productos,
                    session: req.session,
            })
        })
        .catch(function(error){
            res.send(error)
        })
    }, 
    search: (req, res) => {
        let search = req.query.keywords;
        let search_clean = removeAccents(search).toLowerCase();
        db.Producto.findAll(
            {where:{
                name:{[Op.like]:`%${search_clean}%`},
            }
        })
    .then((productos)=>{
        res.render('./home/results', {
            titulo: "Search",
            title: "Productos",
            CSS:"home.css",
            productos,
            toThousand,
            keyword: search_clean,
            session: req.session,
            image: req.file ? req.file.filename : "user-avatar.jpeg"
        })

    })
    .catch(function(error){ 
        res.send(error)
    })
    
    
        
}
    
    
}

