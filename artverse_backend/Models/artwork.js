const mongoose = require("mongoose");
const { Schema } = mongoose;

const artworkSchema = new Schema({
  image: {
    type: String,
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
    },
    width: {
      type: Number,
    },
    depth: {
      type: Number,
    },
  },
  description: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Artwork", artworkSchema);
