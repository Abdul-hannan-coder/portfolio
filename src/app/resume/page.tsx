import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../../portfolio.json";

export default function Resume() {
  const { timeline } = portfolioData;
  const workExperience = timeline.filter(item => item.type === "work");
  const education = timeline.filter(item => item.type === "education");

  // Extract unique skills
  const allSkills = Array.from(new Set(timeline.flatMap(item => item.skills))).slice(0, 6); // Take up to 6 skills to match layout

  // Map to arbitrary percentages for layout consistency
  const skillPercentages = [95, 92, 90, 88, 85, 80];

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header with Tabs Navigation */}
        <header className="flex justify-between items-center mb-16 mt-20 lg:mt-8">
          <Navigation />
          <div className="hidden md:flex items-center">
            <button className="primary-gradient-bg px-6 py-2 rounded-full text-on-primary font-label text-sm font-bold shadow-lg shadow-primary-container/10">
              Hire Me
            </button>
          </div>
        </header>

        {/* Canvas Area */}
        <section className="flex-1 pb-16 w-full">
          <div className="mb-20">
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4">
              The <span className="gold-gradient-text">Architectural</span> Ledger.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed">
              A chronicle of professional evolution, technical mastery, and the transformation of logic into digital artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">work</span>
                </div>
                <h2 className="font-headline text-3xl font-bold">Experience</h2>
              </div>
              <div className="space-y-12">
                {workExperience.map((work, index) => (
                  <div key={index} className="relative pl-8 border-l border-outline-variant/30 group">
                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-surface transition-colors ${index === 0 ? "bg-primary shadow-[0_0_12px_rgba(255,237,195,0.6)]" : "bg-outline-variant group-hover:bg-primary"}`}></div>
                    <div className="space-y-2">
                      <span className="font-label text-xs uppercase tracking-[0.2em] text-on-secondary-container">
                        {work.period}
                      </span>
                      <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <p className="font-label text-primary/80 text-sm mb-4">{work.location}</p>
                      <div className="text-on-surface-variant leading-relaxed text-sm space-y-2">
                        {work.description.map((desc, i) => (
                          <p key={i}>• {desc}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <h2 className="font-headline text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="bg-surface-container-low p-8 rounded-2xl ghost-border hover:bg-surface-container transition-all">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-on-secondary-container block mb-3">
                      {edu.period}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                      {edu.title}
                    </h3>
                    <p className="font-label text-primary/80 text-sm mb-4">{edu.location}</p>
                    <div className="text-on-surface-variant leading-relaxed text-sm space-y-2">
                      {edu.description.map((desc, i) => (
                        <p key={i}>• {desc}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] ghost-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-2">My Skills</h2>
                <p className="text-on-surface-variant font-label max-w-md">
                  The technical arsenal refined through years of continuous learning and rigorous project delivery.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold font-label uppercase">
                  Expertise
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {allSkills.map((skill, index) => {
                const percentage = skillPercentages[index] || 85;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="font-label font-bold text-on-surface line-clamp-1 pr-4" title={skill}>{skill}</span>
                      <span className="font-label text-xs text-primary">{percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full gold-gradient-bg shadow-[0_0_10px_rgba(255,237,195,0.3)] bg-primary" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
