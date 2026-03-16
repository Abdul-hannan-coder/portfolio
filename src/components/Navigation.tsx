"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-1 md:gap-2 bg-surface-container-lowest p-1 md:p-2 rounded-xl ghost-border max-w-full overflow-hidden">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`px-3 py-1.5 md:px-6 md:py-2 rounded-lg font-label text-xs md:text-sm transition-all whitespace-nowrap ${
              isActive
                ? "bg-surface-container-high text-primary font-semibold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
