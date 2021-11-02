var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')
const {registro,login,processRegister,processLogin,logout,profile,update} = require ('../controllers/usersController');
const loginValidator =require('../validations/loginValidator');
const registerValidator =require('../validations/registerValidator');
const userCheck = require('../middlewares/userCheck');
const guestCheck = require('../middlewares/guestCheck');
const authCheck = require('../middlewares/authCheck');


const {body} = require('express-validator');

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


/* GET users listing. */
router.get('/registro',guestCheck,registro);
router.post('/registro',upload.single('image'), registerValidator, processRegister);    
router.get('/login',guestCheck,login);
router.post('/login',loginValidator,processLogin);
router.get('/logout',logout);
router.get('/profile',authCheck,profile)
router.put('/profile',update);

module.exports = router;
