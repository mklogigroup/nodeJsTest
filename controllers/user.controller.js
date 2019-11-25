var connection = require('../config/database');
var db = require('../models/user.model');

exports.index = function (req, res, next) {
  db.User
    .findAll()
    .then(function (users) {
      res.json(users);
    });
};

exports.create = function createNewUser(req, res, next) {
  // db.User.update({
  //   firstName: 'Juan',
  // }, {
  //   where: {
  //     id: 1
  //   }
  // });

  // db.User.sync({force: true}) // drop table
  db.User.sync()
    .then(function(){
    // Table created
      return db.User.create({
          firstName: 'Eliana',
          lastName: 'Perez'
        }).then(function (user) {
          res.send('create user with id: ' + user.id);
        });
  });
};

exports.connection = function (req, res, next) {
  connection.connect(function (status) {
    var message = status ? 'can connect' : 'not connect';
    res.send(message);
  });
};