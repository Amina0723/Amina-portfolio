// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (section) => {
    setIsOpen(false);
    if (section === "home" && onHomeClick) {
      onHomeClick();
    }
  };

  const navLinks = ["home", "about", "myEducation", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-cyan-900 to-cyan-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-7 flex justify-between items-center">
        {/* Brand with glowing white light */}
        <div
          className={`flex items-center gap-2 transform transition-transform duration-700 ease-out ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <h1 className="text-cyan-400 text-2xl font-extrabold tracking-wide select-none">
            Amina's Portfolio
          </h1>
          {/* White Glowing Light */}
          <div
            className="w-3 h-3 rounded-full bg-white opacity-80"
            style={{
              boxShadow: "0 0 8px #ffffffcc, 0 0 15px #ffffffcc",
              animation: "pulseLight 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12 text-cyan-300 font-semibold">
          {navLinks.map((section) => (
            <li key={section} className="relative group cursor-pointer">
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-cyan-400 underline decoration-2"
                className="transition-colors duration-300 hover:text-cyan-500"
                onClick={() => handleLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                <span
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  style={{ willChange: "width" }}
                />
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className={`text-cyan-400 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transform transition-transform duration-500 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute w-full left-0 top-full bg-gradient-to-b from-cyan-900 to-black shadow-lg overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 py-6 opacity-100 translate-y-0"
            : "max-h-0 py-0 opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-cyan-300 font-semibold">
          {navLinks.map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-cyan-400 underline decoration-2"
                className="cursor-pointer transition-colors duration-300 hover:text-cyan-500 hover:scale-110 transform"
                onClick={() => handleLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Glowing pulse animation */}
      <style>
        {`
          @keyframes pulseLight {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.4);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.6;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
