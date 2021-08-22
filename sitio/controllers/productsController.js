const fs = require ('fs');
const path = require ('path');
const {products} = require('../data/products_db');
module.exports = {
    carrito : (req,res) => {
        return res.render ('carrito',{
        })
    },
    detalleDeProducto : (req,res) => {
        let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8'));
        return res.render('detalleDeProducto',{
            producto : products.find(producto => producto.id === +req.params.id),
            products
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


}
