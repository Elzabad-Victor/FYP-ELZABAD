import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/Authcontext'; // Correctly import useAuth
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import stateImage1 from "@/assets/birthimg.jpg";
import stateImage2 from "@/assets/corpimg.jpg";
import Reviews from './Reviews';
import Why from './Why';
import Steps from './Steps'; 
import Footer from './Footer';

const Home = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to get authentication state
  const navigate = useNavigate(); // Initialize useNavigate
  const images = [stateImage1, stateImage2]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/welcome'); // Redirect to the welcome page if logged in
    } else {
      navigate('/signup'); // Redirect to the sign-up page if not logged in
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16" style={{ backgroundColor: '#ede3d1', minHeight: '100vh' }}>
        {/* Left Section: Heading, Content, and Button */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-4xl font-bold text-black mb-4" style={{ cursor: 'default', userSelect: 'none' }}>
            Effortless Event Planning with EventFusion
          </h1>
          <p className="text-lg text-black mb-6" style={{ cursor: 'default', userSelect: 'none' }}>
            Streamline your event planning process with our all-in-one platform. Discover the perfect vendors, manage logistics, and bring your vision to life.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="border-2 border-[#fc5249] text-[#fc5249] hover:bg-[#fc5249] hover:text-white transition-colors duration-300"
            style={{ borderRadius: '0px', padding: '12px 24px', fontSize: '1.125rem' }}
            onClick={handleButtonClick} // Add onClick handler
          >
            {isLoggedIn ? 'Dashboard' : 'Get Started'}
          </Button>
        </div>

        {/* Right Section: Image Carousel */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center" style={{ position: 'relative', height: '400px' }}>
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
            <img
              src={images[currentImageIndex]} // Display current image
              alt="Event Planning Illustration"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Section moved to Why.jsx */}
      <Why />

      {/* New Section moved to Steps.jsx */}
      <Steps />

      {/* Reviews Section */}
      <Reviews />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
