const router = require("express").Router();
const { publicPosts, privatePosts } = require("../db");
const checkAuth = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("post route working");
});

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", checkAuth, (req, res) => {
  res.json(privatePosts);
});

module.exports = router;
