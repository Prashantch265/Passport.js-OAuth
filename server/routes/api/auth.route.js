const express = require("express");
const passport = require("passport");
require("dotenv").config();

const router = express.Router();

router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback route
//hand control to passport to get profile info from query string
router.route("/google/cb").get(passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect('/');
});

module.exports = router;
