const express = require("express");
const path = require("path");
const passport = require("passport");
const authRoute = require("./routes/api/auth.route");
const pageRoute = require("./routes/pages/pages.route");

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

require("dotenv").config({debug: process.env.DEBUG});
require("./utils/passport.google.config")(passport);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use("/auth", authRoute);
app.use("/", pageRoute);
app.use("/assets", express.static(path.join(CURRENT_WORKING_DIR, "assets")));

module.exports = app;