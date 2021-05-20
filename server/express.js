const express = require("express");
const path = require("path");
const passport = require("passport");
const app = express();
const authRoute = require("./routes/api/auth.route");

const CURRENT_WORKING_DIR = process.cwd();

require("dotenv").config({debug: process.env.DEBUG});
require("./utils/passport.jwt.config")(passport);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use("/assets", express.static(path.join(CURRENT_WORKING_DIR, "assets")));
app.use("/auth", authRoute);

module.exports = app;