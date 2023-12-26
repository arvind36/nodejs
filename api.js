const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
