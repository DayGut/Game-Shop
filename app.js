const express = require('express');
const app = express ();
const PORT = 3000


const path = require('path')
app.use(express.static('public'));

/*Views config  */
app.set('view engine','ejs');
app.set ("views", ".views/partials")





app.get( '/', (req, res) =>{
    res.render(path.join( __dirname, '/views/home.ejs'))
})

app.get( '/productDetail', (req, res) =>{
    res.render(path.join( __dirname, '/views/productDetail.ejs'))
})

app.get( '/register', (req, res) =>{
    res.render(path.join( __dirname, '/views/register.ejs'))
})

app.get( '/productCart', (req, res) =>{
    res.render(path.join( __dirname, '/views/productCart.ejs'))
})

app.get( '/login', (req, res) =>{
    res.render(path.join( __dirname, '/views/login.ejs'))
})

app.get( '/agregar_editar', (req, res) =>{
    res.render(path.join( __dirname, '/views/agregar_editar.ejs'))
})




app.listen(PORT,(req,res)=>{
    console.log("Conecatado al puerto ",PORT)
})
