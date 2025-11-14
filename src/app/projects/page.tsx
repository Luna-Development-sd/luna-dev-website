import Link from "next/link";
import Navbar from "@/components/Navbar";
import CountUp from "@/components/CountUp";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "5055 Mary Lane",
      location: "Pacific Beach, San Diego",
      description: "Transformed a single-unit property into a 4-unit development through strategic entitlement and coastal zone expertise.",
      purchasePrice: "$962,000",
      constructionCost: "$700,000",
      estimatedValue: "$3,000,000",
      units: "1 → 4 units"
    },
    {
      id: 2,
      title: "870 Garnet Ave",
      location: "Pacific Beach, San Diego",
      description: "Major mixed-use development featuring 29 units with subterranean parking, navigating complex coastal regulations.",
      purchasePrice: "TBD",
      constructionCost: "In Planning",
      estimatedValue: "$20,000,000+",
      units: "29 units"
    },
    {
      id: 3,
      title: "2061 Garnet Ave",
      location: "Pacific Beach, San Diego",
      description: "11,000 sq ft development delivering 6 modern units in the heart of Pacific Beach.",
      purchasePrice: "TBD",
      constructionCost: "In Development",
      estimatedValue: "$8,200,000",
      units: "6 units"
    },
    {
      id: 4,
      title: "1606 Grand Ave",
      location: "Pacific Beach, San Diego",
      description: "Large-scale coastal development with 57 units, representing sophisticated entitlement strategy and execution.",
      purchasePrice: "TBD",
      constructionCost: "$15,000,000",
      estimatedValue: "$40,000,000",
      units: "57 units"
    },
    {
      id: 5,
      title: "1345 Hornblend",
      location: "Pacific Beach, San Diego",
      description: "14-unit infill project maximizing coastal zone potential through expert planning and design.",
      purchasePrice: "TBD",
      constructionCost: "In Planning",
      estimatedValue: "$9,000,000",
      units: "14 units"
    },
    {
      id: 6,
      title: "910 Diamond St",
      location: "Pacific Beach, San Diego",
      description: "Transformed a 3-unit property into a 10-unit development, unlocking significant value through strategic development.",
      purchasePrice: "TBD",
      constructionCost: "In Development",
      estimatedValue: "$7,500,000",
      units: "3 → 10 units"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Hero */}
      <section className="px-6 lg:px-8 pt-24 pb-16 bg-luna-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
            Our Projects
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A collection of transformative coastal developments across San Diego. Each project represents our commitment to excellence, community, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-8 py-20 bg-luna-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <div>
              <CountUp end={60} suffix="+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Projects Completed</div>
            </div>
            <div>
              <CountUp end={9} suffix="+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Years Experience</div>
            </div>
            <div>
              <CountUp end={100} prefix="$" suffix="M+" />
              <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-8 py-24 bg-luna-beige">
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
                    <p className="text-sm text-slate-500">{project.location}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Units:</span>
                      <span className="font-semibold text-slate-900">{project.units}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Purchase:</span>
                      <span className="font-semibold text-slate-900">{project.purchasePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Construction:</span>
                      <span className="font-semibold text-slate-900">{project.constructionCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Est. Value:</span>
                      <span className="font-semibold text-[#175442]">{project.estimatedValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
