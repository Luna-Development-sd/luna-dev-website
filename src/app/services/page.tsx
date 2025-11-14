import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Site Acquisition & Due Diligence",
      description: "Identifying strategic sites and conducting full zoning, environmental, and feasibility analysis."
    },
    {
      title: "Entitlement & Planning",
      description: "Navigating city approvals, coastal overlays, and complex regulatory pathways to unlock maximum development potential."
    },
    {
      title: "Design & Development Management",
      description: "Leading architecture, engineering, and construction teams to deliver elevated coastal projects with precision and intention."
    },
    {
      title: "Investment & Partnerships",
      description: "Structuring and managing joint ventures, funds, and investor relationships for long-term value creation."
    },
    {
      title: "Property Management & Operations",
      description: "Professional management of stabilized assets to protect value and ensure exceptional tenant experience."
    }
  ];

  return (
    <div className="min-h-screen bg-luna-beige">
      <Navbar currentPage="services" />

      {/* Hero */}
      <section className="px-6 lg:px-12 pt-40 pb-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-luna-charcoal mb-12 leading-[1.05] tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            At Luna Development, we specialize in coastal infill development, transforming underutilized properties into high-impact, high-value assets. We manage the entire process—from vision to completion—with a focus on thoughtful design, community alignment, and long-term performance.
          </p>
        </div>
      </section>

      {/* Image 1 */}
      <section className="px-6 lg:px-12 py-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="/design.png"
              alt="Luna Development Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-12 py-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-luna-charcoal mb-16 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-luna-green rounded-lg p-8 text-white flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl md:col-span-1 lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''
                  }`}
              >
                {/* Icon placeholder */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  {index === 0 && (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image 2 */}
      <section className="px-6 lg:px-12 py-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="/mockdesign.png"
              alt="Luna Development Coastal Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 lg:px-12 py-20 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-luna-charcoal mb-16 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-luna-green text-5xl font-bold mb-4">01</div>
              <p className="text-luna-charcoal text-lg leading-relaxed">
                Source and acquire value-add coastal sites
              </p>
            </div>
            <div className="text-center">
              <div className="text-luna-green text-5xl font-bold mb-4">02</div>
              <p className="text-luna-charcoal text-lg leading-relaxed">
                Navigate zoning + entitlement complexity
              </p>
            </div>
            <div className="text-center">
              <div className="text-luna-green text-5xl font-bold mb-4">03</div>
              <p className="text-luna-charcoal text-lg leading-relaxed">
                Coordinate architecture, due diligence & environmental review
              </p>
            </div>
            <div className="text-center">
              <div className="text-luna-green text-5xl font-bold mb-4">04</div>
              <p className="text-luna-charcoal text-lg leading-relaxed">
                Design and develop projects that maximize long-term value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 border-2 border-luna-green text-luna-green font-semibold hover:bg-luna-green hover:text-white transition-colors text-lg uppercase tracking-wider"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
