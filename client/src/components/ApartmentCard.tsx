/*
 * Design: Campagna Editoriale
 * Scheda appartamento con layout alternato (65% foto / 35% testo)
 * Ispirato a ipinitoscana.com - galleria con dots + info + CTA
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Maximize, PawPrint, Accessibility } from "lucide-react";
import type { Apartment } from "@/lib/data";

interface Props {
  apartment: Apartment;
  index: number;
}

export default function ApartmentCard({ apartment, index }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const reversed = index % 2 !== 0;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % apartment.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + apartment.images.length) % apartment.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } min-h-[500px] lg:min-h-[600px] bg-[#F5F0E8]/40`}
    >
      {/* Image Gallery - 65% */}
      <div className="relative w-full lg:w-[62%] overflow-hidden group">
        <div className="relative w-full h-[350px] sm:h-[400px] lg:h-full">
          {apartment.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${apartment.name} - Foto ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Gallery navigation */}
          {apartment.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Foto precedente"
              >
                <ChevronLeft size={32} strokeWidth={1} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Foto successiva"
              >
                <ChevronRight size={32} strokeWidth={1} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {apartment.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-400 ${
                      i === currentImage
                        ? "bg-white w-5"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Foto ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content - 35% */}
      <div className="w-full lg:w-[38%] flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-10">
        {/* Apartment name */}
        <h3
          className="text-xl md:text-2xl font-light text-[#2C2C2C] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {apartment.name}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-[#2C2C2C]/60">
          <div className="flex items-center gap-1.5">
            <Maximize size={15} strokeWidth={1.5} />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {apartment.sqm} m²
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <BedDouble size={15} strokeWidth={1.5} />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Letti: {apartment.beds}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={15} strokeWidth={1.5} />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {apartment.bathrooms} bagni
            </span>
          </div>
          {apartment.petsAllowed && (
            <div className="flex items-center gap-1.5">
              <PawPrint size={15} strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Animali
              </span>
            </div>
          )}
          {apartment.disabledAccess && (
            <div className="flex items-center gap-1.5">
              <Accessibility size={15} strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Accessibile
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p
          className="text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-8 font-light"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {apartment.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:info@cabianchini.com?subject=Richiesta%20informazioni%20-%20{apartment.name}"
            className="text-center text-xs tracking-[0.2em] uppercase border border-[#2C2C2C] text-[#2C2C2C] px-6 py-3 hover:bg-[#2C2C2C] hover:text-white transition-all duration-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Richiesta
          </a>
          <a
            href="mailto:info@cabianchini.com?subject=Prenotazione%20-%20{apartment.name}"
            className="text-center text-xs tracking-[0.2em] uppercase bg-[#C4A265] text-white px-6 py-3 hover:bg-[#A88B50] transition-all duration-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Prenota
          </a>
        </div>
      </div>
    </motion.div>
  );
}
