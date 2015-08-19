'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    credit: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        Course.belongsToMany(models.Student,{as:'Student',through:'StudentCourse'});
      }
    }
  });
  return Course;
};