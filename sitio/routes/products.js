var express = require('express');
var router = express.Router();
const {carrito,detalleDeProducto,search} = require ('../controllers/productsController');

/* GET users listing. */
router.get('/carrito',carrito);
router.get('/detalleDeProducto/:id',detalleDeProducto);
router.get('/search',search)

module.exports = router;