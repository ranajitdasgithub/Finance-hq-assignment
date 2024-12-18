import React from "react";
import { motion } from "framer-motion"; // Install this package for subtle animations

const WhyForensic = () => {
  return (
    <section className="px-6 lg:px-20 py-12 bg-gray-50">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Images */}
        <div className="relative flex flex-col lg:w-1/2">
          <motion.img
            src="./Assets/whyforensic1.jpg" // Replace with actual image path
            alt="Audience"
            className="rounded-xl shadow-lg w-full object-cover mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="./Assets/whyforensic1.jpg" // Replace with actual image path
            alt="Hacker"
            className="rounded-xl shadow-lg w-[80%] absolute bottom-[-30px] right-[-30px] object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Why <span className="text-indigo-600">ForensicsHQ</span> ?
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-indigo-600 text-2xl mr-3">•</span>
              <span>
                <strong>Expert-Led Digital Forensics Services:</strong> Powered
                by a team of top-notch industry experts delivering consulting,
                investigations, and education.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 text-2xl mr-3">•</span>
              <span>
                <strong>Comprehensive Forensics Solutions:</strong> Addressing
                threats in Mobile, Cloud, and Data Forensics with advanced tools
                and methods.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 text-2xl mr-3">•</span>
              <span>
                <strong>Education & Practical Training:</strong> Hands-on labs
                and real-world programs to upskill students.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 text-2xl mr-3">•</span>
              <span>
                <strong>Client-Centric Strategies:</strong> Focused on securing
                sensitive data with robust mitigation plans.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 text-2xl mr-3">•</span>
              <span>
                <strong>Innovation & Adaptability:</strong> Continuous learning
                ensures cutting-edge solutions.
              </span>
            </li>
          </ul>

          {/* Call-to-Action */}
          <div className="mt-8">
            <motion.a
              href="#"
              className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-6 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              CLICK HERE
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForensic;
