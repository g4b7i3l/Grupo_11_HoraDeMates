const fs = require ('fs');
const path = require ('path');
const db = require('../database/models')
module.exports = {
    index : (req,res) => {
        db.Product.findAll()
        .then(function(products){
            return res.render("index",{products:products})
        }) 
    },
    contacto : (req,res) => {
   return res.render('contacto')
     
    },
    nosotros : (req,res) => {
        return res.render('nosotros')
    }
}


    
    
