const express = require('express');
const app = express ();
const PORT = 3000

const path = require('path')
app.use(express.static('public'));



app.get( '/', (req, res) =>{
    res.sendFile(path.join( __dirname, '/views/home.html'))
})

app.get( '/productDetail', (req, res) =>{
    res.sendFile(path.join( __dirname, '/views/productDetail.html'))
})

app.get( '/register', (req, res) =>{
    res.sendFile(path.join( __dirname, '/views/register.html'))
})

app.get( '/productCart', (req, res) =>{
    res.sendFile(path.join( __dirname, '/views/productCart.html'))
})

app.get( '/login', (req, res) =>{
    res.sendFile(path.join( __dirname, '/views/login'))
})



app.listen(PORT,(req,res)=>{
    console.log("Conecatado al puerto ",PORT)
})
