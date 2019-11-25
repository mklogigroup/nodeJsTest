var express = require('express');
var passport = require('passport');
var securityRoutes = require('../controllers/security.controller');
var auth = require('../middleware/auth.middleware');

var router = express.Router();

router.get('/login', securityRoutes.login);
router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
router.get('/signup', securityRoutes.signup);
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
router.get('/profile', auth.isLoggedIn, securityRoutes.profile);
router.get('/logout', securityRoutes.logout);

module.exports = router;