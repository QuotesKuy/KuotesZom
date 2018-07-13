var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var Authentication = require('../middlewares/authentication')
var FB = require('fb')

/* GET users listing. */
router.get('/', userController.home);
router.post('/login', userController.registerUser)

module.exports = router;
