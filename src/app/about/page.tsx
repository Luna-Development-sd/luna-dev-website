import Link from "next/link";
import Navbar from "@/components/Navbar";
import ADUAnimation from "@/components/ADUAnimationClient";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      {/* Hero with 3D Animation */}
      <section className="px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                About Luna Development
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Luna Development is a San Diego based real estate development company focused on transforming under-utilized coastal properties into vibrant, modern, highly livable communities.
              </p>
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <ADUAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-8 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Edge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We specialize in coastal zone development – especially Pacific Beach – where zoning, overlays, SB9, coastal rules and entitlement complexity can stop most projects before they start.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We lean into that challenge. This is where our edge is.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                What We Believe
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Great development comes from thoughtful design, community connection, and smart entitlement strategy. Our projects are built to last, built to fit their neighborhoods, and built to elevate the streets they live on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-16">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Source and Acquire
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Value-add coastal sites with untapped potential
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Navigate Complexity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zoning and entitlement expertise that turns barriers into opportunities
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Coordinate Excellence
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Architecture, due diligence & environmental review managed seamlessly
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-[#175442] text-white flex items-center justify-center font-bold text-xl mb-4">
                04
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Maximize Value
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Design and develop projects that create long-term value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 lg:px-8 py-24 bg-[#175442] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-300">
            To raise the standard of coastal infill development in San Diego — delivering beautiful, functional, community-oriented places that become part of the identity of the neighborhood they serve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Let's Build the Future of San Diego
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Whether you're a landowner, investor, architect, or future resident — we'd love to connect and explore what's possible together.
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
