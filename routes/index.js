var express = require('express');
var router = express.Router();
var models = require('../models');

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

module.exports = router;
