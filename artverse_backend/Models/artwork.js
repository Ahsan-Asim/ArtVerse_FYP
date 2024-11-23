// models/Artwork.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const artworkSchema = new Schema({
  image: {
    type: String,  // Can store a URL or path to the image
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  yearProduced: {
    type: Number,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  dimensions: {
    height: {
      type: Number,
      // required: true,
    },
    width: {
      type: Number,
      // required: true,
    },
    depth: {
      type: Number,
    },
  },
  description: {
    type: String,
    required: true,
  },
  artist: { type: String, ref: 'User', required: true }, // Reference to User model

});
// artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model


module.exports = mongoose.model('Artwork', artworkSchema);
