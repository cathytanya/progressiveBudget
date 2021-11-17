// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// HEROKU PORT
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connect to the mongooDB
mongoose.connect(process.env.MONGOOSE_URI||"mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});