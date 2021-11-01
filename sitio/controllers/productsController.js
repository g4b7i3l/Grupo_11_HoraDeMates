const fs = require('fs');
const path = require('path');
const { products } = require('../data/products_db');
const db = require('../database/models');
const { Op } = require('sequelize')
module.exports = {
    carrito: (req, res) => {
        return res.render('carrito', {
        })
    },
    detalleDeProducto: (req, res) => {
        db.Product.findOne({
            where: { id: req.params.id }
        })
            .then(resultado => {
                return res.render('detalleDeProducto', {
                    producto: resultado

                })
            })


    },
    search: (req, res) => {
        let Producto = db.Product.findAll({
            where: {
                title: {
                    [Op.substring]: req.query.search
                }
            },
            include: [
                { association: 'Category' }
            ]
        })
        let Categories = db.Category.findAll()
        Promise.all([Producto, Categories])
            .then(([Producto, Categories]) => {
                return res.render('resultSearch', {
                    Producto,
                    Categories,
                    name: req.query.search
                })
            })
            .catch(error => console.log(error))
    },
    category: (req, res) => {
        let productos = db.Product.findAll({
            include:[
                {association:'Category'}
        ]
        });
        let categorias = db.Category.findAll({
            include: [
                {
                    association: 'Products',
                }
            ]
        });
        Promise.all([categorias,productos])
            .then(([categorias,productos]) => {
                    res.render('productoCategoria', {
                    title: "Hora de mates",
                    productos,
                    categorias,
                });console.log(productos,categorias);
            }).catch(error => console.log(error))

    },
    list: (req, res) => {
        db.Product.findAll()
            .then(function (productos) {
                res.render('list', { productos: productos })
            })

    },
    allProducts: (req, res) => {
        db.Product.findAll()
            .then(function (productos) {
                res.render('productos', { productos: productos })
            })
    },
}

