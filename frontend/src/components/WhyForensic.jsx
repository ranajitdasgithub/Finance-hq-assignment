import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const WhyForensic = () => {
  return (
    <section className="px-6 lg:px-20 py-12 overflow-hidden bg-gradient-to-r from-indigo-500/70 to-purple-500/70">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-screen-xl mx-auto relative">
        {/* Left Side Images */}
        <div className="relative flex flex-col lg:w-1/2">
          {/* First Image */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glareBorderRadius="12px"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.04}
            transitionSpeed={1000}
          >
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-lg w-[80%] mb-6 lg:mb-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Image and Gradient */}
              <img
                src="./Asset/whyforensic2.jpg"
                alt="Audience"
                className="object-cover w-full h-60 lg:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </Tilt>

          {/* Second Image */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#f5f5f5"
            scale={1.05}
            transitionSpeed={900}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg w-[60%] absolute bottom-[-30px] right-[-10px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src="./Asset/whyforensic1.jpg"
                alt="Hacker"
                className="object-cover w-full h-48 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </Tilt>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why <span className="text-indigo-300">ForensicsHQ</span> ?
          </motion.h2>

          {/* List Items */}
          <ul className="space-y-5 text-white text-lg">
            {[
              "Expert-Led Digital Forensics Services: Powered by industry experts.",
              "Comprehensive Forensics Solutions: Mobile, Cloud, and Data Forensics.",
              "Education & Practical Training: Hands-on labs for real-world skills.",
              "Client-Centric Strategies: Secure sensitive data with tailored plans.",
              "Innovation & Adaptability: Cutting-edge and innovative solutions.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <span className="text-indigo-300 text-2xl mr-3">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Call-to-Action */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)] transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </div>

      {/* Optional Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
    </section>
  );
};

export default WhyForensic;
