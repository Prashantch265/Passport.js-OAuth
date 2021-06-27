const express = require("express");
const path = require("path");
const authRoute = require("./routes/api/auth.route");
const pageRoute = require("./routes/pages/pages.route");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

require("dotenv").config({debug: process.env.DEBUG});
require("./util/passport.facebook.config")(passport);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({
    maxAge: 60 * 1000,
    keys: [process.env.COOKIE_SECRET]
}));
app.use("/assets", express.static(path.join(CURRENT_WORKING_DIR, "assets")));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);
app.use("/", pageRoute);

module.exports = app;