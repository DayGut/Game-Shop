const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController')
const adminProductController = require('../controllers/admin/adminProductController')
const uploadFile = require('../middlewares/uploadProductImage');
const addValidator = require('../validations/addProductValidator');
const editValidator = require('../validations/editProductValidator');
const adminCheck = require('../middlewares/adminCheck')
const userSessionCheck = require('../middlewares/userSessionCheck');


/*session*/
router.get('/',userSessionCheck, adminCheck, adminController.index);

//crud
router.post('/productos',uploadFile.single('image'),addValidator,adminProductController.productCreate)//agregar
router.get('/productos/agregar',userSessionCheck, adminCheck, adminProductController.productAdd);
router.get('/productos/listar',userSessionCheck, adminCheck, adminProductController.list);//muestra
router.put('/productos/:id',uploadFile.single('image'), editValidator,adminProductController.productoEditado)//edita
router.get('/productos/editar/:id',userSessionCheck, adminCheck, adminProductController.editProduct)//vista por get 
router.delete('/productos/eliminar/:id', adminProductController.productDelete)//elimina 




module.exports = router;