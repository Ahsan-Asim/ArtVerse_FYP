// controllers/userController.js

const User = require('../Models/user');
const Artist = require('../Models/artist'); // Import the Artist model


// controllers/userController.js

const { OAuth2Client } = require('google-auth-library');

// Initialize Google OAuth Client with your client ID
const client = new OAuth2Client('868206158931-8u3ftrs4ekvg4jitiu02bab01n5hj7q9.apps.googleusercontent.com');

exports.googleSignup = async (req, res) => {
  const { token } = req.body;
  
  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '868206158931-8u3ftrs4ekvg4jitiu02bab01n5hj7q9.apps.googleusercontent.com', // Your Google OAuth 2.0 Client ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: 'User already exists!' });
    }

    // Create new user with the Google data
    const user = new User({
      name,
      email,
      password: '', // Password is empty since it's from Google OAuth
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully via Google!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Google authentication failed', error });
  }
};



////////////////////////////////////////////////

// Controller to handle user signup
exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if the email or phone already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or phone already in use.' });
    }

    // Create a new user
    const user = new User({
      name,
      email,
      phone,
      password, // Ideally, hash the password before saving
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const User = require('../Models/user');

// Sign-in (login) functionality
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email,password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // // Verify password
    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return res.status(400).json({ message: 'Invalid email or password' });
    // }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email,role:user.role},
      '1234', // use a strong secret key
      { expiresIn: '1h' } // Token expiration (you can adjust this)
    );

    // Send the token in response
    res.status(200).json({
      message: 'Login successful',
      token, // Send the token to the client
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role, // Include role if applicable
      },    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
////////////////////
// Update user to become an artist
exports.becomeArtist = async (req, res) => {
  const { name, email, country, state, city, address, education, about } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the user is already an artist
    if (user.role === 'artist') {
      return res.status(400).json({ message: 'User is already an artist.' });
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
    const savedArtist = await artist.save();

    // Update user role and reference to artistDetails
    user.role = 'artist';
    user.artistDetails = savedArtist._id;

    await user.save();

    res.status(200).json({ message: 'User is now an artist!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};


// // Get artist profile by email
// exports.getUserByEmail = async (req, res) => {
//   const { email } = req.params;

//   try {
//     const artist = await User.findOne({ email: email });
//     if (!artist) {
//       return res.status(404).json({ message: 'User not found.' });
//     }
//     res.status(200).json(artist);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error.' });
//   }
// };

// Example: Backend route to fetch user details
exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }).populate('artistDetails');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
