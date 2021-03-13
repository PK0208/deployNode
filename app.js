const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server Runnning");
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
