'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    var products = [
      {
        imagePath: './images/1.jpg',
        title: 'Cuốn sách 1 hay nhất',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 10,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/2.jpg',
        title: 'Cuốn sách 12 hay nhi',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 101,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/3.jpg',
        title: 'Cuốn sách 13 hay khong',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 102,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/4.jpg',
        title: 'Cuốn sách 14 hay qua',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 103,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/5.jpg',
        title: 'Cuốn sách 15 hay lam',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 104,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/1.jpg',
        title: 'Cuốn sách 16 hay qua troi',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 105,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        imagePath: './images/2.jpg',
        title: 'Cuốn sách 1 hay nhất',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 106,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }];

    return queryInterface.bulkInsert('ProductPgs', products, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('ProductPgs', null, {});
  }
};
