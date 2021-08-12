var express = require('express');
var router = express.Router();
const {add,edit,store,update,destroy} = require ('../controllers/adminController');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})





/* GET home page. */
router.get('/addProducts',add);
router.post('/addProducts', upload.single('image'),store);

router.get('/editProducts/:id',edit);
router.put('/editProducts/:id',update);

router.delete('/delete/:id',destroy);

module.exports = router;
