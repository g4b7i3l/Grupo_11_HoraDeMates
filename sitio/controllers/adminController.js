const fs = require('fs');
const path = require('path');
const db = require('../database/models')


const {validationResult} = require('express-validator');
const Product = require('../database/models/Product');

module.exports = {
    add: (req, res) => {
        db.Category.findAll()
        .then(function(categories){
            return res.render("addProducts",{categories:categories})
        })
    },
    store: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.create({
              /*   id: (products[products.length - 1].id + 1), */
                title: req.body.title,
                description: req.body.description,
                price: +req.body.price,
                image: req.file ? req.file.filename : 'default-image.png',
                categories_id : req.body.category
            }).then(product => {
                return res.redirect('/')
            })

        }else{
            return res.render('addProducts', {
          
                errores: errors.mapped(),
                oldData: req.body
            })
        }
},

edit : (req,res) => {
    let categorias = db.Category.findAll();
    let product = db.Product.findByPk(req.params.id);
    Promise.all([categorias,product])
    .then(([categorias,product]) => {
        return res.render('editProducts',{
            categorias,
            product
        })
    })
  
},
update : (req,res) => {
    const {title, description,price,image,categories_id} = req.body;

    db.Product.update(
        {
            title : title.trim(),
            description : description.trim(),
            price,
            image: req.file ? req.file.filename : Product.image,
            categories_id
        },
        {
            where : {
                id : req.params.id
            }
        }).then( () =>   res.redirect('/'))
    .catch(error => console.log(error))
      
},

destroy : (req,res) => {
    db.Product.findByPk(req.params.id)
    .then(product=>{
        if(fs.existsSync('./public/images/' + product.image)){
            fs.unlinkSync('./public/images/' + product.image)}
            db.Product.destroy({
                where : {
                    id : req.params.id
                }
            }).then( () => res.redirect('/'))
            .catch(error => console.log(error))
    }).catch(error => console.log(error))
}
}