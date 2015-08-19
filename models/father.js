'use strict';
module.exports = function(sequelize, DataTypes) {
  var Father = sequelize.define('Father', {
    name: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Father.hasMany(models.Son,{as: 'Son'});
      }
    }
  });
  return Father;
};