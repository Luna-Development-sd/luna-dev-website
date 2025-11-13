"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-[#175442]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Luna Development
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("expertise")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? "text-slate-700 hover:text-[#175442]" : "text-white/90 hover:text-white"
              }`}
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? "text-slate-700 hover:text-[#175442]" : "text-white/90 hover:text-white"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? "text-slate-700 hover:text-[#175442]" : "text-white/90 hover:text-white"
              }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#175442] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f3d2f] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Your Project
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("expertise")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-center px-4 py-3 bg-[#175442] text-white hover:bg-[#0f3d2f] rounded-lg font-semibold transition-colors mt-4"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
