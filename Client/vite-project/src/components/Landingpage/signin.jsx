// components/Landingpage/SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import your Footer component
import { useAuth } from '../../context/Authcontext'; // Import the useAuth hook

const SignIn = () => {
  const { login } = useAuth(); // Access the login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to sign in');
      }

      const data = await response.json();
      console.log('Sign in successful:', data);

      setEmail('');
      setPassword('');
      setError('');

      // Call login to update state and navigate to the welcome page
      login();
      navigate('/welcome');
    } catch (err) {
      console.error('Error during sign in:', err);
      setError(err.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: '#ede3d1' }}>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#332f2f]">Sign In</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
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
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
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
            <div className="flex items-center justify-between">
              <button
                className="bg-[#fc5249] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#e04541]"
                type="submit"
              >
                Sign In
              </button>
              <Link to="/signup" className="text-sm text-[#fc5249] hover:underline">
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Add Footer Component here */}
      <Footer />
    </div>
  );
};

export default SignIn;
