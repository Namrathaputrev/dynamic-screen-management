var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var metadataRouter = require("./routes/metadata");
// var recipeRouter = require("./routes/recipes");

var app = express();

// view engine setup
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", metadataRouter);

module.exports = app;
