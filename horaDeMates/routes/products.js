var express = require('express');
var router = express.Router();
const {carrito,detalleDeProducto} = require ('../controllers/productsController');

/* GET users listing. */
router.get('/carrito',carrito);
router.get('/detalleDeProducto/:id',detalleDeProducto);

module.exports = router;