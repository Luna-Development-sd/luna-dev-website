import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      {/* Hero */}
      <section className="px-6 lg:px-12 pt-40 pb-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-luna-charcoal mb-12 leading-[1.05] tracking-tight">
            About Luna Development
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Luna Development is a San Diego based real estate development company focused on transforming under-utilized coastal properties into vibrant, modern, highly livable communities.
          </p>
        </div>
      </section>

      {/* Image 1 */}
      <section className="px-6 lg:px-12 py-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="/1345hornblend.png"
              alt="Luna Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Edge */}
      <section className="px-6 lg:px-12 lg:py-32 bg-luna-beige">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            Our Edge
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-luna-charcoal mb-8 leading-relaxed">
            We specialize in coastal zone development – especially Pacific Beach – where zoning, overlays, SB9, coastal rules and entitlement complexity can stop most projects before they start.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            We lean into that challenge. This is where our edge is.
          </p>
        </div>
      </section>

      {/* Image 2 */}
      <section className="px-6 lg:px-12 py-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="/adumock2.png"
              alt="Luna Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="px-6 lg:px-12 lg:py-32 py-16 bg-luna-beige">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            What We Believe
          </div>
          <p className="text-xl pb-12 lg:text-4xl font-light text-luna-charcoal leading-relaxed">
            Great development comes from thoughtful design, community connection, and smart entitlement strategy. Our projects are built to last, built to fit their neighborhoods, and built to elevate the streets they live on.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 lg:px-12 lg:py-32 pb-12 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            What We Do
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-luna-charcoal max-w-5xl leading-relaxed mb-20">
            From acquisition to delivery, we manage every aspect of coastal infill development with precision and purpose.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            <div>
              <div className="text-sm font-semibold text-luna-green mb-4">01</div>
              <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                Source and Acquire
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Value-add coastal sites with untapped potential
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-luna-green mb-4">02</div>
              <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                Navigate Complexity
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Zoning and entitlement expertise that turns barriers into opportunities
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-luna-green mb-4">03</div>
              <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                Coordinate Excellence
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Architecture, due diligence & environmental review managed seamlessly
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-luna-green mb-4">04</div>
              <h3 className="text-xl font-semibold text-luna-charcoal mb-4">
                Maximize Value
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Design and develop projects that create long-term value
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* Mission */}
      <section className="px-6 lg:px-12 lg:pb-32 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-luna-green uppercase tracking-wider-xl font-semibold mb-8">
            Our Mission
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-luna-charcoal max-w-5xl leading-relaxed">
            To raise the standard of coastal infill development in San Diego — delivering beautiful, functional, community-oriented places that become part of the identity of the neighborhood they serve.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-luna-charcoal mb-8 tracking-tight">
              Let's Build the Future of San Diego
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you're a landowner, investor, architect, or future resident — we'd love to connect and explore what's possible together.
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
