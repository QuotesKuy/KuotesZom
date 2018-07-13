var express = require('express');
var router = express.Router();
let Control = require('../controllers/quotes')

/* GET home page. */
router
.get('/quotes', Control.show)
.get('/inspire', Control.showInspire)
.get('/random', Control.random)
.get('/pict', Control.pict)
.get('/find', Control.cari)

module.exports = router;
