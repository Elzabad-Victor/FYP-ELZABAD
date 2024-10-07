// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.secretkey; // Ensure this is set in your environment variables

// Middleware to protect routes
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token'); // Extract token from request header
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.userId }; // Store the user ID as an object for better clarity
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    console.error('Token verification error:', error); // Log error for debugging
    res.status(401).json({ message: 'Invalid token' });
  }
};
