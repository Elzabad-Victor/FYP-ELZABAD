import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Why = () => {
  // Intersection Observer for each feature
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [thirdRef, thirdInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation for each heading
  const firstHeadingProps = useSpring({
    opacity: firstInView ? 1 : 0,
    transform: firstInView ? 'translateX(0%)' : 'translateX(-50%)',
    config: { tension: 200, friction: 20, duration: 1000 },
  });

  const secondHeadingProps = useSpring({
    opacity: secondInView ? 1 : 0,
    config: { tension: 200, friction: 20, duration: 1000 },
  });

  const thirdHeadingProps = useSpring({
    opacity: thirdInView ? 1 : 0,
    transform: thirdInView ? 'translateX(0%)' : 'translateX(50%)',
    config: { tension: 200, friction: 20, duration: 1000 },
  });

  return (
    <div className="p-8 lg:p-16 bg-[#fac9ca]">
      <h2 className="text-4xl font-bold text-[#fc5249] mb-4 text-center" style={{ cursor: 'default', userSelect: 'none' }}>
        Why Our Event Planning Stands Out
      </h2>

      <p className="text-lg text-black text-center mb-8" style={{ cursor: 'default', userSelect: 'none' }}>
        EventFusion is designed to simplify every aspect of event planning, from vendor discovery to logistics management. Our platform empowers you to focus on creating unforgettable experiences.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Feature 1 */}
        <animated.div ref={firstRef} style={firstHeadingProps} className="w-full lg:w-1/3 text-center mb-6 lg:mb-0">
          <h3 className="text-xl font-bold text-black mb-2" style={{ cursor: 'default', userSelect: 'none' }}>
            Comprehensive Event Toolkit
          </h3>
          <p className="text-md text-gray-700" style={{ cursor: 'default', userSelect: 'none' }}>
            Access a wide range of tools to manage budgets, timelines, guest lists, and more, all in one place.
          </p>
        </animated.div>

        {/* Feature 2 */}
        <animated.div ref={secondRef} style={secondHeadingProps} className="w-full lg:w-1/3 text-center mb-6 lg:mb-0">
          <h3 className="text-xl font-bold text-black mb-2" style={{ cursor: 'default', userSelect: 'none' }}>
            Vendor Portal
          </h3>
          <p className="text-md text-gray-700" style={{ cursor: 'default', userSelect: 'none' }}>
            Discover and compare the best event vendors in your area, with real-time availability and reviews.
          </p>
        </animated.div>

        {/* Feature 3 */}
        <animated.div ref={thirdRef} style={thirdHeadingProps} className="w-full lg:w-1/3 text-center">
          <h3 className="text-xl font-bold text-black mb-2" style={{ cursor: 'default', userSelect: 'none' }}>
            Urdu & English Support
          </h3>
          <p className="text-md text-gray-700" style={{ cursor: 'default', userSelect: 'none' }}>
            Plan your events in your preferred language, with seamless communication and collaboration.
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default Why;
