"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
          A. Hannan
        </Link>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              // {link.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-background border-b border-border/50 md:hidden flex flex-col items-center py-6 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-mono text-muted-foreground hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              // {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
