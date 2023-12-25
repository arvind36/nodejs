const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/contact.html`);
});
app.get("/profile", (req, res) => {
  const user = {
    name: "Arvind",
    email: "arvind@gmail.com",
    phone: 1234567890,
    city: "bangalore",
    skills: ["html", "css", "js", "react", "mongoDB", "nodejs"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pnf.html`);
});

app.listen(5000);
