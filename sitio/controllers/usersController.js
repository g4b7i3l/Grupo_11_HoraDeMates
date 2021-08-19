const {products} = require('../data/products_db');
module.exports = {
    registro : (req,res) => {
        return res.render ('registro',{
        })
    },
    login : (req,res) => {
        return res.render ('login',{
        })
    }
}