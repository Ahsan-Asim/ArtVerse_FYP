const express = require('express');
const { getCart, addToCart, removeFromCart, clearCart } = require('../Controllers/cart.js');
const authenticateUser = require('../middleware/authMiddleware.js');  // Corrected import

const router = express.Router();

// Routes for cart
router.get('/', authenticateUser, getCart); 
router.post('/add', authenticateUser, addToCart);
router.post('/remove', authenticateUser, removeFromCart);
router.post('/clear', authenticateUser, clearCart);

module.exports = router;
