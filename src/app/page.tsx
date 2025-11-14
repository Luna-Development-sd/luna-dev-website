"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import MyCompanies from "@/components/MyCompanies";
import CountUp from "@/components/CountUp";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="home" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luna-beige">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #175442 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-40 text-center">
          <div className="animate-fade-in-up space-y-12">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-luna-charcoal mb-10 leading-[1.05] tracking-tight">
              Building the<br />
              <span className="text-luna-green">
                Future of Coastal Development
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Expert coastal infill development in San Diego. Transforming underutilized properties into high-value assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-5 bg-luna-green text-white text-lg font-medium hover:bg-luna-green-dark transition-all"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center px-10 py-5 border-2 border-luna-charcoal text-luna-charcoal text-lg font-medium hover:bg-luna-charcoal hover:text-white transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="px-6 lg:px-12 py-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div>
              <CountUp end={60} suffix="+" />
              <div className="text-xs text-slate-500 uppercase tracking-wider-xl font-semibold mt-3">Projects Completed</div>
            </div>
            <div>
              <CountUp end={9} suffix="+" />
              <div className="text-xs text-slate-500 uppercase tracking-wider-xl font-semibold mt-3">Years Experience</div>
            </div>
            <div>
              <CountUp end={100} prefix="$" suffix="M+" />
              <div className="text-xs text-slate-500 uppercase tracking-wider-xl font-semibold mt-3">Value Created</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Portfolio Introduction */}
      <section className="px-6 lg:px-12 pt-32 pb-12 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            Our Portfolio
          </div>
          <p className="text-2xl lg:text-4xl text-luna-charcoal leading-relaxed font-light max-w-5xl mb-20">
            We specialize in coastal zone development – especially Pacific Beach – where zoning, overlays, SB9, coastal rules and entitlement complexity can stop most projects before they start. We lean into that challenge. This is where our edge is.
          </p>
        </div>
      </section>


      <FeaturedProjects />

      {/* What We Do - Headline */}
      <section className="px-6 lg:px-12 lg:pt-24 pb-24 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            What We Do
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-luna-charcoal max-w-5xl leading-relaxed">
            Great development comes from thoughtful design, community connection, and smart entitlement strategy. Our projects are built to last, built to fit their neighborhoods, and built to elevate the streets they live on.
          </h2>
        </div>
      </section>

      {/* What We Do - Content */}
      <section className="px-6 lg:px-12 pb-32 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Image */}
            <div className="relative aspect-[4/5] bg-slate-200 overflow-hidden">
              <img
                src="/1606grand.png"
                alt="Luna Development Project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8 lg:pt-24">
              <div>
                <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                  Entitlement Mastery
                </h3>
                <p className="text-m text-slate-600 leading-relaxed">
                  Navigate complex zoning, coastal regulations, and SB9 requirements with precision. Our expertise turns regulatory challenges into opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                  Coastal Expertise
                </h3>
                <p className="text-m text-slate-600 leading-relaxed">
                  Deep understanding of Pacific Beach and San Diego coastal properties. We know the neighborhoods, the challenges, and how to maximize value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                  Thoughtful Design
                </h3>
                <p className="text-m text-slate-600 leading-relaxed">
                  Modern ADUs that fit their neighborhoods and elevate the community. Built to last, built to live in, built to matter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                  Value Creation
                </h3>
                <p className="text-m text-slate-600 leading-relaxed">
                  Strategic development that maximizes long-term value for landowners, investors, and residents. Smart returns on intelligent projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6 lg:px-12 lg:pt-24 pb-8 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            Our Mission
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-luna-charcoal max-w-5xl leading-relaxed mb-16">
            To raise the standard of coastal infill development in San Diego — delivering beautiful, functional, community-oriented places that become part of the identity of the neighborhood they serve.
          </h2>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32 bg-luna-beige">
        <div className="max-w-5xl mx-auto">
          {/* Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src="/adumock.png"
              alt="San Diego"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 lg:px-12 lg:py-32 pb-12 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-luna-charcoal mb-8 tracking-tight">
              Let’s Build the Future of San Diego
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you’re a landowner, investor, architect, or future resident — we’d love to connect and explore what’s possible together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-luna-green text-white font-medium hover:bg-luna-green-dark transition-colors text-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* <div className="grid lg:grid-cols-3 gap-16 mt-24">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider-xl font-semibold mb-3">Email</div>
              <a
                href="mailto:sidney@lunadevelopment.com"
                className="text-lg font-medium text-luna-charcoal hover:text-luna-green transition-colors"
              >
                sidney@lunadevelopment.com
              </a>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider-xl font-semibold mb-3">Phone</div>
              <a
                href="tel:+16195555862"
                className="text-lg font-medium text-luna-charcoal hover:text-luna-green transition-colors"
              >
                (619) 555-LUNA
              </a>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider-xl font-semibold mb-3">Location</div>
              <p className="text-lg text-slate-700">
                San Diego, California<br />
                Pacific Beach & Coastal Properties
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
