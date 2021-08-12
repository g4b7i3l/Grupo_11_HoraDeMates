var express = require('express');
var router = express.Router();
const {add,edit,store,update,destroy} = require ('../controllers/adminController');

/* GET home page. */
router.get('/addProducts',add);
router.post('/addProducts',store);

router.get('/editProducts/:id',edit);
router.put('/editProducts/:id',update);

router.delete('/delete/:id',destroy);

module.exports = router;
