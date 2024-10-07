// routes/userRoutes.js
const express = require('express');
const { signup, signin } = require('../Controllers/usercontroller'); // Updated path
const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

module.exports = router;
