var express = require('express');
var homeRoutes = require('./home');
var userRoutes = require('./users');
var securityRoutes = require('./security');

var router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', function (req, res) {
  res.send('OK')
});

router.use('/', homeRoutes);
router.use('/', securityRoutes);

router.use('/users', userRoutes);

module.exports = router;
