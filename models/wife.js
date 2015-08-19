'use strict';
module.exports = function(sequelize, DataTypes) {
  var Wife = sequelize.define('Wife', {
    name: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Wife.belongsTo(models.Husband, {as: 'Husband'});
      }
    }
  });
  return Wife;
};