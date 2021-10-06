const fs = require('fs');
const path = require('path');
const { products } = require('../data/products_db');
const db = require('../database/models');
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
        let result = products.filter(producto => producto.title.toLowerCase().includes(req.query.search.toLowerCase()));
        return res.render('resultSearch', {
            result,
            products,
            busqueda: req.query.search
        })
    },
    category: (req, res) => {
        /*         let result = products.filter(product => product.category === req.query.category)
                return res.render('resultSearch',{
                    result,
                    products,
                    busqueda : req.query.category
                })    */
        let productos = db.Product.findAll();
        let mates = db.Category.findOne({
            where: {
                name: 'mates'
            },
            include: [
                {
                    association: 'products',
                    include: [
                        { association: 'images' }
                    ],
                }
            ]
        });
        let yerbas = db.Category.findOne({
            where: {
                name: 'yerbas'
            },
            include: [
                {
                    association: 'products',
                    include: [
                        { association: 'images' }
                    ]
                }
            ]
        });
        let bolsos = db.Category.findOne({
            where: {
                name: 'bolsos-materos'
            },
            include: [
                {
                    association: 'products',
                    include: [
                        { association: 'images' }
                    ]
                }
            ]
        });
        let bombillas = db.Category.findOne({
            where: {
                name: 'bombillas'
            },
            include: [
                {
                    association: 'products',
                    include: [
                        { association: 'images' }
                    ]
                }
            ]
        });
        let otros = db.Category.findOne({
            where: {
                name: 'otros'
            },
            include: [
                {
                    association: 'products',
                    include: [
                        { association: 'images' }
                    ]
                }
            ]
        });
        Promise.all([productos, mates, yerbas, bombillas, bolsos, otros])
            .then(([productos, mates, yerbas, bombillas, bolsos, otros]) => {
                return res.render('list', {
                    title: "Hora de mates",
                    productos,
                    mates: mates.products,
                    yerbas: yerbas.products,
                    bombillas: bombillas.products,
                    bolsos: bolsos.products,
                    otros: otros.products
                })
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
    }
}

