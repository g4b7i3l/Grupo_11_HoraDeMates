
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
            console.log(req.body)
            console.log(req.query)
            let product = {
                id : (products[products.length-1].id + 1),
                title: req.body.title,
                price : req.body.price,
                category: req.body.category,
                description: req.body.description,
                image : 'default-image.png',
            }
            products.push(product);
            fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2),'utf-8')
            return res.redirect('/')
        },
    
    }
        
    