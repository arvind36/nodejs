const express = require("express");
require("./config"); // Assuming this is the correct path to your configuration file
const Product = require("./product");

const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.listen(4500, () => {
  console.log("server running on 4500");
});
