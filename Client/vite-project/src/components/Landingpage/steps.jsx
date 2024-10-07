import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import stateImage3 from "@/assets/stepsimg.png"; // Ensure the image path is correct

const steps = [
  { title: "Sign Up", description: "Create your free EventFusion account and start planning your event." },
  { title: "Choose Event", description: "Select the type of event you're planning, and let EventFusion guide you through the process." },
  { title: "Compare Vendors", description: "Explore our curated vendor directory, read reviews, and compare options to find the perfect fit." },
  { title: "Finalize Details", description: "Manage your event logistics, communicate with vendors, and bring your vision to life." },
];

const Steps = () => {
  // Intersection Observer to trigger animation when in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  // Trail animation for the steps
  const trail = useTrail(steps.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(20%)',
    config: { tension: 220, friction: 20, duration: 500 }, // Faster animation
  });

  return (
    <div ref={ref} className="p-8 lg:p-16 bg-[#ede3d1]" style={{ pointerEvents: 'none', userSelect: 'none' }}>
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-black mb-4 text-center">
        Streamline Your Event Planning Process
      </h2>

      {/* Description Text */}
      <p className="text-lg text-black text-center mb-8">
        EventFusion simplifies every step of your event planning journey. Here's how it works:
      </p>

      {/* Features Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left mb-6 lg:mb-0">
          <ol className="list-decimal pl-5 text-black">
            {trail.map((props, index) => (
              <animated.li
                style={props}
                key={index}
                className="mb-4"
              >
                <strong>{steps[index].title}</strong><br />
                <span>{steps[index].description}</span>
              </animated.li>
            ))}
          </ol>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={stateImage3} // Replace with the path to your image
            alt="Event Planning Process"
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
