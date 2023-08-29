const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log("Logged");
  next();
};

const authenticate = (req, res, next) => {
  // authenticate user
  next();
};

app.use(logger);
app.use(authenticate);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
