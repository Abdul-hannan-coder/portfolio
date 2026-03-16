"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Automation Agency",
    description: "A high-end landing page for an AI automation firm, featuring complex 3D integrations and a custom design system.",
    tech: ["Next.js", "Three.js", "Tailwind"],
    link: "#",
    github: "#",
    year: "2026",
  },
  {
    title: "FinTech Dashboard",
    description: "Enterprise-grade financial dashboard with real-time data visualization and complex state management.",
    tech: ["React", "TypeScript", "Recharts"],
    link: "#",
    github: "#",
    year: "2025",
  },
  {
    title: "E-Commerce Experience",
    description: "A headless e-commerce storefront with instantaneous page transitions and a custom cart implementation.",
    tech: ["Next.js", "Shopify", "Framer Motion"],
    link: "#",
    github: "#",
    year: "2025",
  },
];

export default function ProjectGallery() {
  return (
    <section id="work" className="py-32 bg-background relative border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-xl text-muted-foreground font-mono">Proof of concept.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-[#1c1b1b] rounded-3xl p-8 border border-border/30 hover:border-primary/50 transition-colors flex flex-col justify-between h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-primary font-mono text-sm tracking-widest">{project.year}</span>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 bg-background rounded-full border border-border/50 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
