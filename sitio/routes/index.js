var express = require('express');
var router = express.Router();
const {index,contacto,nosotros} = require ('../controllers/indexController');

/* GET home page. */
router.get('/',index);
router.get('/',index);
router.get('/contacto',contacto);
router.get('/nosotros',nosotros);



module.exports = router;
