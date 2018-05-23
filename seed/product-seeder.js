var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('mongodb://truong:truong@ds229609.mlab.com:29609/shoppingcart');

var products = [
    new Product({
        imagePath: './images/1.jpg',
        title: 'Cuốn sách 1 hay nhất',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 10
    }),
    new Product({
        imagePath: './images/2.jpg',
        title: 'Cuốn sách 12 hay nhi',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 101
    }),
    new Product({
        imagePath: './images/3.jpg',
        title: 'Cuốn sách 13 hay khong',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 102
    }),
    new Product({
        imagePath: './images/4.jpg',
        title: 'Cuốn sách 14 hay qua',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 103
    }),
    new Product({
        imagePath: './images/5.jpg',
        title: 'Cuốn sách 15 hay lam',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 104
    }),
    new Product({
        imagePath: './images/1.jpg',
        title: 'Cuốn sách 16 hay qua troi',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 105
    }),
    new Product({
        imagePath: './images/2.jpg',
        title: 'Cuốn sách 1 hay nhất',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 106
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err){
        if (err)
            throw err;
        done++;
        if (done === products.length){
            exit();
        }
        console.log(done);
    });
}

function exit(){
    mongoose.disconnect();
}