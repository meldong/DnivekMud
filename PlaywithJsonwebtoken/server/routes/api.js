const router = require("express").Router();
const user = require("./user");

router.get("/", (req, res) => {
  res.send("api route working");
});

router.use("/user", user);

module.exports = router;
