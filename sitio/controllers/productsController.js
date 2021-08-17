const productos = require ('../data/products_db');
module.exports = {
    carrito : (req,res) => {
        return res.render ('carrito',{
        })
    },
    detalleDeProducto : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        return res.render('detalleDeProducto',{
            producto,
            productos
        })
    },
    search : (req,res) => {
        let result = productos.filter(producto => producto.title.toLowerCase().includes(req.query.search.toLowerCase()));
        return res.render('resultSearch',{
            result,
            productos,
            busqueda : req.query.search
        })   
         }, 
}
