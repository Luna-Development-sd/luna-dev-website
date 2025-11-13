"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import MyCompanies from "@/components/MyCompanies";
import CountUp from "@/components/CountUp";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="home" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #175442 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.95] tracking-tight">
              Building the<br />
              <span className="bg-gradient-to-r from-[#175442] to-[#0f3d2f] bg-clip-text text-transparent">
                Future of <TypeWriter words={["San Diego", "Pacific Beach"]} />
              </span>
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Expert ADU development on the coast. We transform under-utilized coastal properties into modern, livable spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-[#175442] text-white text-lg font-medium hover:bg-[#0f3d2f] transition-all hover:scale-105 hover:shadow-xl"
              >
                Start your project
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-900 text-slate-900 text-lg font-medium hover:bg-slate-900 hover:text-white transition-all"
              >
                View our work
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <div>
              <CountUp end={50} suffix="+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">ADUs Developed</div>
            </div>
            <div>
              <CountUp end={15} suffix="+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Years Experience</div>
            </div>
            <div>
              <CountUp end={98} suffix="%" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Success Rate</div>
            </div>
            <div>
              <CountUp end={200} prefix="$" suffix="M+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Companies */}
      <MyCompanies />

      {/* Services */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-16">
            What we do
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group p-8 border-2 border-slate-200 hover:border-[#175442] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#175442] transition-colors">
                Entitlement mastery
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Navigate complex zoning, coastal regulations, and SB9 requirements with precision. Our expertise turns regulatory challenges into opportunities.
              </p>
            </div>

            <div className="group p-8 border-2 border-slate-200 hover:border-[#175442] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#175442] transition-colors">
                Coastal expertise
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Deep understanding of Pacific Beach and San Diego coastal properties. We know the neighborhoods, the challenges, and how to maximize value.
              </p>
            </div>

            <div className="group p-8 border-2 border-slate-200 hover:border-[#175442] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#175442] transition-colors">
                Thoughtful design
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Modern ADUs that fit their neighborhoods and elevate the community. Built to last, built to live in, built to matter.
              </p>
            </div>

            <div className="group p-8 border-2 border-slate-200 hover:border-[#175442] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#175442] transition-colors">
                Value creation
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Strategic development that maximizes long-term value for landowners, investors, and residents. Smart returns on intelligent projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 lg:px-8 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Let's build together
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Ready to transform your coastal property? Get in touch to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#175442] text-white font-medium hover:bg-[#0f3d2f] transition-colors text-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-16">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Email</div>
              <a
                href="mailto:sidney@lunadevelopment.com"
                className="text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors"
              >
                sidney@lunadevelopment.com
              </a>
            </div>

            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Phone</div>
              <a
                href="tel:+16195555862"
                className="text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors"
              >
                (619) 555-LUNA
              </a>
            </div>

            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Location</div>
              <p className="text-lg text-slate-700">
                San Diego, California<br />
                Pacific Beach & Coastal Properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} Luna Development. All rights reserved.</p>
          <p>San Diego, California</p>
        </div>
      </footer>
    </div>
  );
}
