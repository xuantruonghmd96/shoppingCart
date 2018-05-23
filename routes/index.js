var express = require('express');
var router = express.Router();
var product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  product.find(function(err, data) {
    res.render('shop/index', { title: 'Express', products: data });
  });
});

module.exports = router;
