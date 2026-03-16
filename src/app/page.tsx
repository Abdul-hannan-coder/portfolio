import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../portfolio.json";

export default function Home() {
  const { personal, projects } = portfolioData;
  const displayFilters = projects.filters.categories.slice(0, 4);

  return (
    <main className="flex-1 flex flex-col">
      {/* Header with Navigation */}
      <header className="flex justify-between items-center mb-16 mt-8">
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="bg-surface-container-low rounded-xl p-6 lg:p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Frontend Engineering & <span className="text-primary italic">Automation</span>
            </h2>
            <p className="text-on-surface-variant font-label leading-relaxed">
              {personal.subtitle}
            </p>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </section>

      {/* Portfolio Content Section */}
      <section className="flex-1 bg-surface-container-low rounded-xl p-8 lg:p-12 overflow-hidden">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h3 className="font-headline text-2xl font-bold">{projects.title}</h3>
          <div className="flex flex-wrap gap-3">
            {displayFilters.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-1.5 rounded-full text-xs font-label transition-colors ${
                  index === 0
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-style Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.items.map((project) => (
            <article
              key={project.slug}
              className="project-card group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-outline-variant/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <Link href={`/projects/${project.slug}`}>
                  <img
                    alt={project.title}
                    className="project-image w-full h-full object-cover transition-transform duration-700"
                    src={project.image[0]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </Link>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <Link href={`/projects/${project.slug}`} className="hover:underline">
                    <h4 className="font-headline text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                  </Link>
                  <div className="flex gap-2 shrink-0 ml-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-lg">link</span>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant font-label mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-secondary-container text-on-secondary-container"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex justify-center items-center gap-2 py-2 mt-2 w-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant rounded-lg font-bold text-sm transition-colors"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom CTA Section */}
        <div className="mt-20 p-12 rounded-xl premium-gradient flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 text-on-primary">
            <h3 className="font-headline text-3xl font-bold mb-2">Have a project in mind?</h3>
            <p className="font-label opacity-80">Let's discuss how we can bring your vision to life.</p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-8 py-4 bg-surface text-primary font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            Start a Conversation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
