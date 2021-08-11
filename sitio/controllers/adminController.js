const fs = require ('fs');
const path = require ('path');

const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    add: (req, res) => {
        return res.render('addProducts', {
            products
        })
    },
    store: (req, res) => {
            let product = {
            id: (products[products.length - 1].id + 1),
            title: req.body.title,
            price: +req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: 'default-image.png',
        }
        products.push(product);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2),'utf-8')
        return res.redirect('/admin/addProducts')
    },

edit: (req,res) =>{
    return res.render('editProducts')
}}