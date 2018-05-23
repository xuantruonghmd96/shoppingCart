var express = require('express');
var router = express.Router();
var product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  product.find(function(err, data) {
    res.render('shop/index', { title: 'Shopping Cart', products: data });
  });
});

router.get('/user/signup', function(req, res, next) {
  res.render('user/signup');
});

router.post('/user/signup', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
