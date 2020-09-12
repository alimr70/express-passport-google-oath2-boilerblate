const express = require("express");
const passport = require("passport");
const Router = express.Router();

// @desc    Auth with google
// @route   GET /auth/google
Router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/loginsuccess");
  }
);

// @desc    Logout user
// @route   /auth/logout
Router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = Router;
