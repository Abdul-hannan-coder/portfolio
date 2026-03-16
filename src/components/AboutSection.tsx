"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "UI/UX Design",
  "Figma",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              The <span className="text-primary italic">Architecture</span> <br />
              Behind the Art.
            </h2>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed mb-6">
              I specialize in bridging the gap between rigorous engineering and high-end design. With a focus on performance, accessibility, and pixel-perfect execution, I build web experiences that leave a lasting impression.
            </p>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Based at the intersection of logic and creativity, I craft digital products that do more than function—they inspire.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-card rounded-[2rem] border border-border/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
            <h3 className="text-2xl font-semibold mb-8">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="px-4 py-2 bg-accent text-accent-foreground font-mono text-sm rounded-full border border-border/30 hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
