'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var UserPg = sequelize.define('UserPg', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  UserPg.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
  };

  UserPg.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  UserPg.associate = function (models) {
    // associations can be defined here
  };
  return UserPg;
};