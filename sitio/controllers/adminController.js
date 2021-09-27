const fs = require('fs');
const path = require('path');
const db = require('../database/models')


const {validationResult} = require('express-validator');

module.exports = {
    add: (req, res) => {
        db.Category.findAll()
        .then(function(categories){
            return res.render("addProducts",{categories:categories})
        })
    },
    store: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.create({
              /*   id: (products[products.length - 1].id + 1), */
                title: req.body.title,
                description: req.body.description,
                price: +req.body.price,
                image: req.file ? req.file.filename : 'default-image.png',
                categories_id : req.body.category
            })
            return res.redirect('/')
            
        }else{
            return res.render('addProducts', {
          
                errores: errors.mapped(),
                old: req.body
            })
        }
},

    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);
        return res.render('editProducts', {
            product
        })
    },
        update : (req, res) => {
            const { title, description, price, category } = req.body;
            let product = products.find(product => product.id === +req.params.id)
            if(req.file){
                if(fs.existsSync('./public/images/' + product.image)){
                    fs.unlinkSync('./public/images/' + product.image)
                }
            }

            let productoEditado = {
                id: +req.params.id,
                title,
                description,
                price: +price,
                image: req.file ? req.file.filename : product.image,
                category
            }

            let productosModificados = products.map(product => product.id === +req.params.id ? productoEditado : product)
            guardar(productosModificados)
            return res.redirect('/products/detalleDeProducto/' + req.params.id)
        },
            destroy: (req, res) => {
                let product = products.find(product => product.id === +req.params.id);
                if(fs.existsSync('./public/images/' + product.image)){
                    fs.unlinkSync('./public/images/' + product.image)
                }
                products = products.filter(product => product.id !== +req.params.id);
                guardar(products);
                return res.redirect('/');
            }
}