import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Entitlement Mastery",
      description: "Navigate complex zoning, coastal regulations, and SB9 requirements with precision. Our expertise turns regulatory challenges into opportunities.",
      details: [
        "Zoning analysis and compliance",
        "Coastal Commission navigation",
        "SB9 lot split expertise",
        "Entitlement strategy and execution"
      ]
    },
    {
      number: "02",
      title: "Coastal Expertise",
      description: "Deep understanding of Pacific Beach and San Diego coastal properties. We know the neighborhoods, the challenges, and how to maximize value.",
      details: [
        "Pacific Beach specialization",
        "Coastal property assessment",
        "Market analysis and positioning",
        "Community integration strategy"
      ]
    },
    {
      number: "03",
      title: "Thoughtful Design",
      description: "Modern ADUs that fit their neighborhoods and elevate the community. Built to last, built to live in, built to matter.",
      details: [
        "Architecture coordination",
        "Sustainable design integration",
        "Neighborhood-appropriate aesthetics",
        "Quality construction oversight"
      ]
    },
    {
      number: "04",
      title: "Value Creation",
      description: "Strategic development that maximizes long-term value for landowners, investors, and residents. Smart returns on intelligent projects.",
      details: [
        "Financial analysis and modeling",
        "Investment strategy development",
        "Property value optimization",
        "Long-term asset management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="services" />

      {/* Hero */}
      <section className="px-6 lg:px-8 pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ADU development services from entitlement to completion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#175442] text-white font-bold text-2xl mb-6">
                    {service.number}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="bg-slate-50 p-8 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    What We Provide
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-[#175442] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-8 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-16 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto rounded-full">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Discovery
              </h3>
              <p className="text-slate-600">
                Initial consultation and property assessment
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto rounded-full">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Planning
              </h3>
              <p className="text-slate-600">
                Entitlement strategy and design development
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto rounded-full">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Execution
              </h3>
              <p className="text-slate-600">
                Permitting, construction, and quality oversight
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto rounded-full">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Delivery
              </h3>
              <p className="text-slate-600">
                Final walkthrough and project completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how we can bring your coastal development vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#175442] text-white font-medium hover:bg-[#0f3d2f] transition-colors text-lg"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
