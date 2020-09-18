const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const registerMiddleware = require('../middlewares/registerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'))
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })
  
router.get('/', userController.index);

router.get('/register', userController.register);
router.post('/register', upload.any(), registerValidation, registerMiddleware, userController.save);

router.get('/login', userController.login);
router.post('/login', loginValidation, userController.verify);

// RUTAS SOLO PARA USUARIOS LOGUEADOS
router.get('/welcome', authMiddleware, userController.welcome);

router.get('/logout', authMiddleware, userController.logout);

module.exports = router;