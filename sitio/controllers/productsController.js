const {products} = require('../data/products_db');
module.exports = {
    carrito : (req,res) => {
        return res.render ('carrito',{
        })
    },
    detalleDeProducto : (req,res) => {
        let producto = products.find(producto => producto.id === +req.params.id);

        return res.render('detalleDeProducto',{
            producto,
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
}
