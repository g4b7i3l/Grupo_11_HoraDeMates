var express = require('express');
var router = express.Router();
const {add} = require ('../controllers/adminController');

/* GET home page. */
router.get('/productAdd',add);

module.exports = router;
