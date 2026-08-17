"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-secondary/10 p-1 py-0.5 font-bold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface Testimonial {
  name: string;
  role: string;
  image?: string;
  text: React.ReactNode;
}

export function TestimonialCard({
  text,
  name,
  image,
  role,
  className,
}: Testimonial & { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-between gap-6 rounded-xl p-5",
        // theme styles
        "border border-outline-variant/20 bg-surface-container-low/60 shadow-sm",
        // hover effect
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      <div className="font-body text-sm font-normal text-on-surface-variant select-none">
        {text}
        <div className="flex flex-row py-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-secondary text-secondary" />
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <Image
          width={40}
          height={40}
          src={image || ""}
          alt={name}
          className="size-10 rounded-full object-cover ring-1 ring-primary/20 ring-offset-2 ring-offset-surface"
        />

        <div>
          <p className="font-headline font-medium text-on-surface">{name}</p>
          <p className="font-label text-xs font-normal text-on-surface-variant">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

// A single column that gently scrolls its cards up and back down (ping-pong),
// without ever duplicating them. If the cards fit, it simply stays still.
// A card that gently floats up and down in place (levitation).
function LevitatingCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  // Stagger each card's rhythm so they don't bob in unison.
  const duration = 3.6 + (index % 3) * 0.6;
  const delay = (index % 4) * 0.4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ y: -14, transition: { duration: 0.3 } }}
      >
        <TestimonialCard {...testimonial} />
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (!testimonials?.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Decorative gold glows */}
      <div className="pointer-events-none absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 text-center font-headline text-3xl leading-[1.2] font-bold tracking-tighter text-on-surface md:text-4xl">
          Client Feedback
        </h3>
        <p className="mx-auto mb-10 max-w-lg text-center font-body text-lg font-medium tracking-tight text-balance text-on-surface-variant">
          Don&apos;t just take my word for it — here&apos;s what{" "}
          <span className="gold-gradient-text font-semibold">
            founders and teams
          </span>{" "}
          have to say.
        </p>
      </motion.div>

      <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <LevitatingCard key={i} testimonial={testimonial} index={i} />
        ))}
      </div>
    </section>
  );
}
