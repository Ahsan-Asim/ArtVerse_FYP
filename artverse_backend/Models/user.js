// models/User.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    // required: true,
    // unique: true,
    match: [/^\d{10}$/, 'Please enter a valid phone number'],
  },
  password: {
    type: String,
    // required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'artist'],
    default: 'user',
  },
  googleId: {
    type: String,
  },
  artistDetails: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artwork',
    },
  ],
  isVerified: {
    type: Boolean,
    default: false, // Default value set to false
  },
  isBlocked: {
    type: Boolean,
    default: false, // Default value set to false
  },
});

module.exports = mongoose.model('User', userSchema);
