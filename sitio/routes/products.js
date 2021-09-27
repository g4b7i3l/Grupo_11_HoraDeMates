var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
const {carrito,detalleDeProducto,search, category,list} = require ('../controllers/productsController');

/* GET users listing. */
router.get('/carrito',carrito);
router.get('/detalleDeProducto/:id',detalleDeProducto);
router.get('/search',search);
router.get('/categories',category);
router.get('/list',list);

router.get("/" )


module.exports = router;