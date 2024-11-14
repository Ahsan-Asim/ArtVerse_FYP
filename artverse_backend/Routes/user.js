// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user');

// Route for user signup
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/google-signup', userController.googleSignup);


module.exports = router;
