var express = require('express');
var userCtrl = require('../controllers/user.controller');

var router = express.Router();

router.get('/', userCtrl.index);
router.get('/create', userCtrl.create);
router.get('/connect', userCtrl.connection);

module.exports = router;
