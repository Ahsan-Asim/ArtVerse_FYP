const express = require('express');
const router = express.Router();
const multer = require('multer');
const artworkController = require('../Controllers/artwork');
const authMiddleware = require('../middleware/authMiddleware');
const checkVerification = require('../middleware/checkVerification');

const path = require('path'); // Add this line to require the 'path' module


// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/artworks'); // Define where to store the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set file name to current timestamp
  }
});

const upload = multer({ storage });

// Route to upload artwork
router.post('/upload', authMiddleware, checkVerification, upload.single('image'), artworkController.uploadArtwork);

module.exports = router;
