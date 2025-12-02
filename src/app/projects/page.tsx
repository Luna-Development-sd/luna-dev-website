import Link from "next/link";
import Navbar from "@/components/Navbar";
import CountUp from "@/components/CountUp";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "The Mary",
      location: "San Diego, CA 92115",
      description: "Transformed a single-unit property into a 4-unit development through strategic entitlement and coastal zone expertise.",
      purchasePrice: "$962,000",
      constructionCost: "$700,000",
      estimatedValue: "$3,000,000",
      units: "1 → 4 units",
      image: "/5505mary.png"
    },
    {
      id: 2,
      title: "The Garnet",
      location: "Pacific Beach, San Diego, CA 92109",
      description: "Major mixed-use development featuring 29 units with subterranean parking, navigating complex coastal regulations.",
      purchasePrice: "$4,350,000",
      constructionCost: "$9,000,000",
      estimatedValue: "$20,000,000+",
      units: "29 units",
      image: "/870garnet.png"
    },
    {
      id: 3,
      title: "The Garnet",
      location: "Pacific Beach, San Diego, CA 92109",
      description: "11,000 sq ft development delivering 6 modern units in the heart of Pacific Beach.",
      purchasePrice: "$1,695,000",
      constructionCost: "$3,000,000",
      estimatedValue: "$8,200,000",
      units: "6 units",
      image: "/2061garnet.png"
    },
    {
      id: 4,
      title: "The Grand",
      location: "Pacific Beach, San Diego, CA 92109",
      description: "Large-scale coastal development with 57 units, representing sophisticated entitlement strategy and execution.",
      purchasePrice: "$5,500,000",
      constructionCost: "$15,000,000",
      estimatedValue: "$40,000,000",
      units: "57 units",
      image: "/1606grand.png"
    },
    {
      id: 5,
      title: "The Hornblend",
      location: "Pacific Beach, San Diego, CA 92109",
      description: "14-unit infill project maximizing coastal zone potential through expert planning and design.",
      purchasePrice: "$1,900,000",
      constructionCost: "$3,850,000",
      estimatedValue: "$9,000,000",
      units: "14 units",
      image: "/1345hornblend.png"
    },
    {
      id: 6,
      title: "The Diamond",
      location: "Pacific Beach, San Diego, CA 92109",
      description: "Transformed a 3-unit property into a 10-unit development, unlocking significant value through strategic development.",
      purchasePrice: "$2,100,000",
      constructionCost: "$1,700,000",
      estimatedValue: "$7,500,000",
      units: "3 → 10 units",
      image: "/910diamond.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Hero */}
      <section className="px-6 lg:px-12 pt-40 pb-32 bg-luna-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-luna-charcoal mb-12 leading-[1.05] tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A collection of transformative coastal developments across San Diego. Each project represents our commitment to excellence, community, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-12 py-24 bg-luna-beige">
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
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 py-32 bg-luna-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <div key={project.id} className="group">
                {/* Project image */}
                <div className="aspect-[4/3] bg-slate-200 mb-6 relative overflow-hidden rounded-lg">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400" />
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                        Project Image
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-luna-charcoal mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light">{project.location}</p>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-4 text-sm border-t border-slate-200">
                    <div className="flex justify-between pt-4">
                      <span className="text-slate-500 font-light">Units:</span>
                      <span className="font-semibold text-luna-charcoal">{project.units}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-light">Purchase:</span>
                      <span className="font-semibold text-luna-charcoal">{project.purchasePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-light">Construction:</span>
                      <span className="font-semibold text-luna-charcoal">{project.constructionCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-light">Est. Value:</span>
                      <span className="font-semibold text-luna-green">{project.estimatedValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
