const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../db");
const bcrypt = require("bcrypt");

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
    const { email, password } = req.body;
    console.log(email, password);

    // validate the email and password
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(400).json({ errors: errors.array() });
    }

    // validate if user does not exist
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

    res.send("auth/signup route working");
  }
);

router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
