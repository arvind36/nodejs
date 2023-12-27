const express = require("express");
const connection = require("./config");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  connection.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO employee SET ?",
    data,
    (error, result, fields) => {
      if (error) {
        res.status(500).json({ error: "Failed to insert data" });
      } else {
        res
          .status(201)
          .json({ message: "Data inserted successfully", insertedData: data });
      }
    }
  );
});

app.put("/:id", (req, res) => {
  const data = [
    req.body.EmpName,
    req.body.EmpAge,
    req.body.EmpDept,
    req.params.id,
  ];
  connection.query(
    "UPDATE employee SET EmpName=?, EmpAge=?, EmpDept=? WHERE EmpID=?",
    data,
    (err, result, fields) => {
      if (err) {
        res.status(400).json({ error: "Failed to update data" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: "Employee not found" });
        } else {
          res.status(200).json({
            message: "Data updated successfully",
            updatedData: data,
          });
        }
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  const empID = req.params.id;
  connection.query(
    "DELETE FROM employee WHERE EmpID = ?",
    [empID],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to delete data" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: "Employee not found" });
        } else {
          res.status(200).json({
            message: "Data deleted successfully",
            deletedEmpID: empID,
          });
        }
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
