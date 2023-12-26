const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();

  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 320,
      category: "mobile",
    },
    {
      name: "realme 3",
      brand: "realme",
      price: 220,
      category: "mobile",
    },
    {
      name: "iphone 15",
      brand: "apple",
      price: 1320,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
