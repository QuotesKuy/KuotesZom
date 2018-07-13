var express = require('express');
var router = express.Router();
let Control = require('../controllers/quotes')
var Authentication = require('../middlewares/authentication')


const {
  getCategories,
  getCities,
  getCollections,
  getCuisines,
  getSearch
} = require('../controllers/controller')

/* GET home page. */
router
  .get('/quotes', Authentication.authenticationRead, Control.show)
  .get('/inspire', Authentication.authenticationRead, Control.showInspire)
  .get('/random', Authentication.authenticationRead, Control.random)
  .get('/pict', Authentication.authenticationRead, Control.pict)
  .get('/find', Authentication.authenticationRead, Control.cari)

module.exports = router;
