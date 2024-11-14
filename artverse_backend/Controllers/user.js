// controllers/userController.js

const User = require('../Models/user');

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


// Sign-in (login) functionality
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email,password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // // Compare entered password with hashed password in the database
    // const isMatch = await user.comparePassword(password);

    // if (!isMatch) {
    //   return res.status(400).json({ message: 'Invalid email or password' });
    // }

    // Successful login
    res.status(200).json({
      message: 'Login successful',
      user: { name: user.name, email: user.email, phone: user.phone }, // Return user details without password
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
