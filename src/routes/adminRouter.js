const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const adminProductController = require('../controllers/adminProductController')

router.get('/', adminController.index)
router.get('/productos/agregar', adminProductController.addProduct)
router.get('/productos/editar', adminProductController.editProduct)
router.get('/productos', adminProductController.listProduct)


module.exports = router;