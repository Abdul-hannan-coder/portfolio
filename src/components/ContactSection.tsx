"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-card rounded-[3rem] p-10 md:p-16 border border-border/50 shadow-2xl"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Build Something <span className="text-primary italic">Extraordinary.</span></h2>
            <p className="text-xl text-muted-foreground font-mono">Available for freelance opportunities and consultations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center border border-border/50 text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="font-mono text-lg">hello@ahannan.dev</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center border border-border/50 text-primary">
                    <MapPin size={20} />
                  </div>
                  <span className="font-mono text-lg">Worldwide / Remote</span>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-background border border-border/50 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-background border border-border/50 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full bg-background border border-border/50 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm placeholder:text-muted-foreground resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-[#f1c100] text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,237,195,0.15)] transition-shadow hover:shadow-[0_0_30px_rgba(255,237,195,0.3)]"
              >
                Send Message <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
