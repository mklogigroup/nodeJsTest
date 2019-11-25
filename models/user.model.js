const Sequelize = require('sequelize').Sequelize;
var sequelize = require('../config/database').sequelize;
var bcrypt   = require('bcrypt-nodejs');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});
User.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
User.validPassword = function(password, currentPass) {
  return bcrypt.compareSync(password, currentPass);
};
exports.User = User;
