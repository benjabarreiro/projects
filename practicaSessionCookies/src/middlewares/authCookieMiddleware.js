const fs = require('fs');
const path = require('path');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

function authCookieMiddleware(req, res, next) {
    if(req.cookies.authRemember != undefined && req.session.emailUsuario == undefined) {
        for(let i = 0; i < usuarios.length; i++) {
            if(req.cookies.authRemember == usuarios[i].email) {
                req.session.emailUsuario = usuarios[i].email
            }
        }
    }
    next();
}

module.exports = authCookieMiddleware;

/*

PARA ESCRIBIR UNA COOKIE -> RES
res.cookie(nombreCookie, valorCookie, {maxAge: tiempo})

PARA LEER UNA COOKIE DENTRO DE VARIAS COOKIES -> REQ

req.cookies.nombreCookie

*/