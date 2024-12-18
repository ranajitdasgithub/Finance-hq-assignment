import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="/Asset/Untitled-design-1-150x150.png"
              alt="Company Logo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <h2 className="text-xl font-bold">ForensicsHQ</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are specialists in cutting-edge Digital Forensics solutions,
            shaping the future of digital security in Eastern India. Our
            dedicated team of experts develops comprehensive strategies, from
            foundational education to advanced Digital Forensics services,
            designed to meet the complex demands of modern enterprises globally.
            We transform students into industry-ready professionals through
            hands-on training in state-of-the-art lab environments. By working
            closely with clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-300">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-purple-400 transition-colors">
              About Us
            </li>
            <li className="hover:text-purple-400 transition-colors">
              Programs
            </li>
            <li className="hover:text-purple-400 transition-colors">
              Our Team
            </li>
            <li className="hover:text-purple-400 transition-colors">Contact</li>
          </ul>
        </div>

        {/* Branches Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-300">
            Our Branches
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              <span>
                Plot Number 23, 2nd Floor, Lane Number 2, District Center,
                Chandrasekharpur, Bhubaneswar.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              <span>
                Baghajatin Park Main Road, Sub-Registry Office Building, 1st
                Floor. Beside Axis Bank.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              <span>
                Danphelink PVT LTD, 2nd Floor, Rem Work Building, Kamalpokhari
                01, Kathmandu, Nepal.
              </span>
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-300">Find Us</h3>
          <div
            className="relative w-full h-[250px] overflow-hidden rounded-lg shadow-md"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <img
              src="/Asset/map.png"
              alt="Company map"
              className="w-full h-full object-cover"
            />
            {/* Optional Overlay for Styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          Copyright © 2024 ForensicsHQ | Powered by ForensicsHQ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
