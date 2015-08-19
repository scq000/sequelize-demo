'use strict';
module.exports = function(sequelize, DataTypes) {
  var Son = sequelize.define('Son', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Son.belongsTo(models.Father,{as: 'Father'});
      }
    }
  });
  return Son;
};