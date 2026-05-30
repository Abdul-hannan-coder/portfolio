
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Phone, AudioLines, Code2 } from "lucide-react";
import { ShinyText } from "@/components/ui/shiny-text";
import {
  SiNextdotjs,
  SiReact,
  SiN8N,
  SiMake,
  SiZapier,
  SiTwilio,
  SiShopify,
  SiWordpress,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiVercel,
} from "react-icons/si";

const ICON_SIZE = 24;

// Official brand icons (react-icons / Simple Icons) with their brand colors.
// Next.js & Vercel are black-on-light brands, so render white on our dark surface.
// Vapi, Retell.ai and GoHighLevel have no Simple Icons glyph, so use tasteful fallbacks.
const skillMap: Record<string, ReactNode> = {
  "Next.js": <SiNextdotjs size={ICON_SIZE} color="#ffffff" />,
  "React": <SiReact size={ICON_SIZE} color="#61DAFB" />,
  "Gohighlevel Automation": (
    <span className="font-headline text-base font-extrabold text-[#2BAAFF]">
      HL
    </span>
  ),
  "n8n": <SiN8N size={ICON_SIZE} color="#EA4B71" />,
  "Make": <SiMake size={ICON_SIZE} color="#6D00CC" />,
  "Zapier": <SiZapier size={ICON_SIZE} color="#FF4F00" />,
  "Vapi": <AudioLines size={ICON_SIZE} className="text-[#5D5FEF]" />,
  "Retell.ai": <Phone size={ICON_SIZE} className="text-[#FF4F4F]" />,
  "Twilio": <SiTwilio size={ICON_SIZE} color="#F22F46" />,
  "Shopify": <SiShopify size={ICON_SIZE} color="#7AB55C" />,
  "WordPress": <SiWordpress size={ICON_SIZE} color="#21759B" />,
  "Redux": <SiRedux size={ICON_SIZE} color="#764ABC" />,
  "Tailwind CSS": <SiTailwindcss size={ICON_SIZE} color="#06B6D4" />,
  "Docker": <SiDocker size={ICON_SIZE} color="#2496ED" />,
  "Vercel": <SiVercel size={ICON_SIZE} color="#ffffff" />,
};

function getIcon(skillName: string): ReactNode {
  return skillMap[skillName] || <Code2 size={ICON_SIZE} className="text-primary" />;
}

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="skill-badge-card group flex h-full w-full items-center gap-3 sm:gap-4 p-2.5 sm:p-4 pr-4 sm:pr-6 rounded-xl sm:rounded-2xl">
      <div className="skill-icon-box flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-110 shadow-inner">
        <div className="scale-[0.8] sm:scale-100 flex items-center justify-center">
          {getIcon(skill)}
        </div>
      </div>
      <span className="font-label text-xs sm:text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors duration-300 leading-snug">
        {skill}
      </span>
    </div>
  );
}

// A skill card that gently floats up and down in place (levitation).
function LevitatingSkill({ skill, index }: { skill: string; index: number }) {
  // Stagger each card's rhythm so they don't bob in unison.
  const duration = 3.6 + (index % 3) * 0.6;
  const delay = (index % 4) * 0.4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ y: -14, transition: { duration: 0.3 } }}
      >
        <SkillCard skill={skill} />
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection({
  skills,
}: {
  skills: string[];
  percentages?: number[]; // Keep type prop optional so we don't need to rewrite parent immediately, but we will ignore it.
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Only render skills we have an icon for.
  const mappedSkills = skills.filter((skill) => skill in skillMap);

  return (
    <div ref={ref} className="skills-section-modern">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="skill-header-icon">
              <span className="material-symbols-outlined text-primary text-xl">
                auto_awesome
              </span>
            </div>
            <span className="font-label text-xs uppercase tracking-[0.25em] text-primary/80 font-bold">
              Technical Arsenal
            </span>
          </motion.div>
          <motion.h2
            className="font-headline text-3xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My <ShinyText text="Skills" />
          </motion.h2>
          <motion.p
            className="text-on-surface-variant font-label max-w-lg text-sm leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated stack of robust technologies, battle-tested through 
            years of continuous learning and rigorous project delivery.
          </motion.p>
        </div>
      </div>

      {/* Skills grid — levitating cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {mappedSkills.map((skill, index) => (
          <LevitatingSkill key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
