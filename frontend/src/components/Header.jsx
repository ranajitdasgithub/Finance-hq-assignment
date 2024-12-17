import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#120F1C] via-[#6A0DAD] to-[#FF8C00] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-[#120F1C] flex items-center justify-center font-bold text-lg">
            FH
          </div>
          <span className="text-2xl font-semibold tracking-widest">
            ForensicsHQ
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#home"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#programs"
            className="hover:text-[#FF8C00] transition duration-300 ease-in-out"
          >
            Programs
          </a>
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
