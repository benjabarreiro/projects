const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const mainController = require('../controllers/mainController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', uploadImageMiddleware.any(), registerValidation, usersController.save);

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', loginValidation, usersController.login);

router.get('/welcome', function(req, res) {
    res.render('welcome')
})

module.exports = router;
