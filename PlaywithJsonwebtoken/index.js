const express = require("express");
const auth = require("./routes/auth");
const post = require("./routes/post");
const user = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", auth);
app.use("/posts", post);
app.use("/users", user);

app.get("/", (req, res) => {
  res.send("Hi, I am Dnivek!");
});

app.listen(port, () => {
  console.log(`Now running on port ${port}!`);
});
