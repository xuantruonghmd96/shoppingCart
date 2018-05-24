var express = require('express');
var router = express.Router();
var csurf = require('csurf');
var csrfProtection = csurf();
var passport = require('passport');
var models = require('../models');

router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res, next) {
  models.ProductPg
    .findAll({ raw: true })
    .then(data => {
      res.render('shop/index', { title: 'Shopping Cart', products: data });
    });
});

router.get('/user/signup', function (req, res, next) {
  var messages = req.flash('error')
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/signin', function (req, res, next) {
  var messages = req.flash('error')
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

router.get('/user/profile', function (req, res, next) {
  res.render('user/profile');
});

// Create tables and sync to database
var models = require('../models');
router.get('/sync', function (req, res) {
  models.sequelize.sync().then(function () {
    res.send('database sync completed!');
  });
});

module.exports = router;
