
exports.login = function (req, res, next) {
  res.render('login', { message: req.flash('loginMessage') });
};

exports.signup =  function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('signup', { message: req.flash('signupMessage') });
};

exports.profile = function (req, res, next) {
  res.render('profile', {
    user : req.user // get the user out of session and pass to template
  });
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};