const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const {check, validationResult, body} = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usersDataBase.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    save: function(req, res, next) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let elUsuario = {
                email: req.body.email,
                avatar: req.files[0].filename,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            usuarios.push(elUsuario);
            fs.writeFileSync(path.join(__dirname, '../data/usersDataBase.json'), JSON.stringify(usuarios))
            res.redirect('/users/login');
        } else {
            res.render('register', {
                errors: errors.mapped()
            })
        }
    },

    login: function(req, res, next) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            for(let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                    // ESTA TODO OK Y LE INICIO UNA SESION
                    req.session.usuarioLogueado = {
                        email: usuarios[i].email,
                        avatar: usuarios[i].avatar
                    };
                    if(req.body.recordame) {
                        res.cookie('emailUsuario', usuarios[i].email, {maxAge: 60000 * 10});
                    }
                    return res.redirect('/users/welcome');
                }
            }
            return res.render('login', {
                errors: {
                    username: {
                        msg: 'Credenciales inválidas. Inserta un email registrado y su respectica contraseña'
                    }
                }
            })
        } else {
            res.render('login', {
                errors: errors.mapped()
            })
        }
    }
}