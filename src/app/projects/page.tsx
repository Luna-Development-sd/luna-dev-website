import Link from "next/link";
import Navbar from "@/components/Navbar";
import ADUAnimation from "@/components/ADUAnimationClient";
import CountUp from "@/components/CountUp";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Pacific Beach Modern ADU",
      location: "Pacific Beach, San Diego",
      year: "2024",
      description: "Modern 800 sq ft ADU with coastal design elements and sustainable features.",
      stats: { sqft: "800", bedrooms: "1", bathrooms: "1" }
    },
    {
      id: 2,
      title: "Coastal Duplex Development",
      location: "Ocean Beach, San Diego",
      year: "2023",
      description: "SB9 lot split resulting in two modern units with ocean views.",
      stats: { sqft: "1,200", bedrooms: "2", bathrooms: "2" }
    },
    {
      id: 3,
      title: "Mission Bay Infill Project",
      location: "Mission Bay, San Diego",
      year: "2023",
      description: "Three-unit development maximizing coastal zone potential.",
      stats: { sqft: "2,400", bedrooms: "6", bathrooms: "4" }
    },
    {
      id: 4,
      title: "La Jolla Village ADU",
      location: "La Jolla, San Diego",
      year: "2022",
      description: "Luxury ADU with premium finishes and architectural excellence.",
      stats: { sqft: "950", bedrooms: "2", bathrooms: "1.5" }
    },
    {
      id: 5,
      title: "Bird Rock Coastal Residence",
      location: "Bird Rock, San Diego",
      year: "2022",
      description: "Complete property transformation with main house renovation and new ADU.",
      stats: { sqft: "1,100", bedrooms: "2", bathrooms: "2" }
    },
    {
      id: 6,
      title: "Sunset Cliffs Development",
      location: "Sunset Cliffs, San Diego",
      year: "2021",
      description: "Two ADUs on a single coastal lot, navigating complex entitlements.",
      stats: { sqft: "1,600", bedrooms: "3", bathrooms: "3" }
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Hero with 3D Animation */}
      <section className="px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Our Projects
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A collection of transformative coastal developments across San Diego. Each project represents our commitment to excellence, community, and sustainable growth.
              </p>
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <ADUAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-8 py-20 bg-slate-50">
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

      {/* Projects Grid */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Placeholder for project image */}
                <div className="aspect-[4/3] bg-slate-200 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                    Project Image
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500">{project.location} · {project.year}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-6 pt-2 text-sm">
                    <div>
                      <span className="font-semibold text-slate-900">{project.stats.sqft}</span>
                      <span className="text-slate-500"> sq ft</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">{project.stats.bedrooms}</span>
                      <span className="text-slate-500"> bed</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">{project.stats.bathrooms}</span>
                      <span className="text-slate-500"> bath</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how we can transform your coastal property into something extraordinary.
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
