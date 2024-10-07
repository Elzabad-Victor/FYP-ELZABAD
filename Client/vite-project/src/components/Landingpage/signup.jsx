import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component
import { useAuth } from '@/context/Authcontext'; // Import useAuth

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from Auth context

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', { // Backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to sign up');
      }

      const data = await response.json();
      console.log('Sign up successful:', data);

      // Clear form and set logged in state
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      
      login(); // Set logged in state in context
      navigate('/welcome'); // Navigate to welcome page
    } catch (err) {
      console.error('Error during sign up:', err);
      setError(err.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#ede3d1' }}>
        <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#332f2f]">Sign Up</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
              <input
                className="w-full p-3 border rounded-md focus:outline-none focus:border-[#fc5249]"
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-3 border rounded-md focus:outline-none focus:border-[#fc5249]"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="w-full p-3 border rounded-md focus:outline-none focus:border-[#fc5249]"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Confirm Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="w-full p-3 border rounded-md focus:outline-none focus:border-[#fc5249]"
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#fc5249] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#e04541]"
                type="submit"
              >
                Sign Up
              </button>
              <Link to="/signin" className="text-sm text-[#fc5249] hover:underline">
                Already have an account? Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default SignUp;
