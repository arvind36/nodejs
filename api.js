const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = data.insertOne(req.body);
  res.send(result);
});

app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.params.name }, { $set: req.body });
  res.send({ result: "updated" });
});

app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
