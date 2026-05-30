import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ShinyText } from "@/components/ui/shiny-text";
import portfolioData from "@/lib/portfolio-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Abdul Hannan, my professional experience, skills, and the journey of building intelligent automation systems.",
};

export default function About() {
  const { about, personal, testimonials } = portfolioData;

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header with Navigation */}
        <header className="flex justify-between items-center mb-16 mt-20 lg:mt-8">
          <Navigation />
        </header>

        {/* Bio Section: The Editorial Alchemist Style */}
        <section className="mb-24 relative">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight lg:leading-none uppercase break-words">
                {about.title} <ShinyText text={about.highlightedTitle} />.
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-body">
                {about.paragraphs.map((para: string, index: number) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:mt-12">
              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary/30 editorial-shadow">
                <span className="font-label text-xs uppercase tracking-widest text-on-secondary-container mb-4 block">
                  Current Status
                </span>
                <p className="font-body text-on-surface italic">
                  "{personal.tagline}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Doing: Bento Grid */}
        <section className="mb-24">
          <h3 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
            What I'm Doing
            <span className="h-px flex-1 bg-outline-variant/20"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  palette
                </span>
              </div>
              <h4 className="font-headline text-xl font-semibold mb-3">Frontend Development</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Building scalable and high-performance web applications using modern frameworks like Next.js and React.
              </p>
            </div>
            {/* Automation */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  precision_manufacturing
                </span>
              </div>
              <h4 className="font-headline text-xl font-semibold mb-3">Business Automation</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Automating workflows and marketing funnels using tools like Gohighlevel, N8N, Make, and Zapier.
              </p>
            </div>
            {/* SAAS */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  cloud
                </span>
              </div>
              <h4 className="font-headline text-xl font-semibold mb-3">Cloud & SaaS</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Deploying and maintaining software solutions in robust cloud environments including AWS, Vercel, and Docker.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <div className="mb-24">
            <Testimonials testimonials={testimonials} />
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}
