const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} = require("../Controllers/cartController.js");
const authenticateUser = require("../middleware/authMiddleware.js");

const router = express.Router();

// Single route for all cart operations
router.post("/", authenticateUser, async (req, res) => {
  const { type, artworkId, quantity } = req.body;

  try {
    switch (type) {
      case "add":
        return await addToCart(req, res);
      case "remove":
        return await removeFromCart(req, res);
      case "clear":
        return await clearCart(req, res);
      case "get":
      default:
        return await getCart(req, res);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
