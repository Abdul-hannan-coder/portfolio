"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Users,
  Workflow,
  Target,
  Code2
} from "lucide-react";

// Brand SVGs
const SvgNextjs = () => (
  <svg viewBox="0 0 180 180" width="24" height="24" className="text-white" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM90 162C50.2355 162 18 129.764 18 90C18 50.2355 50.2355 18 90 18C129.764 18 162 50.2355 162 90C162 129.764 129.764 162 90 162ZM133.527 122.951L71.7423 44.8217H55.8" fill="currentColor" /><path d="M124.2 44.8217H106.2V115.656H124.2V44.8217Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="115.2" y1="44.8217" x2="115.2" y2="122.951" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg>
);

const SvgReact = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);

const SvgTailwind = () => (
  <svg viewBox="0 0 256 154" width="26" height="26" style={{height: "auto"}} xmlns="http://www.w3.org/2000/svg"><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 93.867 29.867 115.2 38.4c11.084 4.434 19.018 12.518 28.01 21.674C157.067 74.195 173.344 90.8 213.333 90.8c34.134 0 55.467-17.067 64-51.2-12.8 17.067-29.867 21.333-51.2 12.8-11.084-4.434-19.018-12.518-28.01-21.674C184.267 16.605 167.99 0 128 0zM42.667 63.2c-34.134 0-55.467 17.067-64 51.2 12.8-17.067 29.867-21.334 51.2-12.8 11.084 4.433 19.018 12.518 28.01 21.674C71.733 137.395 88.01 154 128 154c34.133 0 55.467-17.067 64-51.2-12.8 17.067-29.867 21.334-51.2 12.8-11.084-4.433-19.018-12.518-28.01-21.674C98.933 79.805 82.656 63.2 42.667 63.2z" fill="#06B6D4"/></svg>
);

const SvgRedux = () => (
  <svg viewBox="0 0 100 100" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M65.3 44.2c2.1-4 3.3-8 3.3-11.4 0-14.5-12.7-22.3-25.2-13.8L22 34.6c2.5-3 5.5-5.3 8.7-6.8 5-2.2 10.3-2.6 15.3-1.6 4.9 1 9.4 3 13.5 5.5 12.3 7.8 17.6 22 12.8 33.4-1.3 3.1-3.2 6-5.5 8.7L65.3 44.2zM27 67.2C13.4 59.9 8 47.9 10.2 36.3c1.9-9.5 8.3-18.7 18.2-22.1l1.8-.6-12 18.2c-1.8 3.6-2.8 7.3-2.8 10.8 0 14.5 12.7 22.3 25.2 13.8l21.4-15.6c-2.4 3-5.4 5.3-8.6 6.8-5 2.2-10.3 2.6-15.3 1.6-5-1-9.4-3-13.5-5.5-2.4-1.5-4.6-3.2-6.6-5zM76.4 57C89 65 94.2 78.4 91 90.4c-2.8 10-10 18.2-19.4 20l-1.8.3 11-18c1.6-3.6 2.5-7.4 2.5-11 0-14.5-12.7-22.3-25.2-13.8L36.7 83.5c2.4-3 5.4-5.3 8.6-6.8 5-2.2 10.3-2.6 15.3-1.6 4.9 1 9.4 3 13.5 5.5 2.4 1.5 4.6 3.2 6.6 5.1L76.4 57z" fill="#764ABC"/></svg>
);

const SvgVercel = () => (
  <svg viewBox="0 0 256 222" width="22" height="22" className="text-white" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128 0l128 221.705H0z"/></svg>
);

const SvgDocker = () => (
  <svg viewBox="0 0 128 128" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0db7ed" d="M116.2 50.1c-1.3-.2-2.5-.2-3.7-.1-3.6-15-18.2-25.5-35-23.7-1.3-8-8-14.3-16.1-14.7H13.6c-5.8 0-10.5 4.7-10.5 10.5v12.3h22.9v14.1H3.1v17.4c0 23.3 18.9 42.2 42.2 42.2h53.6c15.1 0 27.4-12.3 27.4-27.4 0-14-10.4-25.6-24.1-27.2.1-1.1.2-2.2.2-3.4zm-94-2.8h11.2v11.2H22.2V47.3zm20.8 0h11.2v11.2H43V47.3zm20.8 0h11.2v11.2H63.8V47.3zm0-17.6h11.2v11.2H63.8V29.7zM43 29.7h11.2v11.2H43V29.7zm-20.8 0h11.2v11.2H22.2V29.7z" />
  </svg>
)

import { ReactNode } from "react";

const SvgGenericCode = () => <Code2 size={24} className="text-primary" />;

interface Skill {
  name: string;
  icon: ReactNode;
}

const skillMap: Record<string, ReactNode> = {
  "Next.js": <SvgNextjs />,
  "React": <SvgReact />,
  "Gohighlevel Automation": <Target size={24} className="text-[#00C2FF]" />,
  "N8N , Make , Zapier Automation": <Workflow size={24} className="text-[#FF6B6B]" />,
  "Redux": <SvgRedux />,
  "Tailwind CSS": <SvgTailwind />,
  "Docker": <SvgDocker />,
  "Vercel": <SvgVercel />,
  "Cloud Deployment (AWS, Oracle Cloud, Azure)": <Cloud size={24} className="text-[#FF9900]" />,
  "Collaboration and Communication": <Users size={24} className="text-[#8E44AD]" />,
};

function getIcon(skillName: string): ReactNode {
  return skillMap[skillName] || <SvgGenericCode />;
}

export default function SkillsSection({
  skills,
}: {
  skills: string[];
  percentages?: number[]; // Keep type prop optional so we don't need to rewrite parent immediately, but we will ignore it.
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

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
            className="font-headline text-4xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My <span className="gold-gradient-text">Skills</span>
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

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => {
          const icon = getIcon(skill);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="skill-badge-card group flex items-center gap-4 p-4 rounded-2xl"
            >
              <div className="skill-icon-box flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                {icon}
              </div>
              <span className="font-label text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors duration-300 leading-snug">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
