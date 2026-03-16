"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ring/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-mono tracking-widest uppercase mb-4 text-sm"
          >
            Digital Alchemist
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-foreground">
            Crafting <br />
            <span className="text-muted-foreground">Premium</span> <br />
            Experiences.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 font-mono leading-relaxed">
            I transcode visionary ideas into high-end, scalable digital products and web applications using modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-[#f1c100] text-primary-foreground font-semibold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,237,195,0.15)] transition-shadow hover:shadow-[0_0_30px_rgba(255,237,195,0.3)]"
            >
              View Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-surface-bright)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-full flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
