"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  currentPage?: "home" | "about" | "services" | "projects" | "contact";
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (page: string) =>
    currentPage === page
      ? "text-base font-medium text-slate-900"
      : "text-base font-medium text-slate-600 hover:text-slate-900 transition-colors";

  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-slate-900">
          Luna Development
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass("home")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("about")}>
            About
          </Link>
          <Link href="/services" className={linkClass("services")}>
            Services
          </Link>
          <Link href="/projects" className={linkClass("projects")}>
            Projects
          </Link>
          <Link href="/contact" className={linkClass("contact")}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Get Started Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex px-6 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-white z-[100] md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-slate-600 hover:text-slate-900"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-start justify-start h-full w-full px-8 pt-24 space-y-8 overflow-y-auto">
          <Link
            href="/"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-4'} ${
              currentPage === "home" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-4'} ${
              currentPage === "about" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-4'} ${
              currentPage === "services" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 -translate-y-4'} ${
              currentPage === "projects" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 -translate-y-4'} ${
              currentPage === "contact" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className={`mt-8 px-8 py-4 bg-[#175442] text-white text-xl font-medium hover:bg-[#0f3d2f] transition-all duration-500 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0 delay-[500ms]' : 'opacity-0 -translate-y-4'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
