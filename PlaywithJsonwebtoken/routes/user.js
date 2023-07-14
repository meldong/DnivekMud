const router = require("express").Router();
const users = [{ firstName: "fnam1", lastName: "lnam1", userName: "uname1" }];

router.get("/", (req, res) => {
  res.send("user route working");
});

router.get("/all", (req, res) => {
  res.json(users);
});

module.exports = router;
