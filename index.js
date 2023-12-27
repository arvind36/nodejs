const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = new Product({
    name: "realme narzo 30",
    price: "850",
    brand: "realme",
    category: "mobile",
  });
  let result = await data.save();
};
// saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.updateOne(
    { name: "iphone 12" },
    { $set: { brand: "apple" } }
  );
  console.log(data);
};

// updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.deleteOne({ name: "realme narzo 30" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.find({ name: "realme narzo 30" });
  console.log(data);
};

findInDB();
