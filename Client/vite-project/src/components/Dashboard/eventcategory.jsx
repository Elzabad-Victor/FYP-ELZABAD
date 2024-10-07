import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to this page
import Footer from '../Landingpage/Footer'; // Corrected import for Footer

// Dummy images for event categories
import birthdayImg from '@/assets/birthimg.jpg';
import corporateImg from '@/assets/corpimg.jpg';
import weddingImg from '@/assets/corpimg.jpg';
import otherImg from '@/assets/corpimg.jpg';

const EventCategory = () => {
  const navigate = useNavigate(); // Use navigate hook to route between pages

  return (
    <div className="bg-[#f0d7d5] min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow container mx-auto py-12 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Select the Type of Event You Want Services For
        </h2>

        {/* Event selection boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Birthday Event */}
          <div
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => alert('Birthday Event Selected')} // Placeholder action
          >
            <img src={birthdayImg} alt="Birthday Event" className="h-32 w-32 object-cover rounded-md mb-4" />
            <p className="text-xl font-semibold text-gray-700">Birthdays</p>
          </div>

          {/* Corporate Event */}
          <div
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => alert('Corporate Event Selected')} // Placeholder action
          >
            <img src={corporateImg} alt="Corporate Event" className="h-32 w-32 object-cover rounded-md mb-4" />
            <p className="text-xl font-semibold text-gray-700">Corporate Events</p>
          </div>

          {/* Wedding Event */}
          <div
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => alert('Shadi Event Selected')} // Placeholder action
          >
            <img src={weddingImg} alt="Shadi Event" className="h-32 w-32 object-cover rounded-md mb-4" />
            <p className="text-xl font-semibold text-gray-700">Shadi Events</p>
          </div>

          {/* Other Event */}
          <div
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => alert('Other Event Selected')} // Placeholder action
          >
            <img src={otherImg} alt="Other Event" className="h-32 w-32 object-cover rounded-md mb-4" />
            <p className="text-xl font-semibold text-gray-700">Other Events</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventCategory;
