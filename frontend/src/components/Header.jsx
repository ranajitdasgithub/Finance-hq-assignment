import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Event Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Trigger isScrolled when scrolled 50px down
      } else {
        setIsScrolled(false); // Reset isScrolled when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-[#120F1C] via-[#6A0DAD] to-[#FF8C00] text-white shadow-md z-20 transition-all duration-300 ${
        isScrolled ? "border-[0.5px] border-white-200" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="./Asset/logo.webp"
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
          <span className="text-2xl font-semibold tracking-widest">
            ForensicsHQ
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#home"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Home
          </a>

          {/* Programs Link with Dropdown and React Icons */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <span className="hover:text-[#FF8C00] transition duration-300 ease-in-out">
              Programs
            </span>
            {isDropdownVisible ? (
              <AiOutlineUp className="text-[#FF8C00] transition duration-300" />
            ) : (
              <AiOutlineDown className="text-white transition duration-300" />
            )}

            {/* Dropdown Menu */}
            {isDropdownVisible && (
              <div className="absolute top-6 left-0 bg-[#6A0DAD] text-white rounded-md shadow-lg w-40">
                <a
                  href="#program1"
                  className="block px-4 py-2 hover:bg-[#FF8C00]"
                >
                  Program 1
                </a>
                <a
                  href="#program2"
                  className="block px-4 py-2 hover:bg-[#FF8C00]"
                >
                  Program 2
                </a>
                <a
                  href="#program3"
                  className="block px-4 py-2 hover:bg-[#FF8C00]"
                >
                  Program 3
                </a>
              </div>
            )}
          </div>

          <a
            href="#services"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#blogs"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </nav>

        {/* Button Section */}
        <div className="hidden md:flex">
          <button
            className="relative bg-white text-[#120F1C] py-2 px-4 rounded-md font-semibold 
            transition-all duration-300 ease-in-out hover:text-white hover:bg-[#FF8C00] 
            hover:shadow-[0_0_15px_5px_#FF8C00] hover:scale-105 hidden md:flex"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
