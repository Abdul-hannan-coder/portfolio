"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../portfolio.json";
import { useState } from "react";

export default function Home() {
  const { personal, projects } = portfolioData;
  const displayFilters = ["All Projects", "GoHighLevel", "n8n", "SaaS", "AI"];
  const [activeFilter, setActiveFilter] = useState(displayFilters[0]);

  const filteredProjects = activeFilter === "All Projects" 
    ? projects.items 
    : projects.items.filter(project => {
        const filterStr = activeFilter.toLowerCase();
        return (
           project.category.toLowerCase().includes(filterStr) || 
           project.tags.some(tag => tag.toLowerCase().includes(filterStr))
        );
      });

  return (
    <main className="flex-1 flex flex-col">
      {/* Header with Navigation */}
      <header className="flex justify-between items-center mb-8 lg:mb-16 mt-20 lg:mt-8">
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
            {displayFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-label transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Project List */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="project-card group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row border border-transparent hover:border-outline-variant/30 transition-all duration-500"
            >
              <div className="w-full md:w-[45%] lg:w-2/5 shrink-0 aspect-video md:aspect-auto relative overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 block w-full h-full">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={project.title}
                    className="project-image object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    src={project.image[0] || "/profile-nano.png"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none"></div>
                </Link>
              </div>
              <div className="p-6 lg:p-10 flex flex-col flex-1 justify-center relative">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <Link href={`/projects/${project.slug}`} className="hover:underline flex-1">
                    <h4 className="font-headline text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h4>
                  </Link>
                  <div className="flex gap-2 shrink-0">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">link</span>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-base text-on-surface-variant font-label mb-8 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-secondary-container text-on-secondary-container"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex justify-center items-center gap-2 px-6 py-3 w-full sm:w-auto bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant rounded-xl font-bold text-sm transition-colors"
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
        <div className="mt-20 p-8 md:p-12 rounded-xl premium-gradient flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 text-on-primary text-center md:text-left">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2 break-words">Have a project in mind?</h3>
            <p className="font-label opacity-80 text-sm md:text-base">Let's discuss how we can bring your vision to life.</p>
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
