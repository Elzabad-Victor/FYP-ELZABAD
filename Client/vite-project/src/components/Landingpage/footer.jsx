// src/components/Footer.jsx
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#332f2f] text-white py-8 px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section: Developer Info */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-lg font-bold">Developed by:</h2>
          <p className="text-lg">Elzabad Victor</p>
          <p className="text-lg">Muqaddas</p>
        </div>

        {/* Middle Section: Social Media Icons */}
        <div className="flex space-x-6 mb-6 lg:mb-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-[#b0ced6] transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-[#b0ced6] transition-colors duration-300" />
          </a>
        </div>

        {/* Right Section: Business Email */}
        <div className="text-right">
          <h2 className="text-lg font-bold">Contact Us:</h2>
          <p className="text-lg">eventfusion@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
