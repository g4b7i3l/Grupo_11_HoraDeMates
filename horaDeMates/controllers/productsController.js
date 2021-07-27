const productos = require ('../data/products_db');
module.exports = {
    carrito : (req,res) => {
        return res.render ('carrito',{
        })
    },
    detalleDeProducto : (req,res) => {
        return res.render ('detalleDeProducto',{
        })
    }
}