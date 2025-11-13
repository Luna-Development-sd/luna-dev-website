"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ADUAnimation from "@/components/ADUAnimationClient";

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
    <div className="min-h-screen bg-white">
      <Navbar currentPage="contact" />

      {/* Hero with 3D Animation */}
      <section className="px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Let's Build Together
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Have a project, partnership idea, or development opportunity you'd like to discuss?
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                We'd love to hear from you.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Please email all inquiries to{" "}
                <a
                  href="mailto:sidney@lunadevelopment.com"
                  className="text-[#175442] font-medium hover:text-[#0f3d2f] transition-colors"
                >
                  sidney@lunadevelopment.com
                </a>
              </p>
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <ADUAnimation />
            </div>
          </div>
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
                    href="mailto:sidney@lunadevelopment.com"
                    className="text-xl font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    sidney@lunadevelopment.com
                  </a>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+16195555862"
                    className="text-xl font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    (619) 555-LUNA
                  </a>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    Location
                  </div>
                  <p className="text-xl text-slate-700">
                    San Diego, California
                    <br />
                    Pacific Beach & Coastal Properties
                  </p>
                </div>

                <div className="pt-8">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">
                    Office Hours
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                  Map Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 lg:px-8 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We work with landowners, investors, and visionaries across San Diego's coastal communities.
            From initial feasibility to final construction, we're your partner in creating exceptional coastal developments.
          </p>
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
