const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

// Uncomment the line below if you want to use reqFilter as global middleware
// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to the users page");
});

route.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to the contact page");
});
app.use("/", route);
app.listen(4200, () => {
  console.log("Server is listening on port 4200");
});
