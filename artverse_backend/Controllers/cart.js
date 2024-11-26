// controllers/cartController.js

const Cart = require("../Models/Cart.js");
const Artwork = require("../Models/artwork.js");

// Get the cart for a user
const getCart = async (req, res) => {
  try {
    // Retrieve the cart and populate the items with artwork details
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.artwork"
    );

    // If no cart found, return an error message
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    // Return the cart data
    res.json(cart);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ error: err.message });
  }
};

// Add item to the cart
const addToCart = async (req, res) => {
  try {
    const { artworkId, quantity } = req.body;

    // Find the artwork to get its price
    const artwork = await Artwork.findById(artworkId);
    if (!artwork)
      return res.status(404).json({ message: "Artwork not found." });

    // Retrieve the user's cart or create a new one if none exists
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    // Check if the item is already in the cart
    const itemIndex = cart.items.findIndex((item) =>
      item.artwork.equals(artworkId)
    );
    if (itemIndex > -1) {
      // If item is found, update its quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Otherwise, add the new item with its price at the time of addition
      cart.items.push({
        artwork: artworkId,
        quantity,
        priceAtAddition: artwork.price,
      });
    }

    // Save the updated cart
    await cart.save();
    res.json(cart);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ error: err.message });
  }
};

// Remove item from the cart
const removeFromCart = async (req, res) => {
  try {
    const { artworkId } = req.body;

    // Retrieve the user's cart
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    // Remove the item from the cart
    cart.items = cart.items.filter((item) => !item.artwork.equals(artworkId));

    // Save the updated cart
    await cart.save();
    res.json(cart);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ error: err.message });
  }
};

// Clear the cart
const clearCart = async (req, res) => {
  try {
    // Retrieve the user's cart
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    // Clear all items in the cart
    cart.items = [];
    await cart.save();

    // Return the cleared cart
    res.json(cart);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
