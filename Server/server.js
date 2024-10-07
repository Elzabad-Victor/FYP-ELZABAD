const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const userRoutes = require('./Routes/userroutes');
const vendorApplicationRoutes = require('./Routes/vendorapplicationroutes'); // Import vendor application routes
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
}));

// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://elzabadvictor:hEao2TRJ5JPkjuWx@fyp-cluster.ias5m.mongodb.net/FYP-ELZABAD', {

})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api', userRoutes); // User routes
app.use('/api', vendorApplicationRoutes); // Vendor application routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
