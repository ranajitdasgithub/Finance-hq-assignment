import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa"; // For icons

const timelineData = [
  {
    year: "2017-2018",
    description:
      "Our company collaborated with the EC Council for CHFI training to the Centre for Development of Advanced Computing and CEH training for employees at Cognizant and TCS. and organizations.",
  },
  {
    year: "2019-2020",
    description:
      "We collaborated with the MAKAUT Board and WB Police Training. Provided training for 100 individuals.  We have partnered with top clients like Vedanta and Tata Steel, showcasing our commitment to education and industry excellence through our strategic alliances and client engagements.",
  },
  {
    year: "2021-2022",
    description:
      "We secured Cert-in empanelment and trained Government personnel from WBPDCL and the Directorate General of Lighthouses and Lightships. We got renowned clients such as CESC, AMRI Hospital, Lux Cozi and Tata Medical, for our expertise and dedication to future excellence.",
  },
  {
    year: "2023-2024",
    description:
      "Our company itself is a Pearson VUE-authorised test center, CompTIA Authorized Partner, and a professional team trained by the Special Task Force and West Bengal Police Training Institute. We have successfully onboarded prestigious clients, including ABP, SAIL, Park Hotel, and Ruby General Hospital.",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Curved SVG Path */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 50 20 C 150 100, 350 50, 390 200 M 390 200 C 300 150, 250 290, 50 300 M 100 320 C 190 250, 280 550, 400 430"
              stroke="#6B46C1"
              fill="none"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Timeline Content */}
        <div className="relative z-10 opacity-1">
          {timelineData.map((item, index) => (
            <TimelineCard
              key={index}
              year={item.year}
              description={item.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ year, description, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-10`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
        className="relative bg-gradient-to-r from-purple-700 to-indigo-600 p-6 rounded-lg shadow-lg w-[320px] text-center hover:shadow-2xl transition-all duration-300"
      >
        {/* Icon */}
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-3">
          <FaRegDotCircle className="text-purple-400 text-3xl" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-2">{year}</h3>
        <p className="text-gray-200">{description}</p>
      </motion.div>
    </div>
  );
};

export default Timeline;
