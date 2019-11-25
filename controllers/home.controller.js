
exports.index = function (req, res, next) {
  res.render('index', { title: 'Express' });
};

exports.hello = function (req, res, next) {
  const fs = require('fs');
  const path = require('path');
  const Sequelize = require('sequelize');
  const envConfigs =  require('../config/config');

  const basename = path.basename(__filename);
  const env = process.env.NODE_ENV || 'development';
  const config = envConfigs[env];
  const db = {};

  let sequelize;
  if (config.url) {
    sequelize = new Sequelize(config.url, config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  var name = req.params.name;
  if (!name) {
    name = 'Express';
  }

  res.render('index', { title: name });
};
