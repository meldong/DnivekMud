const express = require("express");
const auth = require("./routes/auth");
const post = require("./routes/post");
const api = require("./routes/api");
const logger = require("./logger/logger");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", auth);
app.use("/posts", post);
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hi, I am Dnivek!");
});

app.get("*", (req, res) => {
  logger.info("Route undefined!");
  res.send("App works!");
});

app.listen(port, () => {
  logger.info(`Now running on port ${port}!`);
});