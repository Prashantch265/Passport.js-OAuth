const express = require("express");
const passport = require("passport");
require("dotenv").config();

const router = express.Router();

router.route("/facebook").get(
  passport.authenticate("facebook")
);

//callback route
//hand control to passport to get profile info from query string
router.route("/facebook/cb").get(passport.authenticate("facebook"), (req, res) => {
  res.send(req.user);
  // res.redirect('/');
});

module.exports = router;