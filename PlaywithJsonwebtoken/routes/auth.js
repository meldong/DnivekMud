const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("auth route working");
});

router.post(
  "/signup",
  [
    check("email", "Please provide a vaild email.").isEmail(),
    check(
      "password",
      "Please provide a password with 6 characters at least."
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // User provides email and password
    const { email, password } = req.body;
    console.log(email, password);

    // validate the email and password
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(400).json({ errors: errors.array() });
    }

    // validate if usern with that email does not exist
    let user = users.find((user) => {
      return user.email === email;
    });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "The user already exists.",
          },
        ],
      });
    }

    // hash the password
    let hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email: email, password: hashedPassword });
    console.log(hashedPassword);

    // save user to db

    // send jwt
    const token = await jwt.sign({ email: email }, "123456", {
      expiresIn: 3600000,
    });
    console.log(token);

    res.json({ token });
  }
);

router.post("/login", async (req, res) => {
  // User provides email and password
  const { email, password } = req.body;
  console.log(email, password);

  // Get user with that email
  let user = users.find((user) => {
    return user.email === email;
  });
  if (user === undefined) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid credentials.",
        },
      ],
    });
  }

  // Compare hashed password to the password provided
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch === false) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid credentials.",
        },
      ],
    });
  }

  // Send jwt
  const token = await jwt.sign({ email: email }, "123456", {
    expiresIn: 3600000,
  });
  console.log(token);

  res.json({ token });
});

router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
