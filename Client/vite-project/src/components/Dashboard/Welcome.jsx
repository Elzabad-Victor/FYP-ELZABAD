import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Landingpage/Footer';

const Welcome = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const stepsUser = [
    {
      title: "Step 1: Explore EventFusion",
      content: "Discover a wide range of event planning services tailored just for you.",
    },
    {
      title: "Step 2: Choose Your Services",
      content: "Select from various vendors to find the best options for your event.",
    },
    {
      title: "Step 3: Get Started!",
      content: "Ready to plan your event? Click the button below to get started!",
    },
  ];

  const stepsVendor = [
    {
      title: "Step 1: Define Your Services",
      content: "Let us know what types of events you can offer services for.",
    },
    {
      title: "Step 2: Fill Out the Vendor Application",
      content: "Complete a basic application form that includes your business details.",
    },
    {
      title: "Step 3: Background Check",
      content: "We will perform a background check to ensure you meet our standards.",
    },
    {
      title: "Step 4: Approval and Publishing",
      content: "Once approved, you can start publishing events for users to see.",
    },
    {
      title: "Step 5: Get Started!",
      content: "You are now ready to offer your services on EventFusion!",
    },
  ];

  const handleVendorClick = () => {
    setSelectedOption('vendor');
    setCurrentSlide(0);
  };

  const handleUserClick = () => {
    setSelectedOption('user');
    setCurrentSlide(0);
  };

  const handleNext = () => {
    if (currentSlide < (selectedOption === 'user' ? stepsUser : stepsVendor).length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleGetStarted = () => {
    if (selectedOption === 'vendor') {
      navigate('/dashboard/vendorapplicationform'); // Vendor path
    } else if (selectedOption === 'user') {
      navigate('/dashboard/eventcategory'); // Navigate to event category selection
    }
  };

  const renderSteps = (steps) => (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#332f2f]">{steps[currentSlide].title}</h2>
      <p className="text-lg text-[#332f2f] mt-2">{steps[currentSlide].content}</p>
      <div className="flex justify-between mt-4">
        <button 
          className={`bg-[#fc5249] text-white font-bold py-2 px-4 rounded ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button 
          className={`bg-[#fc5249] text-white font-bold py-2 px-4 rounded ${currentSlide === (steps.length - 1) ? 'opacity-50 cursor-not-allowed' : ''}`} 
          onClick={handleNext}
          disabled={currentSlide === (steps.length - 1)}
        >
          Next
        </button>
      </div>
      {currentSlide === steps.length - 1 && (
        <button 
          className="bg-[#332f2f] text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#ede3d1]">
      <div className="flex-grow container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-[#332f2f]">Welcome to EventFusion!</h1>
        <p className="text-xl text-[#332f2f] mt-4">You have successfully signed up!</p>
        
        <div className="mt-8">
          <button
            className={`font-bold py-2 px-4 rounded mr-4 ${selectedOption === 'vendor' ? 'bg-[#fc5249] text-white' : 'bg-[#332f2f] text-white opacity-70'}`}
            onClick={handleVendorClick}
          >
            Become a Vendor
          </button>
          <button
            className={`font-bold py-2 px-4 rounded ${selectedOption === 'user' ? 'bg-[#fc5249] text-white' : 'bg-[#332f2f] text-white opacity-70'}`}
            onClick={handleUserClick}
          >
            Continue as User
          </button>
        </div>
        
        <p className="text-md text-[#332f2f] mt-4">
          If you want to continue as a user for now, you can, and later in the web application, you will have the option to become a vendor if you wish to.
        </p>

        {selectedOption && renderSteps(selectedOption === 'user' ? stepsUser : stepsVendor)}
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
