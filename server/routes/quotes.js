var express = require('express');
var router = express.Router();
let Control = require('../controllers/quotes')


const {
  getCategories,
  getCities,
  getCollections,
  getCuisines,
  getSearch
} = require('../controllers/controller')

/* GET home page. */
router
  .get('/quotes', Control.show)
  .get('/inspire', Control.showInspire)
  .get('/random', Control.random)
  .get('/pict', Control.pict)
  .get('/find', Control.cari)

  .get('/category', getCategories)
  .get('/city', getCities)
  .get('/collection', getCollections)
  .get('/cuisine', getCuisines)
  .get('/search', getSearch)





module.exports = router;
