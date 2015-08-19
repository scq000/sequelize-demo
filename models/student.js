'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    grade: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsToMany(models.Course,{as: 'Course',through:'StudentCourse'});
      }
    }
  });
  return Student;
};