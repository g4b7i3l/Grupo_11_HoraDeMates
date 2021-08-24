
const fs = require ('fs');
const path = require ('path');
const { products } = require('../data/products_db');
const bcrypt = require('bcryptjs');

const {usuarios, guardar} = require('../data/users_db');

const {validationResult} = require('express-validator');



module.exports = {
    registro : (req,res) => {
        return res.render ('registro',{
            products
        })
    },
    processRegister : (req,res) => {
      
       const resultValidation = validationResult(req);
       let {nombreCompleto,nombreId,contrasenia,email,fechaNacimiento} = req.body;
       if(resultValidation.errors.length > 0){
           return res.render('registro', {
               errors: resultValidation.mapped(),
               oldData: req.body
           }
            
           )      
       }
       if(resultValidation.isEmpty()){
        let usuario = {
            id : usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
            nombreCompleto,
            nombreId,
            contrasenia:bcrypt.hashSync(contrasenia,10),
            email,
            fechaNacimiento,
            image: req.file ? req.file.filename : 'default-image.png'
        }
        
        usuarios.push(usuario);
        guardar(usuarios);
        return res.redirect('/users/login')
    
    }},

    login : (req,res) => {
        return res.render ('login',{
        })
    },
    processLogin : (req,res) => {

        let errors = validationResult(req);
        const {email, recordar} = req.body;
        if(errors.isEmpty()){
            let usuario = usuarios.find(usuario => usuario.email === email)
            req.session.userLogin = {
                id : usuario.id,
                nombreId : usuario.nombreId,
                rol : usuario.rol
            }

            if(recordar){
                res.cookie('horaDeMates',req.session.userLogin,{maxAge: 1000 * 60})
            }
            return res.redirect('/')
        }else{
            return res.render('login',{
                products,
                errores : errors.mapped()
            })
        }
    },
    logout : (req,res) => {
        req.session.destroy();
        res.cookie('craftsyForEver',null,{maxAge:-1})
        return res.redirect('/')
    },
    
    profile : (req,res) => {
        return res.render('profile',{
            
        })
    }
}