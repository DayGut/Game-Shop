const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.get('/', productController.todosLosProductos);
router.get('/detalle', productController.detalle);
router.get('/carrito', productController.carrito);


module.exports = router;