const db = require('../database/models');

function localsMiddleware(req, res, next) {
    let categorias = db.Categories.findAll({attributes: ['id','name']});
    let plataformas = db.Platforms.findAll({attributes: ['id','name']});
    let generos = db.Genres.findAll({attributes: ['id','name']});
    Promise.all([categorias, plataformas,generos])
    .then(function (result) {
        res.locals.localAside = {
            categories: result[0],
            platforms: result[1],
            genres: result[2]
        }
    })
    if(req.session.usernameUser) {
        db.Users.findOne({include:[{association:'games_shooping_cart',include:[{association:'images',where:{location:"default"}}]}],
            where: {
                username: req.session.usernameUser
            }
        })
        .then(function(result) {
            res.locals.localUser = {
                id: result.id,
                avatar: result.avatar,
                privilegios: result.admin,
                cart:result.games_shooping_cart
            }
        })      
    } 
    next();
}
module.exports = localsMiddleware;