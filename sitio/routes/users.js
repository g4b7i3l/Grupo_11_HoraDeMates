var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')
const {registro,login,processRegister} = require ('../controllers/usersController');

const {body} = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),

    body('nombreId').notEmpty().withMessage('Debes añadir un nombre de ID'),

    body('password').notEmpty().withMessage('Debes introducir una contraseña')
    ,

    body('email')
    .notEmpty().withMessage('Indica tu email por favor').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),

    body('fecha').notEmpty().withMessage('Indica tu fecha de nacimiento'),

]
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
router.get('/registro',registro);
router.post('/registro',upload.single('image'),validations,processRegister);
router.get('/login',login);

module.exports = router;
