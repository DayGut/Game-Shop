const db =require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
                    session: req.session
            })
        })
        .catch(function(error){
            res.send(error)
        })
        },
    search: (req, res) => {
        let searchResult = [];
         products.forEach(product => {
            if(removeAccents(product.name).toLowerCase().includes(req.query.keywords.toLowerCase())){
                searchResult.push(product)
            }
        });
        res.render('./home/results', {
            titulo: "Search",
            searchResult,
            keyword: req.query.keywords,
            toThousand,
            session: req.session
            
        })
        
    }
    
    
}
