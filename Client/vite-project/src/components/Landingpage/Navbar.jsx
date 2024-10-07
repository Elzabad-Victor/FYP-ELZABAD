import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex items-center justify-between" style={{ backgroundColor: '#332f2f', height: '120px', padding: '20px' }}>
      <div className="relative"> {/* Wrapper for positioning */}
        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white focus:outline-none absolute top-1/2 left-4 transform -translate-y-1/2">
          {/* Hamburger icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Increased size */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-auto ${menuOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: '#332f2f', padding: '20px', borderRadius: '8px', width: 'max-content' }}>
          <div className="flex flex-col gap-4">
            <Link to="/features" className="text-lg font-medium text-white hover:underline">
              Features
            </Link>
            <Link to="/pricing" className="text-lg font-medium text-white hover:underline">
              Pricing
            </Link>
            <Link to="/about" className="text-lg font-medium text-white hover:underline">
              About
            </Link>
            <Link to="/contact" className="text-lg font-medium text-white hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Logo in the center with flexbox to maintain centering */}
      <Link to="/" className="text-4xl font-bold text-white mx-auto">
        EventFusion
      </Link>

      {/* Sign In/Sign Up buttons on the right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-4">
        <Link 
          to="/signin" 
          className="px-4 py-2 rounded text-sm font-medium border border-white"
          style={{ backgroundColor: '#332f2f', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b0ced6';
            e.currentTarget.style.color = '#332f2f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#332f2f';
            e.currentTarget.style.color = 'white';
          }}
        >
          Sign In
        </Link>
        <Link 
          to="/signup" 
          className="px-4 py-2 rounded text-sm font-medium border border-white"
          style={{ backgroundColor: '#332f2f', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b0ced6';
            e.currentTarget.style.color = '#332f2f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#332f2f';
            e.currentTarget.style.color = 'white';
          }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
