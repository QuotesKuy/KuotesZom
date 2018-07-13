var express = require('express');
var router = express.Router();
var Controller = require("../controller/controller")


/* GET users listing. */
router.get('/', Controller.retriveBlogPostAmount);
router.get('/all',Controller.retrieveAllPost)
router.post('/text',Controller.postText);
router.post('/picture',Controller.postPicture);
router.post('/quote', Controller.postQuote)

module.exports = router;
