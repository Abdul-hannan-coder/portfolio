"use client";

import Link from "next/link";
import portfolioData from "../../portfolio.json";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const { personal, social, timeline } = portfolioData;
  const currentRole = timeline.find((item) => item.period === "Present");
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on path change (optional, but good practice for SPAs)
  // or window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-surface-container-high rounded-lg text-on-surface shadow-lg hover:bg-primary hover:text-on-primary transition-colors"
        aria-label="Toggle Sidebar"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Backdrop for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside 
        initial={false}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className={`
          fixed lg:!transform-none lg:sticky top-0 lg:top-12 
          left-0 h-screen lg:h-[calc(100vh-6rem)]
          w-80 bg-surface-container-low lg:rounded-xl p-6 
          overflow-y-auto z-50 lg:z-40 border-r lg:border-none border-outline-variant/20
          flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        `}
      >
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-32 h-32 rounded-xl overflow-hidden mb-6 bg-surface-container-highest relative">
          <img
            alt={`${personal.name} Profile Photo`}
            className="w-full h-full object-cover"
            src={personal.profileImage}
          />
        </div>
        <h1 className="font-headline text-2xl font-bold text-on-surface mb-1">{personal.name.trim()}</h1>
        <p className="font-label text-xs font-medium text-on-surface-variant bg-surface-variant px-3 py-1 rounded-full mt-2">
          {personal.tagline}
        </p>
      </div>
      <div className="space-y-6 flex-grow">
        {/* Contact Info */}
        <div className="space-y-4 pt-6 border-t border-outline-variant/20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label uppercase tracking-widest text-outline">Email</span>
              <span className="text-xs font-medium text-on-surface">{social.find(s => s.icon === 'email')?.href || ''}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">work</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label uppercase tracking-widest text-outline">Role</span>
              <span className="text-xs font-medium leading-snug">{currentRole?.title || 'Engineer'}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label uppercase tracking-widest text-outline">Location</span>
              <span className="text-sm font-medium">{currentRole?.location || 'Global'}</span>
            </div>
          </div>
          
          <div className="pt-4">
            <Link 
              href="/finresume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2 py-3 bg-surface-container-highest hover:bg-primary text-on-surface hover:text-on-primary rounded-xl transition-all font-bold text-sm tracking-wide"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download Resume
            </Link>
          </div>
        </div>
      </div>
      {/* SideNavBar Footer Tabs */}
      <div className="flex justify-center gap-4 pt-8 mt-auto border-t border-outline-variant/20">
        {social.map((link) => (
          link.name !== "Email" && (
            <Link key={link.name} href={link.href} target="_blank" className="text-on-surface-variant hover:text-primary transition-colors tooltip relative group">
              <span className="material-symbols-outlined">
                {link.icon === 'github' ? 'code' : link.icon === 'linkedin' ? 'link' : 'share'}
              </span>
            </Link>
          )
        ))}
      </div>
      </motion.aside>
    </>
  );
}
