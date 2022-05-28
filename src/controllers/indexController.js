const { products } = require('../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

module.exports= {

    index: (req, res) => {

        res.render("./home/home", {
            titulo: "Home",
            products_title: "Productos",
            css:"home.css",
            products,
            session: req.session
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
