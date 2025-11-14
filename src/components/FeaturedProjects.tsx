"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Black Sands Inn",
    location: "Shelter Cove, CA",
    status: "Acquired August 2022",
    image: "/placeholder-project-1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "870 Garnet Ave",
    location: "Pacific Beach, San Diego",
    status: "In Development",
    image: "/placeholder-project-2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "5055 Mary Lane",
    location: "Pacific Beach, San Diego",
    status: "Completed 2024",
    image: "/placeholder-project-3.jpg", // Replace with actual image path
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="px-6 lg:px-12 pb-32 bg-luna-beige">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="min-w-full">
                <Link href="/projects" className="group block">
                  <div className="relative overflow-hidden bg-white">
                    {/* Image */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-slate-400 text-2xl">Project Image</span>
                      </div>
                      <div className="absolute inset-0 bg-luna-charcoal opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luna-charcoal/90 to-transparent p-8 lg:p-12">
                        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-3">
                          {project.name}
                        </h3>
                        <p className="text-lg lg:text-xl text-white/90 mb-2">
                          {project.location}
                        </p>
                        <p className="text-xs lg:text-sm text-white/70 uppercase tracking-wider-xl font-semibold">
                          {project.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-luna-green"
                    : "w-2 bg-luna-sand hover:bg-luna-green/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-lg font-medium text-luna-charcoal hover:text-luna-green transition-colors group"
          >
            View All Projects
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
