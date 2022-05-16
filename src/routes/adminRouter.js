const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController')
const adminProductController = require('../controllers/admin/adminProductController')
const uploadFile = require('../middlewares/uploadProductImage');
//const userSessionCheck = require('../middlewares/userInSessionCheck');
//const adminCheck = require('../middlewares/adminCheck')

router.get('/', adminController.index);//adminCheck, adminController.index
router.get('/productos/agregar', adminProductController.productAdd);
router.get('/productos/listar', adminProductController.list);//muestra
router.post('/productos',uploadFile.single('image'), adminProductController.productCreate)//agregar
router.put('/productos/:id', adminProductController.productoEditado)//edita
router.get('/productos/editar/:id', adminProductController.editProduct)//vista por get 
router.delete('/productos/eliminar/:id', adminProductController.productDelete)//elimina 




module.exports = router;