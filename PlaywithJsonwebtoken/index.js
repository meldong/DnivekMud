const express = require("express");
const auth = require("./routes/auth");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("Hi, I am Dnivek!");
});

app.listen(port, () => {
  console.log(`Now running on port ${port}!`);
});
