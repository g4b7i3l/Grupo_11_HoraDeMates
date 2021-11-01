var express = require('express');
var router = express.Router();
const {carrito,detalleDeProducto,search, category,list,allProducts} = require ('../controllers/productsController');

/* GET users listing. */
router.get('/carrito',carrito);
router.get('/detalleDeProducto/:id',detalleDeProducto);
router.get('/search',search);
router.get('/list',list);
router.get('/productos', allProducts);
router.get('/category/:id',category)




module.exports = router;