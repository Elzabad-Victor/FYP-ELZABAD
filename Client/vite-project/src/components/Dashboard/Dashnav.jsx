import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashnav = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to home after logout
  };

  const handleNavigation = () => {
    setMenuOpen(false); // Close the dropdown
    navigate('/'); // Navigate to the home page
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex items-center justify-between" style={{ backgroundColor: '#332f2f', height: '120px', padding: '20px' }}>
      <div className="text-4xl font-bold text-white mx-auto" style={{ cursor: 'default', userSelect: 'none' }}>
        EventFusion
      </div>

      {/* Dropdown for Logout */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Profile/Account Icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m0-7a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="py-1">
            <button
              onClick={handleNavigation}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              About Us
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashnav;
