const fs = require('fs');
const path = require('path');

let {products, guardar} = require('../data/products_db');

module.exports = {
    add: (req, res) => {
        return res.render('addProducts', {
            products
        })
        
    },
    store: (req, res) => {
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
    },

    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);
        return res.render('editProducts', {
            product
        })
    },
    update : (req,res) => {
        const {title, description,price,category} = req.body;

        let product = products.find(product => product.id === +req.params.id)
        let productoEditado = {
            id : +req.params.id,
            title,
            description,
            price : +price,
            image : req.files ? req.files.filename : product.image, 
            category
        }

        let productosModificados = products.map(product => product.id === +req.params.id ? productoEditado : product)
        guardar(productosModificados)
        return res.redirect('/products/detalleDeProducto/' + req.params.id)
    },
    destroy: (req, res) => {
        products = products.filter(product => product.id !== +req.params.id);
        guardar(products);
        return res.redirect('/');
        }
}