var express = require('express');
var router = express.Router();
var Controller = require("../controller/controller")


var userController = require('../controllers/userController')
var Authentication = require('../middlewares/authentication')
var FB = require('fb')

/* GET users listing. */
router.get('/all', Controller.retrieveAllPost)
router.post('/text', Controller.postText);
router.post('/picture', Controller.postPicture);
router.post('/quote', Controller.postQuote)

/* GET users listing. */
router.get('/', userController.home)
router.post('/login', userController.registerUser)


module.exports = router;
