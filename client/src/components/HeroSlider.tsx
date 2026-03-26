/*
 * Design: Campagna Editoriale
 * Hero slider full-viewport SENZA testo sovrapposto — solo immagini, frecce e dots
 * Il testo inizia nella sezione successiva (HomeIntro)
 */
import { useState, useEffect, useCallback } from "react";
import { heroImages } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden" data-hero="true">
      {/* Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[current]}
            alt="Ca' Bianchini Agriturismo"
            className="w-full h-full object-cover hero-slide"
          />
        </motion.div>
      </AnimatePresence>

      {/* Leggero overlay scuro ai bordi per profondità */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300 z-10"
        aria-label="Slide precedente"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300 z-10"
        aria-label="Slide successiva"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "bg-white w-6" : "bg-white/40 w-3 hover:bg-white/60"
            }`}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
