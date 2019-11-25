const Sequelize = require('sequelize');

var connection = new Sequelize('node_app', 'root', '', {
  'host' : 'localhost',
  'dialect': 'mysql'
});
exports.sequelize = connection;

exports.connect = function (callback) {
  connection
    .authenticate()
    .then(function () {
      console.log('Connection has been established successfully.');
      callback(true);
    })
    .catch(function (err) {
      console.error('Unable to connect to the database:', err);
      callback(false);
    });
};
