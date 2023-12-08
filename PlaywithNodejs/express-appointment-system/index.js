var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

var square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log("The area of a square with a width of 4 is " + square.area(4));

setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");

var wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
