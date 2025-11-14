import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Site Acquisition & Due Diligence",
      description: "Identifying strategic sites and conducting full zoning, environmental, and feasibility analysis."
    },
    {
      number: "02",
      title: "Entitlement & Planning",
      description: "Navigating city approvals, coastal overlays, and complex regulatory pathways to unlock maximum development potential."
    },
    {
      number: "03",
      title: "Design & Development Management",
      description: "Leading architecture, engineering, and construction teams to deliver elevated coastal projects with precision and intention."
    },
    {
      number: "04",
      title: "Investment & Partnerships",
      description: "Structuring and managing joint ventures, funds, and investor relationships for long-term value creation."
    },
    {
      number: "05",
      title: "Property Management & Operations",
      description: "Professional management of stabilized assets to protect value and ensure exceptional tenant experience."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="services" />

      {/* Hero */}
      <section className="px-6 lg:px-8 pt-24 pb-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Luna Development, we specialize in coastal infill development, transforming underutilized properties into high-impact, high-value assets. We manage the entire process—from vision to completion—with a focus on thoughtful design, community alignment, and long-term performance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 py-24 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 border-2 border-slate-200 hover:border-[#175442] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-sm font-bold text-[#175442] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {service.number}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#175442] transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-8 py-24 bg-luna-beige">
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
      <section className="px-6 lg:px-8 py-24 bg-luna-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Let’s Build the Future of San Diego
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Whether you’re a landowner, investor, architect, or future resident — we’d love to connect and explore what’s possible together.
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

      <Footer />
    </div>
  );
}
