module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureLoggedin: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect("/loginsuccess");
    } else {
      return next();
    }
  },
};
