const {check, validationResult, body} = require('express-validator');
module.exports = [
    check('email')
        .isEmail()
            .withMessage('Tenés que insertar un email válido'),
    check('password')
        .isLength({min: 8, max: 16})
            .withMessage('Como mínimo la contraseña debe tener 8 caracteres. Como máximo 16')
]