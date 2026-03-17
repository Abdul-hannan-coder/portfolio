import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../../portfolio.json";

export default function About() {
  const { about, personal, projects } = portfolioData;
  const testimonials = projects.items.filter((item: any) => item.client && item.client.feedback).slice(0, 2);

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header with Navigation */}
        <header className="flex justify-between items-center mb-16 mt-8">
          <Navigation />
        </header>

        {/* Bio Section: The Editorial Alchemist Style */}
        <section className="mb-24 relative">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight lg:leading-none uppercase break-words">
                {about.title} <span className="gold-gradient-text">{about.highlightedTitle}</span>.
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
          <section className="mb-24">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-4 text-right">
              <span className="h-px flex-1 bg-outline-variant/20"></span>
              Client Feedback
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="relative bg-surface-container-lowest p-6 md:p-10 rounded-2xl editorial-shadow overflow-hidden flex flex-col justify-between group">
                  <span className="absolute top-2 left-4 md:top-4 md:left-6 text-8xl md:text-9xl font-serif text-primary/5 select-none transition-transform group-hover:scale-110 group-hover:text-primary/10">“</span>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <p className="font-body text-lg text-on-surface italic mb-8 flex-1">
                      "{testimonial.client.feedback}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <h5 className="font-headline font-bold text-on-surface line-clamp-1">{testimonial.client.name.split('(')[0].trim()}</h5>
                        <p className="font-label text-xs text-on-surface-variant line-clamp-1">
                          {testimonial.client.name.includes('(') ? testimonial.client.name.split('(')[1].replace(')', '') : "Client"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}
