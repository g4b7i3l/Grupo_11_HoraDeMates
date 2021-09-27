
const fs = require ('fs');
const path = require ('path');
const db = require('../database/models')
const bcrypt = require('bcryptjs');


const {usuarios, guardar} = require('../data/users_db');

const {validationResult} = require('express-validator');



module.exports = {
    registro : (req,res) => {
        return res.render ('registro',{
            
        })
    },
    processRegister : (req,res) => {
      
       const resultValidation = validationResult(req);
       let {nombreCompleto,nombreId,contrasenia,email,fechaNacimiento} = req.body;

       let fecha = new Date(fechaNacimiento)

      if(resultValidation.isEmpty()){
          db.User.create({
              name : nombreCompleto,
              password : bcrypt.hashSync(contrasenia,10),
              email : email,
              birth_date : fecha,
              nameId: nombreId,
              rols_id: 1

          }).then(result => res.redirect('/')
             
          )
      }

     
    },

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
                
                errores : errors.mapped()
            })
        }
    },
    logout : (req,res) => {
        req.session.destroy();
        res.cookie('horaDeMates',null,{maxAge:-1})
        return res.redirect('/')
    },
    
    profile : (req,res) => {
        return res.render('profile',{
            
        })
    }
}