import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../../../portfolio.json";
import { notFound } from "next/navigation";

// Generate static params for all projects
export function generateStaticParams() {
  return portfolioData.projects.items.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = portfolioData.projects.items.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Header with Navigation */}
      <header className="flex justify-between items-center mb-16 mt-20 lg:mt-8">
        <Navigation />
      </header>

      {/* Project Hero / Details Section */}
      <section className="bg-surface-container-low rounded-xl p-8 lg:p-12 mb-8 relative overflow-hidden flex flex-col gap-8">
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div className="flex-1 max-w-3xl">
            <div className="flex gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-label">
                {project.date}
              </span>
            </div>
            
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-on-surface-variant font-label leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Visit Live Site
                  <span className="material-symbols-outlined">launch</span>
                </Link>
              )}
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
            {project.client && (
              <>
                <div>
                  <h3 className="text-sm font-label text-on-surface-variant mb-1 uppercase tracking-wider">Client</h3>
                  <p className="font-bold">{project.client?.name}</p>
                </div>
                {project.client?.feedback && (
                  <div>
                    <h3 className="text-sm font-label text-on-surface-variant mb-2 uppercase tracking-wider">Feedback</h3>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute -top-2 -left-3 text-4xl text-primary/20">format_quote</span>
                      <p className="italic text-on-surface relative z-10 text-sm">"{project.client?.feedback}"</p>
                    </div>
                  </div>
                )}
              </>
            )}
            {project.domain && (
              <div>
                <h3 className="text-sm font-label text-on-surface-variant mb-1 uppercase tracking-wider">Domain</h3>
                <p className="font-bold">{project.domain}</p>
              </div>
            )}
            {project.duration && (
              <div>
                <h3 className="text-sm font-label text-on-surface-variant mb-1 uppercase tracking-wider">Duration</h3>
                <p className="font-bold">{project.duration}</p>
              </div>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-sm font-label text-on-surface-variant mb-2 uppercase tracking-wider">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Abstract background element */}
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Main Content (Objectives & Details) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 lg:p-12">
            {project.detailedDescription && (
              <>
                <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Detailed Overview
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-8 whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </>
            )}

            {project.objectives && project.objectives.length > 0 && (
              <>
                <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2 mt-8">
                  <span className="material-symbols-outlined text-primary">target</span>
                  Key Objectives
                </h3>
                <ul className="space-y-4">
                  {project.objectives.map((objective, i) => (
                    <li key={i} className="flex gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Video Section if available */}
          {project.video && (
             <div className="bg-surface-container-low rounded-xl p-8 overflow-hidden">
                <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">play_circle</span>
                  Demo Video
                </h2>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30">
                  <iframe 
                    className="w-full h-full" 
                    src={project.video} 
                    title={`${project.title} Demo`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
             </div>
          )}
        </div>

        {/* Image Gallery */}
        {project.image && project.image.length > 0 && (
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">photo_library</span>
                Gallery
              </h3>
              <div className="flex flex-col gap-4">
                {project.image.map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-colors cursor-pointer group rounded-xl">
                    <img 
                      src={img} 
                      alt={`Gallery preview ${i+1}`} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Modern CTA */}
      <section className="mt-8 mb-16 p-8 md:p-12 rounded-xl premium-gradient flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 text-on-primary text-center md:text-left">
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2 break-words">Want to build something similar?</h3>
          <p className="font-label opacity-80 text-sm md:text-base">Let's discuss how we can bring your vision to life.</p>
        </div>
        <Link
          href="/contact"
          className="relative z-10 px-8 py-4 bg-surface text-primary font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl"
        >
          Start a Conversation
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
