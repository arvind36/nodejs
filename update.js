const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    {
      name: "not 5 pro",
    },
    { $set: { name: "note 5 pro" } }
  );
  console.log(result);
};
updateData();
