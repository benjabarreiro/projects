module.exports = (req,res,next) => {
    if(req.body.repassword !== req.body.password) {
        return res.render('userRegister', {
            errors : {
                password: {
                    msg: 'las contraseñas no coinciden'
                }
            },
            old: req.body
        })
    }
    next()
}

