var express = require('express');
var router = express.Router();
const {index,contacto} = require ('../controllers/indexController');

/* GET home page. */
router.get('/',index);
router.get('/',index);
router.get('/contacto',contacto);


module.exports = router;
