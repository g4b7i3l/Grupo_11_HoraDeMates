
const fs = require ('fs');
const path = require ('path');
const { products } = require('../data/products_db');

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
            contrasenia,
            email,
            fechaNacimiento,
            image: req.file ? req.file.filename : 'default-image.png'
        }
        
        usuarios.push(usuario);
        guardar(usuarios);
        return res.redirect('/')
    
    }},

    login : (req,res) => {
        return res.render ('login',{
        })
    }}
