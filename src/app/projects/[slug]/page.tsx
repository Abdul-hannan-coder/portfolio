import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InteractiveGallery from "@/components/InteractiveGallery";
import portfolioData from "@/lib/portfolio-data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = [
    ...portfolioData.projects.items,
    ...(portfolioData.projects.archivedItems || []),
  ];
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = [
    ...portfolioData.projects.items,
    ...(portfolioData.projects.archivedItems || []),
  ];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.cardDescription ?? project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const allProjects = [
    ...portfolioData.projects.items,
    ...(portfolioData.projects.archivedItems || []),
  ];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Helper to split objective string into a smart title and body description
  const parseObjective = (text: string) => {
    const words = text.split(" ");
    let title = words.slice(0, 2).join(" ");
    
    // Clean trailing commas/prepositions from the short title if present
    if (title.endsWith(",") || title.endsWith(":") || title.toLowerCase() === "to" || title.toLowerCase() === "and") {
      title = words.slice(0, 3).join(" ");
    }
    
    return {
      title: title.replace(/[:,\s]+$/, ""),
      body: text
    };
  };

  return (
    <main className="flex-1 flex flex-col min-w-0 font-sans">
      {/* Stitch Layout Custom CSS Injected Safely */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glow-yellow { box-shadow: 0 0 40px -10px rgba(255, 209, 101, 0.15); }
        .gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: 1fr; } }
        .tech-tag {
            background: rgba(255, 209, 101, 0.02);
            border: 1px solid rgba(255, 209, 101, 0.12);
            transition: all 0.3s ease;
        }
        .tech-tag:hover {
            border-color: #ffd165;
            background: rgba(255, 209, 101, 0.08);
            color: #ffd165;
        }
      `}} />

      <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
        {/* Header with Navigation */}
        <header className="flex justify-between items-center mb-12 mt-20 lg:mt-8">
          <Navigation />
        </header>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-label text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            Back to Projects
          </Link>
        </div>

        {/* SECTION 1: Intro Section (Bento Card Hero Layout) */}
        <section className="bg-surface-container-low rounded-2xl p-6 md:p-8 lg:p-10 mb-10 border border-outline-variant/15 shadow-md relative overflow-hidden">
          {/* Abstract glowing background element for visual balance */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-primary/2 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Live Project
            </div>
            
            <div className="space-y-2">
              <h1 className="font-headline text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold leading-tight tracking-tight text-on-surface">
                {project.title.split(" - ")[0]}
              </h1>
              {project.title.split(" - ")[1] && (
                <p className="font-headline text-lg md:text-xl font-medium text-primary tracking-wide">
                  {project.title.split(" - ")[1]}
                </p>
              )}
            </div>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl font-body">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] transition-all shadow-md shadow-primary/15 cursor-pointer text-xs"
                >
                  Visit Live Site
                  <span className="material-symbols-outlined text-sm">launch</span>
                </a>
              )}
              {project.video && (
                <a
                  href="#demo-video"
                  className="border border-outline-variant/30 bg-surface-container-high px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-surface-variant transition-colors text-xs"
                >
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 2: Detailed Overview & Sidebar Details Card */}
        <section className="py-12 mb-12 border-y border-outline-variant/10">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Left Detailed Overview */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
                <h2 className="font-headline text-xl md:text-2xl font-bold">Detailed Overview</h2>
              </div>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
                {project.detailedDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Sidebar Details */}
            <div className="space-y-6 w-full">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15 shadow-sm sticky top-24">
                <h3 className="font-label text-xs text-primary font-bold uppercase tracking-[0.15em] mb-6 pb-3 border-b border-outline-variant/15">
                  Project Details
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-on-surface-variant/50 text-[10px] font-semibold uppercase tracking-wider">
                      Client
                    </p>
                    <p className="font-bold text-sm md:text-base text-on-surface">
                      {project.client?.name || "Private Client"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-on-surface-variant/50 text-[10px] font-semibold uppercase tracking-wider">
                      Duration
                    </p>
                    <p className="font-bold text-sm md:text-base text-on-surface">
                      {project.duration || "Live Implementation"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-on-surface-variant/50 text-[10px] font-semibold uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag px-2.5 py-1 rounded text-[11px] font-semibold text-primary/95 font-label"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Key Objectives Section */}
        {project.objectives && project.objectives.length > 0 && (
          <section className="py-12 mb-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary text-xl">target</span>
              <h2 className="font-headline text-xl md:text-2xl font-bold">Key Objectives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.objectives.map((objective, i) => {
                const card = parseObjective(objective);
                return (
                  <div
                    key={i}
                    className="bg-surface-container border border-outline-variant/15 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group flex flex-col h-full hover:shadow-md"
                  >
                    <span
                      className="material-symbols-outlined text-primary mb-4 text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <h4 className="font-bold font-headline text-base md:text-lg mb-2 text-on-surface">
                      {card.title}
                    </h4>
                    <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 4: Demo Video Block (Anchor enabled for header buttons) */}
        {project.video && (
          <section id="demo-video" className="py-12 mb-12 border-t border-outline-variant/10">
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
              <h2 className="font-headline text-xl md:text-2xl font-bold">Demo Video</h2>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/15 shadow-sm max-w-4xl mx-auto">
              {project.video.startsWith("<") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: project.video }}
                  className="w-full rounded-xl overflow-hidden shadow-lg border border-outline-variant/10 [&>div]:!aspect-video [&>div]:!height-auto [&_iframe]:!aspect-video [&_iframe]:!height-auto [&_iframe]:!width-full"
                />
              ) : (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-outline-variant/10 bg-surface-container-lowest">
                  <iframe
                    src={project.video}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                </div>
              )}
            </div>
          </section>
        )}

        {/* SECTION 5: Project Gallery Section */}
        {project.image && project.image.length > 0 && (
          <section className="py-12 mb-12 border-t border-outline-variant/10">
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary text-xl">photo_library</span>
              <h2 className="font-headline text-xl md:text-2xl font-bold">Project Gallery</h2>
            </div>
            <InteractiveGallery images={project.image} projectTitle={project.title} />
          </section>
        )}

        {/* SECTION 6: Testimonial Quote Block */}
        {project.client?.feedback && (
          <section className="py-16 max-w-4xl mx-auto text-center relative overflow-hidden mb-12 border-t border-outline-variant/10">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span
                className="material-symbols-outlined text-[300px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-label text-xs text-primary tracking-[0.3em] uppercase font-bold">
                Testimonial
              </h2>
              <blockquote className="font-headline text-xl md:text-2xl lg:text-3xl leading-snug italic text-on-surface font-semibold max-w-3xl mx-auto">
                "{project.client.feedback}"
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-0.5 bg-primary rounded-full"></div>
                <p className="font-bold font-headline text-base">Client Team</p>
                <p className="text-on-surface-variant/60 text-[10px] font-bold tracking-wider uppercase font-label">
                  {project.client.name}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: Premium Call To Action (CTA) Section */}
        <section className="py-12">
          <div className="bg-primary rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden group shadow-2xl shadow-primary/10">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[200px] -rotate-12 transition-transform group-hover:rotate-0 duration-1000 text-on-primary">
                rocket_launch
              </span>
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="font-headline text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-on-primary leading-tight">
                  Ready to scale your leads?
                </h2>
                <p className="text-on-primary/80 font-body text-sm md:text-base max-w-md leading-relaxed">
                  Let's discuss how we can bring your vision to life through high-performance AI automation and bespoke funnel design.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="/contact"
                  className="bg-on-primary text-primary px-10 py-4.5 rounded-2xl font-bold flex items-center gap-2.5 hover:scale-105 transition-all shadow-xl hover:shadow-2xl text-xs"
                >
                  Start a Conversation
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
