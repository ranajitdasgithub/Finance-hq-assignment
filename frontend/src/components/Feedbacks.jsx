import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const feedbacks = [
  {
    name: "Sayani Maity",
    role: "Student",
    img: "/Asset/a.png",
    feedback:
      "At ForensicsHQ, I was immersed in the cutting-edge world of Ethical Hacking, where I learned to apply forensic techniques to secure digital landscapes. Their comprehensive training and expert mentorship equipped me to tackle cybersecurity's most complex challenges.",
  },
  {
    name: "Suraj Bag",
    role: "Student",
    img: "/Asset/b.png",
    feedback:
      "Enrolling at ForensicsHQ was a pivotal step in my career. The dedicated instruction in cyber forensics not only enhanced my technical proficiency but also set me on a path to success at Lenovo, JP Morgan, and Chase.",
  },
  {
    name: "Sakshi Ojha",
    role: "Student",
    img: "/Asset/c.png",
    feedback:
      "My experience at ForensicsHQ has been transformative, diving deep into the realms of Ethical Hacking and cyber forensics. The invaluable knowledge and hands-on training ignited a passionate journey in cybersecurity.",
  },
];

const FeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 lg:px-20 py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(30, 30, 58, 0.9), rgba(8, 28, 44, 0.9))",
      }}
    >
      {/* Animated Gradient Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-500 to-purple-400"
      >
        Our Students Feedback
      </motion.h2>

      {/* Floating Gradient Decoration */}
      <div className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full opacity-20 blur-3xl top-[-50px] left-[-50px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-300 rounded-full opacity-20 blur-3xl bottom-[-50px] right-[-50px]"></div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {feedbacks.map((feedback, i) => (
          <motion.div
            key={i}
            variants={cardAnimation}
            custom={i}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(147, 51, 234, 0.5)",
              borderRadius: "1rem",
            }}
            className="relative rounded-2xl"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.4}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-white shadow-lg flex flex-col h-full"
            >
              <p className="mb-6 text-lg leading-relaxed line-clamp-5 flex-grow">
                {feedback.feedback}
              </p>
              {/* Bottom Profile Section */}
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-700">
                <img
                  src={feedback.img}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-semibold text-lg">{feedback.name}</h4>
                  <span className="text-indigo-300 text-sm">
                    {feedback.role}
                  </span>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
