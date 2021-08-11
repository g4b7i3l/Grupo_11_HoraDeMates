
const products = require ('../data/products_db');
module.exports = {
    add : (req,res) => {
        console.log('estoy acá')
        return res.render ('addProducts',{    
         products
        })
    },
    edit : (req,res) => {
      
        return res.render ('editProducts',{    

        })},
        
        store: (req, res) => {
        res.send(req.body)}}
    