// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const artistController = require('../Controllers/artist');


// New route for artist registration
router.post('/register-artist', artistController.registerArtist);

// Route to get artist profile by ID
router.get('/:artistEmail', artistController.getArtistByEmail);
router.put('/:email', artistController.updateArtist); // Add a new PUT route for updating artist profile

module.exports = router;
