// controllers/userController.js

const Artist = require('../Models/artist'); // Import the Artist model

// Function to handle artist registration
exports.registerArtist = async (req, res) => {
  try {
    const { name, email, country, state, city, address, education, about } = req.body;

    // Check if the artist email already exists
    const existingArtist = await Artist.findOne({ email });
    if (existingArtist) {
      return res.status(400).json({ message: 'Artist with this email already exists.' });
    }

    // Create a new artist
    const artist = new Artist({
      name,
      email,
      country,
      state,
      city,
      address,
      education,
      about,
    });

    await artist.save();
    res.status(201).json({ message: 'Artist registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};


// Get artist profile by email
exports.getArtistByEmail = async (req, res) => {
  const { artistEmail } = req.params;

  try {
    const artist = await Artist.findOne({ email: artistEmail });
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found.' });
    }
    res.status(200).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// controllers/artistController.js

exports.updateArtist = async (req, res) => {
  const { email } = req.params;
  const { name, country, state, city, address, education, about } = req.body;

  try {
    const artist = await Artist.findOneAndUpdate(
      { email },
      { name, country, state, city, address, education, about },
      { new: true } // Return the updated document
    );

    if (!artist) {
      return res.status(404).json({ message: 'Artist not found.' });
    }

    res.status(200).json(artist); // Return the updated artist data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
