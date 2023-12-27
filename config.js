let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arvind@3698",
  database: "test",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
module.exports = connection;
