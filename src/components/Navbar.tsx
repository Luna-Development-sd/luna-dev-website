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
      ? "text-sm font-medium text-luna-charcoal uppercase tracking-wider-xl"
      : "text-sm font-medium text-slate-500 hover:text-luna-charcoal transition-colors uppercase tracking-wider-xl";

  return (
    <nav className="sticky top-0 w-full bg-white/98 backdrop-blur-sm border-b border-luna-sand z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-luna-charcoal tracking-tight">
          LUNA DEVELOPMENT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
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
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex px-8 py-3 bg-luna-green text-white text-sm font-medium hover:bg-luna-green-dark transition-colors uppercase tracking-wider-xl"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-luna-charcoal hover:text-luna-green"
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
        className={`fixed inset-0 w-screen h-screen bg-luna-beige z-[100] md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-luna-charcoal hover:text-luna-green"
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
              currentPage === "home" ? "text-luna-charcoal" : "text-slate-500 hover:text-luna-charcoal"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-4'} ${
              currentPage === "about" ? "text-luna-charcoal" : "text-slate-500 hover:text-luna-charcoal"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-4'} ${
              currentPage === "services" ? "text-luna-charcoal" : "text-slate-500 hover:text-luna-charcoal"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`text-3xl font-medium whitespace-nowrap transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 -translate-y-4'} ${
              currentPage === "projects" ? "text-luna-charcoal" : "text-slate-500 hover:text-luna-charcoal"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`mt-8 px-8 py-4 bg-luna-green text-white text-xl font-medium hover:bg-luna-green-dark transition-all duration-500 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 -translate-y-4'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
