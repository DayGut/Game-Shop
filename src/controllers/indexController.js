module.exports= {

    index: (req, res) => {
        res.render("home", {
            titulo: "Home",
            css:"home.css"
        })
        
    }
    
}
