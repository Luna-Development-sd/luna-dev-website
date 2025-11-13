import Link from "next/link";

interface Company {
  name: string;
  logo: string;
  url: string;
}

const companies: Company[] = [
  {
    name: "Backyard Management",
    logo: "/backyardmngmt.png",
    url: "https://www.backyardmgmt.com/",
  },
  // Add more companies here as needed
];

export default function MyCompanies() {
  return (
    <section className="px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl lg:text-4xl font-bold text-center mb-16 tracking-wider"
          style={{ color: "#175442" }}
        >
          OUR COMPANIES
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 opacity-90 hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
