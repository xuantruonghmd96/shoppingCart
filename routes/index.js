var express = require('express');
var router = express.Router();
var models = require('../models');
var Cart = require('../modelsCart/cart');

/* GET home page. */
router.get('/', function (req, res, next) {
  models.ProductPg
    .findAll({ raw: true })
    .then(data => {
      res.render('shop/index', { title: 'Shopping Cart', products: data });
    });
});

// Create tables and sync to database
var models = require('../models');
router.get('/sync', function (req, res) {
  models.sequelize.sync().then(function () {
    res.send('database sync completed!');
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  models.ProductPg
  .findById(productId, { raw: true })
  .then(product => {
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    return res.redirect('/');
  });
});

module.exports = router;
