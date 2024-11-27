const Cart = require("../Models/Cart.js");
const Artwork = require("../Models/artwork.js");

// Get the cart for a user
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.artwork"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found." });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add item to the cart
const addToCart = async (req, res) => {
  try {
    const { artworkId, quantity } = req.body;
    const artwork = await Artwork.findById(artworkId);
    if (!artwork)
      return res.status(404).json({ message: "Artwork not found." });

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.artwork.equals(artworkId)
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        artwork: artworkId,
        quantity,
        priceAtAddition: artwork.price,
      });
    }

    await cart.save();
    const updatedCart = await Cart.findOne({ user: req.user.id }).populate(
      "items.artwork"
    );
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove item from the cart
const removeFromCart = async (req, res) => {
  try {
    const { artworkId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    cart.items = cart.items.filter((item) => !item.artwork.equals(artworkId));

    await cart.save();
    const updatedCart = await Cart.findOne({ user: req.user.id }).populate(
      "items.artwork"
    );
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Clear the cart
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    cart.items = [];
    await cart.save();
    const updatedCart = await Cart.findOne({ user: req.user.id }).populate(
      "items.artwork"
    );
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
