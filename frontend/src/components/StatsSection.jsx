import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerCountUp, setTriggerCountUp] = useState(false);

  // Intersection Observer to detect scroll into view
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
      setTriggerCountUp(true); // Trigger the counter animation
    }

    if (!inView && hasAnimated) {
      setHasAnimated(false); // Reset animation status if out of view
      setTriggerCountUp(false); // Reset counter trigger
    }
  }, [inView, hasAnimated, controls]);

  return (
    <motion.div
      ref={ref}
      className="bg-gray-100 py-16"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center">
        {/* Left Text */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-700">
            Some Numbers which means the most to us
          </h2>
        </div>

        {/* Numbers */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl font-extrabold text-purple-700">
              {triggerCountUp && <CountUp start={0} end={40} duration={1.5} />}+
            </h3>
            <p className="text-gray-600 mt-2">Qualified Employees</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl font-extrabold text-purple-700">
              {triggerCountUp && <CountUp start={0} end={60} duration={1} />}+
            </h3>
            <p className="text-gray-600 mt-2">Clients Served</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl font-extrabold text-purple-700">
              {triggerCountUp && <CountUp start={0} end={4} duration={1} />}
            </h3>
            <p className="text-gray-600 mt-2">National Offices</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-5xl font-extrabold text-purple-700">
              {triggerCountUp && (
                <CountUp start={0} end={7500} duration={1.5} separator="," />
              )}
              +
            </h3>
            <p className="text-gray-600 mt-2">Students Taught</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
