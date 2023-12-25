const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome, This is Home page </h1> <a href="/about">go to about page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="user name" value="${req.query.name}"/>
  <button>click me</button><br>
  <a href="/">go to home page</a>
  `);
});

app.get("/contact", (req, res) => {
  res.send([
    {
      name: "arvind",
      email: "arvind@gmail.com",
    },
    {
      name: "guru",
      email: "guru@gmail.com",
    },
    {
      name: "manoj",
      email: "manoj@gmail.com",
    },
  ]);
});

app.listen(3030, () => {
  console.log("Server running on 3030");
});
