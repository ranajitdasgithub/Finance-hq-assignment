import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiFileText, FiShield, FiBookOpen, FiTool } from "react-icons/fi";

const CyberResilience = () => {
  // Ref for the entire section to track visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" ref={ref}>
      {/* Left Section with dynamic text effects */}
      <div className="w-full lg:w-1/3 bg-gradient-to-br from-pink-600 to-purple-800 text-white p-8 flex flex-col justify-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          Empowering Cyber Resilience Globally
        </motion.h2>
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          What We Do
        </motion.h1>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Specialized training programs designed to develop highly skilled
          Digital Forensics professionals.
        </motion.p>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Partner with organizations to strengthen their defenses against
          intricate digital evidence tampering and complex data breaches.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Investigate digital incidents and uncover forensically sound
          intelligence to support legal investigations and secure crucial
          evidence.
        </motion.p>
      </div>

      {/* Right Section with background image */}
      <div
        className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-cover bg-center text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('./Asset/home-page-banner-image.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Parallax effect for background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
          style={{
            backgroundImage: "url('./Asset/home-page-banner-image.jpg')",
          }}
          animate={isInView ? { y: [-10, 10] } : { y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            yoyo: Infinity,
          }}
        />

        {/* Cards */}
        {[
          {
            id: 1,
            icon: <FiFileText className="text-4xl mb-4 text-blue-400" />,
            title: "Comprehensive Investigation",
            description:
              "We conduct thorough examinations of digital evidence, with a hands-on practical approach.",
          },
          {
            id: 2,
            icon: <FiShield className="text-4xl mb-4 text-green-400" />,
            title: "Incident Response Expertise",
            description:
              "Learn how to respond to incidents, minimize damage, and prevent future threats.",
          },
          {
            id: 3,
            icon: <FiBookOpen className="text-4xl mb-4 text-yellow-400" />,
            title: "Continuous Learning and Adaptation",
            description:
              "Stay updated with the latest academic curriculum in the evolving cyber landscape.",
          },
          {
            id: 4,
            icon: <FiTool className="text-4xl mb-4 text-red-400" />,
            title: "Advanced Tools & Techniques",
            description:
              "Master advanced labs with cutting-edge methodologies to enhance your skills.",
          },
        ].map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:bg-blue-600"
            whileHover={{ scale: 1.05, rotate: 2 }}
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0)" }
                : { opacity: 0, transform: "translateY(20px)" }
            }
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {card.icon}
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CyberResilience;
