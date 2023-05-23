var jwt = require("jsonwebtoken");

// sign with default (HMAC SHA256) - synchronous
var token = jwt.sign({ foo: "bar" }, "shhhhh");
console.log(token);

// verify a token symmetric - synchronous
var decoded = jwt.verify(token, "shhhhh");
console.log(decoded.foo); // bar

// invalid token - synchronous
try {
  var decoded = jwt.verify(token, "wrong-secret");
} catch (err) {
  console.error(err);
}
