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
    add : (req,res) => {
        return res.render('productAdd',{
            categorias,
           productos
        })

}
}