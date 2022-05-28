const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.get('/detalle/:id', productController.detalle);
router.get('/carrito', productController.carrito);
router.get('/carrito/:id',productController.addcarshop);
router.delete('/carrito/eliminar/:id', productController.productDeleteshop)//elimina 

module.exports = router;