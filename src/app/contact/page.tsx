"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ADUAnimation from "@/components/ADUAnimationClient";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-luna-beige">
      <Navbar currentPage="contact" />

      {/* Hero with 3D Animation */}
      <section className="px-6 lg:px-12 pt-40 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-luna-charcoal mb-12 leading-[1.05] tracking-tight">
            Let's Build Together
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light mb-8 max-w-4xl mx-auto">
            Have a project, partnership idea, or development opportunity you'd like to discuss?
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light mb-8 max-w-4xl mx-auto">
            We'd love to hear from you.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Please email all inquiries to{" "}
            <a
              href="mailto:lunadevelopmentsd@gmail.com"
              className="text-luna-green font-medium hover:text-luna-green-dark transition-colors"
            >
              lunadevelopmentsd@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Start Your Project
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-[#175442] focus:ring-1 focus:ring-[#175442] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-[#175442] focus:ring-1 focus:ring-[#175442] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-[#175442] focus:ring-1 focus:ring-[#175442] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-[#175442] focus:ring-1 focus:ring-[#175442] outline-none transition-colors bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="adu">ADU Development</option>
                    <option value="sb9">SB9 Lot Split</option>
                    <option value="infill">Coastal Infill</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-[#175442] focus:ring-1 focus:ring-[#175442] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#175442] text-white font-medium hover:bg-[#0f3d2f] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:lunadevelopmentsd@gmail.com"
                    className="text-xl font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    lunadevelopmentsd@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    Location
                  </div>
                  <p className="text-xl text-slate-700">
                    1606 Grand Ave
                    <br />
                    San Diego, CA 92109
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 aspect-video relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.0842599856874!2d-117.24992!3d32.79654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deab5c3c0a3fa5%3A0x5c4f3e5a8c3f3c3f!2s1606%20Grand%20Ave%2C%20San%20Diego%2C%20CA%2092109!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      {/* <section className="px-6 lg:px-8 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We work with landowners, investors, and visionaries across San Diego's coastal communities.
            From initial feasibility to final construction, we're your partner in creating exceptional coastal developments.
          </p>
        </div>
      </section> */}

      {/* Footer */}

      <div>
        <Footer />
      </div>

    </div>
  );
}
