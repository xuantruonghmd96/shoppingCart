'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserPg = sequelize.define('UserPg', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  UserPg.associate = function(models) {
    // associations can be defined here
  };
  return UserPg;
};