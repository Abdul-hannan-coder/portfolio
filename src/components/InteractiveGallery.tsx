"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function InteractiveGallery({ images, projectTitle }: InteractiveGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Close modal on ESC key and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveIdx((activeIdx + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((activeIdx - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, images]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="gallery-grid">
        {images.map((imgSrc, i) => (
          <div
            key={i}
            onClick={() => setActiveIdx(i)}
            className="aspect-video overflow-hidden rounded-2xl border border-outline-variant/15 group cursor-pointer relative bg-surface-container-lowest hover:border-primary/30 transition-all duration-300"
          >
            <Image
              src={imgSrc}
              alt={`${projectTitle} Screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Zoom icon on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl bg-primary/20 p-4 rounded-full backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                zoom_in
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Popup Preview Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors z-[110] flex items-center justify-center cursor-pointer"
              aria-label="Close Preview"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl">close</span>
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx((activeIdx - 1 + images.length) % images.length);
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white p-3 rounded-full transition-colors z-[110] flex items-center justify-center cursor-pointer"
                  aria-label="Previous Image"
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_back_ios_new</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx((activeIdx + 1) % images.length);
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white p-3 rounded-full transition-colors z-[110] flex items-center justify-center cursor-pointer"
                  aria-label="Next Image"
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward_ios</span>
                </button>
              </>
            )}

            {/* Main Preview Container */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface-container-lowest">
                <Image
                  src={images[activeIdx]}
                  alt={`${projectTitle} Screenshot Preview`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Counter and Title */}
              <div className="mt-4 flex flex-col items-center gap-1 text-center">
                <p className="text-sm font-bold text-on-surface tracking-wide">
                  {projectTitle}
                </p>
                <p className="text-xs font-label text-white/40">
                  {activeIdx + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
