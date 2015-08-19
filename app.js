'use strict';

var db = require('./models/app');

db.Husband.create({name: 'michael', job: 'programmer'}).then(function (michael) {
    db.Wife.create({name: 'Lucy', job: 'teacher'}).then(function (lucy) {
        michael.setWife(lucy);
    });
});

db.Father.create({name: 'michael', job: 'programmer'}).then(function (michael) {
    db.Son.bulkCreate([{name: 'Jim', age: 14}, {name: 'John', age: 15}, {name: 'Jason', age: 20}])
        .then(function () {
            db.Son.findAll().then(function (sons) {
                michael.setSon(sons);
            });
        });
});

db.Student.bulkCreate([{name: 'michael', age: 21, grade: 'one'},
    {name: 'Lily', age: 22, grade: 'two'},
    {name: 'Helo', age: 21, grade: 'four'}
]).then(function () {
    db.Student.findAll().then(function (students) {
        db.Course.bulkCreate([{name: 'math', credit: 2}, {name: 'english', credit: 1}, {
            name: 'physics',
            credit: 1.5
        }]).then(function () {
            db.Course.findAll().then(function(courses) {
                students[0].setCourse(courses);
                students[1].setCourse(courses[1]);
                students[2].setCourse(courses[2]);
            });
        });
    });
});