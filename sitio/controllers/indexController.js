const fs = require ('fs');
const path = require ('path');

module.exports = {
    index : (req,res) => {
        return res.render ('index',{ 
            title : "Matardo",
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8')),
        })
    }
}