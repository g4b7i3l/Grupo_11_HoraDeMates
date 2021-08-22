
const fs = require ('fs');
const path = require ('path');

let { products, guardar } = require('../data/products_db');
const {validationResult} = require('express-validator');

const {users} = require('../data/user_db');

module.exports = {
    registro : (req,res) => {
        return res.render ('registro',{
        })
    },
    processRegister : (req,res) => {
      
       const resultValidation = validationResult(req);
       if(resultValidation.errors.length > 0){
           return res.render('registro', {
               errors: resultValidation.mapped(),
               oldData: req.body
           }
           )
           
       }
       return res.render('registro')
    
    },
    
    login : (req,res) => {
        return res.render ('login',{
        })
    }
}