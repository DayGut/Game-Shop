const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController')
const adminProductController = require('../controllers/admin/adminProductController')
const uploadFile = require('../middlewares/uploadProductImage');
const adminCategoryController = require("../controllers/admin/adminCategoryController");

const adminCheck = require('../middlewares/adminCheck')
const userSessionCheck = require('../middlewares/userSessionCheck');
const addProductValidator = require('../validations/addProductValidator');
const editProductValidator = require('../validations/editProductValidator');



/*session*/
router.get('/',userSessionCheck, adminCheck, adminController.index);

//crud

router.get('/productos/agregar',userSessionCheck, adminCheck, adminProductController.productAdd);
router.get('/productos/listar',userSessionCheck, adminCheck, adminProductController.list);//muestra
router.post('/productos',uploadFile.single('image'),userSessionCheck, adminCheck, addProductValidator,adminProductController.productCreate)//agregar
router.put('/productos/:id',uploadFile.single('image'),userSessionCheck, adminCheck, editProductValidator,adminProductController.productoEditado)//edita
router.get('/productos/editar/:id',userSessionCheck, adminCheck, adminProductController.editProduct)//vista por get 
router.delete('/productos/eliminar/:id', adminProductController.productDelete)//elimina 


// CRUD CATEGORIA 
router.get('/categories', userSessionCheck, adminCheck, adminCategoryController.list );
router.get('/categories/addCategory', userSessionCheck, adminCheck, adminCategoryController.categoryAdd );
router.post('/categories', adminCategoryController.categoryCreate );
router.get('/categories/editCategory/:id', userSessionCheck, adminCheck, adminCategoryController.categoryEdit );
router.put('/categories/editCategory/:id', adminCategoryController.categoryUpdate );
router.delete('/categories/delete/:id', adminCategoryController.categoryDelete);

module.exports = router;