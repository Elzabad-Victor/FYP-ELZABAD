// src/components/Reviews.jsx
import * as React from "react";
import { CarouselPlugin } from "@/components/Landingpage/CarouselPlugin"; // Update the import path if necessary

const Reviews = () => {
  return (
    <div className="p-8 lg:p-16 bg-[#fac9ca]">
      {/* Heading */}
      <h2 className="text-xl text-black font-bold mb-2 text-center" style={{ pointerEvents: 'none', userSelect: 'none' }}>
        Testimonials
      </h2>
      {/* Subheading */}
      <p className="text-3xl text-black font-bold mb-4 text-center" style={{ pointerEvents: 'none', userSelect: 'none' }}>
        What our users say?
      </p>
      {/* Description */}
      <p className="text-lg text-black text-center mb-8" style={{ pointerEvents: 'none', userSelect: 'none' }}>
        Discover how our users have found success in seamless event organization with EventFusion. Our platform has transformed their event planning experience, making it simpler and more enjoyable.
      </p>

      {/* Carousel Component */}
      <div className="w-full flex justify-center">
        <CarouselPlugin />
      </div>
    </div>
  );
};

export default Reviews;
