const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Data swnt by browser ==>", req.query.name);
  res.send("Welcome " + req.query.name);
});

app.get("/about", (req, res) => {
  res.send("Welcome, This is About page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome, This is Contact page");
});

app.listen(3030, () => {
  console.log("Server running on 3030");
});
