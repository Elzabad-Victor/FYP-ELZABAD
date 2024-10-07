const User = require('../Models/User'); // Ensure the case matches your file name
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.secretkey || 'yourFallbackSecretKey'; // Ensure this is set

// Sign-up logic
// Sign-up logic
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // Create a new user and save to DB
    const user = new User({
      name,
      email: email.toLowerCase(),
      password, // Use the plain password here; it will be hashed in the User model
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user', details: error.message });
  }
};


// Sign-in logic
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    console.log('Entered Password:', password);
    console.log('Stored Hash:', user.password);

    const isMatch = await bcrypt.compare(password.trim(), user.password);
    console.log('Password Match:', isMatch); // Log the result of the comparison
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { name: user.name, email: user.email } });

  } catch (error) {
    console.error('Error during sign in:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
