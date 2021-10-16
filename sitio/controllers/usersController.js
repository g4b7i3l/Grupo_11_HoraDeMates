
const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const bcrypt = require('bcryptjs');




const { validationResult } = require('express-validator');



module.exports = {
    registro: (req, res) => {
        return res.render('registro', {

        })
    },
    processRegister: (req, res) => {

        let errors = validationResult(req);
        let { nombreCompleto, nombreId, contrasenia, email, fechaNacimiento } = req.body;

        let fecha = new Date(fechaNacimiento)

        if (errors.isEmpty()) {
            db.User.create({
                name: nombreCompleto,
                password: bcrypt.hashSync(contrasenia, 10),
                email: email,
                birth_date: fecha,
                nameId: nombreId,
                rols_id: 2
            }).then(user => {
                req.session.userLogin = {
                    id : user.id,
                    name : user.name,
                    rol : user.rol
                }
                return res.redirect('/login')
            }).catch(error=> console.log(error)) 
        } else {
            console.log(errors)
            return res.render('registro', {
                old: req.body,
                errores: errors.mapped()
            })
        }

    },

    login: (req, res) => {
        return res.render('login', {
        })
    },
    processLogin: (req, res) => {

        let errors = validationResult(req);
        const { email, recordar } = req.body;
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email,
                }
            }).then(user => {
                req.session.userLogin = {
                    id: user.id,
                    email: user.email,
                    rols_id: user.rols_id,
                    nameId: user.nombreId,
                    password: user.password
                }
                recordar && res.cookie('horaDeMates', req.session.userLogin, { maxAge: 1000 * 60 })
                return res.redirect('/')
            })
        } else {
            return res.render('login', {
                errores: errors.mapped()
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('horaDeMates', null, { maxAge: -1 })
        return res.redirect('/')
    },

    profile: (req, res) => {
        db.User.findByPk(req.session.userLogin.id)
            .then(user => res.render('profile', {
                user
            })).catch(error => console.log(error))
    },
    update: (req, res) => {
        const { name, email, nameId, password } = req.body;
        let passwordHash = bcrypt.hashSync(password, 10)
        db.User.update(
            {
                name: name,
                email: email,
                nameId: nameId,
                password: password != " " && bcrypt.hashSync(password, 10)
            },
            {
                where: {
                    id: req.session.userLogin.id
                }
            }).then(() => res.redirect('/users/profile'))
            .catch(error => console.log(error))
    },
}