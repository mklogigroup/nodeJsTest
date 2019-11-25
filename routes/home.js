var express = require('express');
var homeCtrl = require('../controllers/home.controller');

var router = express.Router();

/* GET home page. */
router.get('/', homeCtrl.index);
router.get('/hello/:name?', homeCtrl.hello);

module.exports = router;