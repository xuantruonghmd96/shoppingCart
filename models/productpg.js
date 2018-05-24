'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductPg = sequelize.define('ProductPg', {
    imagePath: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  ProductPg.associate = function(models) {
    // associations can be defined here
  };
  return ProductPg;
};