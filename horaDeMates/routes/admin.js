var express = require('express');
var router = express.Router();
const {add,edit} = require ('../controllers/adminController');

/* GET home page. */
router.get('/addProducts',add);
router.get('/editProducts',edit);

module.exports = router;
