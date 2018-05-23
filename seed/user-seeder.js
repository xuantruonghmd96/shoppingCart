var User = require('../models/user');
var mongoose = require('mongoose');

mongoose.connect('mongodb://truong:truong@ds229609.mlab.com:29609/shoppingcart');


var user = new User({
    email: 'abc@abc.com',
    password: '1234'
});

user.save(function(err) {
    if (err) {
        throw err;
    }
    console.log('done');
    mongoose.disconnect();
});