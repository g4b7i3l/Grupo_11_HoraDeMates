const productos = require ('../data/products_db');
module.exports = {
    add : (req,res) => {
        return res.render ('addProducts',{    

        })
    },
    edit : (req,res) => {
        return res.render ('editProducts',{    

        })
    }
}