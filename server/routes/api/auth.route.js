const express = require("express");
const { check } = require("express-validator");
const passport = require("passport");
const authCtrl = require("../../controller/auth.controller");
require("dotenv").config();

const router = express.Router();

router
  .route("/register")
  .post(
    check("name").notEmpty().withMessage("Name is required"),
    check("email")
      .notEmpty()
      .withMessage("Email Required")
      .isEmail()
      .withMessage("Enter Valid Email"),
    check("password")
      .notEmpty()
      .withMessage("Password Required")
      .isLength({ min: 6 })
      .withMessage("must be atleast 6 characters")
      .matches("^(?=.*[A-Z])(?=.*[0-9])")
      .withMessage("password must contain atleast one uppercase and digit"),
    authCtrl.signup
  );

router
  .route("/local")
  .post(
    check("email")
      .notEmpty()
      .withMessage("Email Required")
      .isEmail()
      .withMessage("Enter Valid Email"),
    check("password").notEmpty().withMessage("Incorrect Password"),
    authCtrl.signin
  );

router
  .route("/protected")
  .get(passport.authenticate("jwt", { session: false }), (req, res) => {
    res.status(200).json({
      success: true,
      msg: "You are successfully authenticated to this route!",
    });
  });

module.exports = router;
