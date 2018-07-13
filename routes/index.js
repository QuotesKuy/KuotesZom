var express = require('express');
var router = express.Router();
const {getCategories, getCities, getCollections, getCuisines, getSearch} = require('../server/controller')
/* GET home page. */
router.get('/category', getCategories);
router.get('/city', getCities);
router.get('/collection', getCollections);
router.get('/cuisine', getCuisines);
router.get('/search', getSearch);


module.exports = router;
