const express = require('express');
const router = express.Router();
const multer = require('multer');
const artworkController = require('../Controllers/artwork');
const authMiddleware = require('../middleware/authMiddleware');
const checkVerification = require('../middleware/checkVerification');
const User = require('../Models/user'); // Import the User model
const Artwork = require('../Models/artwork');


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

router.get('/getArtwork/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const artworks = await Artwork.find({ _id: { $in: user.artworks } });
    res.status(200).json(artworks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to search artworks by title
router.get('/search', async (req, res) => {
  try {
    const { title } = req.query; // Get the search query from the request query string

    if (!title) {
      return res.status(400).json({ message: 'Title is required for search.' });
    }

    // Find artworks where the title contains the search query (case-insensitive)
    const artworks = await Artwork.find({
      title: { $regex: title, $options: 'i' } // 'i' for case-insensitivity
    });

    if (artworks.length === 0) {
      return res.status(404).json({ message: 'No artworks found with the given title.' });
    }

    res.status(200).json(artworks);
  } catch (error) {
    console.error("Error searching for artworks:", error);
    res.status(500).json({ message: 'Server Error.' });
  }
});

module.exports = router;