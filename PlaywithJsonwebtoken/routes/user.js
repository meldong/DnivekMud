const router = require("express").Router();
logger = require("../logger/logger");

const users = [{ firstName: "fnam1", lastName: "lnam1", userName: "uname1" }];

router.get("/", (req, res) => {
  logger.info("get all users");
  res.json(users);
});

router.get("/:userName", (req, res) => {
  logger.info(`filter users by username::::${req.params.userName}`);
  let user = users.filter((user) => {
    if (req.params.userName === user.userName) {
      return user;
    }
  });
  res.json(user);
});

router.post("/", (req, res) => {
  logger.info("user post route");
  users.push(req.body);
  res.json(users);
});

module.exports = router;
