const fs = require ('fs');
const path = require ('path');
const {products} = require('../data/products_db');
const db = require('../database/models');
module.exports = {
    carrito : (req,res) => {
        return res.render ('carrito',{
        })
    },
    detalleDeProducto : (req,res) => {

    db.Product.findOne({
        where:{id : req.params.id}
    })
      .then(resultado =>{
        return res.render('detalleDeProducto', {
            producto : resultado

        })
      })
            
        
    },
    search : (req,res) => {
        let result = products.filter(producto => producto.title.toLowerCase().includes(req.query.search.toLowerCase()));
        return res.render('resultSearch',{
            result,
            products,
            busqueda : req.query.search
        })   
         }, 
    category : (req,res) => {
        let result = products.filter(product => product.category === req.query.category)
        return res.render('resultSearch',{
            result,
            products,
            busqueda : req.query.category
        })   
        
    },
    list : (req,res) => {
        db.Product.findAll()
        .then(function(productos){
            res.render('list',{productos: productos})
        })
      
        } 
        



}
