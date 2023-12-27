const express = require("express");
const multer = require("multer");
const app = express();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the destination folder for uploads
  },
  filename: (req, file, cb) => {
    let datetimestamp = Date.now() + "." + file.originalname.split(".")[1];
    cb(null, datetimestamp); // Use the original file name with a timestamp for uniqueness
  },
});

const upload = multer({ storage: storage }).single("user_file");

// Route for handling file uploads
app.post("/upload", (req, res) => {
  // Use the 'upload' middleware to handle the file upload
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.send("File upload successful");
  });
});

// Server listening on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
