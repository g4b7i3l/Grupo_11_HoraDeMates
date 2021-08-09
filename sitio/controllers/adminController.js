
const productos = require ('../data/products_db');
module.exports = {
    add : (req,res) => {
        return res.render ('addProducts',{    
         productos
        })
    },
    edit : (req,res) => {
        return res.render ('editProducts',{    

        })},

    store : (req,res) => {
        return res.send(req.body,{

        })
    }
        
    }