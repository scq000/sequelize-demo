'use strict';
module.exports = function(sequelize, DataTypes) {
  var Husband = sequelize.define('Husband', {
    name: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Husband.hasOne(models.Wife, {as: 'Wife'});
      }
    }
  });
  return Husband;
};