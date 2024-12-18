import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";

const ProgramsOffered = () => {
  const programs = [
    {
      id: 1,
      title: "Certified Dark Web Forensics Expert",
      description:
        "A Certified Dark Web Forensics Expert is a professional skilled in the investigation, analysis, and interpretation of activities.. ",
      src: "/Asset/Dark-Web-Forensics-course-badge-thumb-white-1024x1024.png",
    },
    {
      id: 2,
      title: "Certified Drone Forensics Expert",
      description:
        "A Certified Drone Forensics Expert is a professional trained in the investigation, analysis, and interpretation of data .. ",
      src: "/Asset/Drone-Forensics-course-badge-thumb-1024x1024.png",
    },
    {
      id: 3,
      title: "Certified Cloud Forensics Expert",
      description:
        "A Certified Cloud Forensics Expert is a professional who has attained expertise in investigating cybercrimes, security breaches, and incidents that..  ",
      src: "/Asset/Cloud-Forensics-course-badge-thumb-1024x1024.png",
    },
    {
      id: 4,
      title: "Certified Windows Forensics Expert",
      description:
        "A Certified Windows Forensics Expert is a professional with specialized expertise in investigating cybercrimes, security incidents ..  ",
      src: "/Asset/Computer-Hacking-Forensic-course-badge-thumb-1024x1024.png",
    },
    {
      id: 5,
      title: "Certified Mac Forensics Expert",
      description:
        "A Certified Mac Forensics Expert is a professional who possesses specialized knowledge and skills in investigating ..",
      src: "/Asset/Mac-Forensics-course-badge-thumb-1024x1024.png",
    },
    {
      id: 6,
      title: "Certified Linux Forensics Expert",
      description:
        "A Certified Linux Forensics Expert is a professional who possesses specialized knowledge and skills in investigating  cybercrimes..   ",
      src: "/Asset/Linux-Forensics-course-badge-thumb-1024x1024.png",
    },
    {
      id: 7,
      title: "Certified IOT Forensics Expert",
      description:
        "A Certified IoT Forensics Expert is a professional who possesses specialized knowledge and skills in investigating cybercrimes, security.. ",
      src: "/Asset/IOT-Forensics-course-badge-thumb-1024x1024.png",
    },
    {
      id: 8,
      title: "Certified Mobile Forensics Expert",
      description:
        "A Certified Mobile Forensics Expert is a professional with specialized knowledge and skills in investigating cybercrimes..  ",
      src: "/Asset/cropped-Mobile-Forensics-course-badge-1024x1024.png",
    },
    {
      id: 9,
      title: "Computer Hacking Forensics Expert",
      description:
        "A Certified Computer Hacking Forensic Expert is a professional with specialized knowledge and skills in investigating cybercrimes .. ",
      src: "/Asset/Computer-Hacking-Forensic-course-badge-thumb-1024x1024.png",
    },
  ];

  // Ref for Scroll Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-white mb-10"
      >
        Programs We Offered
      </motion.h1>

      {/* Program Cards Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {programs.map((program, index) => (
          <Tilt
            key={program.id}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{ scale: 1.04 }}
              className="relative bg-gradient-to-br via-[#6A0DAD] to-[#FF8C00] p-6 rounded-xl shadow-xl h-[450px] hover:shadow-2xl transition-all duration-300"
            >
              {/* Overlay for Design */}
              <div className="absolute inset-0 bg-white opacity-10 rounded-xl pointer-events-none"></div>

              {/* Image */}
              <div className="relative flex justify-center mb-4">
                <img
                  src={program.src}
                  alt={program.title}
                  className="h-[70%] w-[70%] object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="relative text-white text-lg font-bold text-center mb-2">
                {program.title}
              </h3>
              {/* Description */}
              <p className="relative text-white text-sm text-center opacity-90 leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default ProgramsOffered;
