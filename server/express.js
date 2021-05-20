const express = require("express");
const path = require("path");

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

require("dotenv").config({debug: process.env.DEBUG});
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(path.join(CURRENT_WORKING_DIR, "assets")));

module.exports = app;