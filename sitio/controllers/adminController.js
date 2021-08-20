const fs = require('fs');
const path = require('path');

let { products, guardar } = require('../data/products_db');
const {validationResult} = require('express-validator');

module.exports = {
    add: (req, res) => {
        return res.render('addProducts', {
            products
        })

    },
    store: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let product = {
                id: (products[products.length - 1].id + 1),
                title: req.body.title,
                price: +req.body.price,
                category: req.body.category,
                description: req.body.description,
                image: req.file ? req.file.filename : 'default-image.png'
            }
            products.push(product);
            guardar(products);
            return res.redirect('/')
        }else{
            return res.render('addProducts', {
                products,
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