const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
            image: req.file ? req.file.filename : 'default-image.png'
        }
        products.push(product);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8')
        return res.redirect('/')
    },

    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);
        return res.render('editProducts', {
            product
        })
    },
    update: (req, res) => {
        const { title, price, description, category } = req.body;
        products.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = +req.params.id;
                product.title = title;
                product.price = +price;
                product.category = category;
                product.description = description;
            }
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
        return res.redirect('/products/detalleDeProducto/' + req.params.id)
    },
    destroy: (req, res) => {
        products = products.filter(product => product.id !== +req.params.id);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2),'utf-8');
        return res.redirect('/')
        }
}