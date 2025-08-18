const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const UploadRouter = Router();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // folder in your project root
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // keep extension
  },
});

const upload = multer({ storage });

// Upload route
UploadRouter.route("/").post(upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    fileUrl: `/upload/${req.file.filename}`, // you can serve it later
  });
});

module.exports = UploadRouter;
