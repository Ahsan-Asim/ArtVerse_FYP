// models/Cart.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      artwork: {
        type: Schema.Types.ObjectId,
        ref: "Artwork", // Reference to the Artwork model
        required: true,
      },
      quantity: {
        type: Number,
        default: 1, // Default to 1 if not specified
        min: [1, "Quantity must be at least 1"],
      },
      priceAtAddition: {
        type: Number,
        required: true, // Captures the price at the time of adding the item to the cart
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Tracks when the cart was created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Tracks when the cart was last updated
  },
});

// Middleware to update `updatedAt` before saving the document
cartSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Cart", cartSchema);
