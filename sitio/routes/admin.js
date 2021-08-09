var express = require('express');
const router = express.Router();
const {add,edit,store} = require ('../controllers/adminController');

/* GET home page. */
router.get('/addProducts',add);
router.post('/addProducts',store);
router.get('/editProducts',edit);

module.exports = router;
