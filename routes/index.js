const express = require("express");
const Router = express.Router();
const { ensureAuth, ensureLoggedin } = require("../middleware/authMiddleware");

// @desc    Root reoute
// @route   GET /
Router.get("/", ensureLoggedin, (req, res) => {
  res.json("Are you trying To hack me ;(");
});

// @desc    Login success route
// @route   POST /loginsuccess
Router.get("/loginsuccess", ensureAuth, (req, res) => {
  res.json("Login Success My Friend");
});

module.exports = Router;
