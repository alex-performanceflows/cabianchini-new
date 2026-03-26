/*
 * Pagina Appartamenti — stile i·pini
 * Hero slider full-page → Intro → Sezioni alternanti foto/testo → Servizi → Footer
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, UtensilsCrossed, Thermometer, Wifi, BedDouble, Droplets, Sparkles, TreePine, ParkingCircle, PlugZap, WashingMachine } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { apartments } from "@/lib/apartments";

const heroSlides = [
  "/images/slider_appartamenti/Appartamenti_Slider-1.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-2.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-3.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-4.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-5.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-6.webp",
  "/images/slider_appartamenti/Appartamenti_Slider-7.webp",
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-screen overflow-hidden" data-hero="true">
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
            src={heroSlides[current]}
            alt={`Appartamenti ${current + 1}`}
            className="w-full h-full object-cover hero-slide"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors" aria-label="Precedente">
        <ChevronLeft size={36} strokeWidth={1} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors" aria-label="Successiva">
        <ChevronRight size={36} strokeWidth={1} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-500 ${i === current ? "bg-white w-6" : "bg-white/40 w-3 hover:bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}

/* Slider per le foto dell'appartamento nella sezione listing */
function ApartmentSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative h-full min-h-[350px] md:min-h-[450px] lg:min-h-[550px] overflow-hidden group">
      <img
        src={images[current]}
        alt={`${name} - ${current + 1}`}
        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-300 ${i === current ? "bg-white w-5" : "bg-white/40 w-2.5"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Appartamenti() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <HeroSlider />

      {/* Intro centrato */}
      <div className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Gli appartamenti
            </h1>
            <div className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <p>Ca' Bianchini dispone di cinque appartamenti indipendenti, ognuno con ingresso autonomo e spazi propri. Sono pensati per famiglie o gruppi di amici che vogliono vivere la campagna veneta con autonomia e tranquillità.</p>
              <p>Gli ambienti sono luminosi e curati, arredati con semplicità e attenzione al dettaglio. Ogni appartamento è dotato di cucina attrezzata, zona giorno e camere da letto confortevoli.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Appartamenti — sezioni alternanti stile i·pini */}
      {apartments.map((apt, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <motion.section
            key={apt.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}>
                {/* Foto slider — cliccabile per aprire dettaglio */}
                <Link
                  href={`/appartamenti/${apt.id}`}
                  className={`block cursor-pointer ${isEven ? "" : "lg:[direction:ltr]"}`}
                >
                  <ApartmentSlider images={apt.images.slice(0, 5)} name={apt.name} />
                </Link>

                {/* Testo */}
                <div className={`flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 md:py-14 bg-[#F0EDE8] ${isEven ? "" : "lg:[direction:ltr]"}`}>
                  <h2
                    className="text-2xl md:text-3xl font-light text-[#2C2C2C] leading-[1.15] mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {apt.name}
                  </h2>
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-[#C4A265] mb-5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {apt.sqm} m² · {apt.capacity}
                  </p>
                  <p
                    className="text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-8"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {apt.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/appartamenti/${apt.id}`}
                      className="text-xs tracking-[0.2em] uppercase border border-[#2C2C2C] text-[#2C2C2C] px-6 py-2.5 hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Scopri di più
                    </Link>
                    <button
                      onClick={() => {
                        const el = document.getElementById("prenota");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs tracking-[0.2em] uppercase border border-[#C4A265] text-[#C4A265] px-6 py-2.5 hover:bg-[#C4A265] hover:text-white transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Prenota
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Servizi ed info */}
      <section className="py-14 md:py-14 bg-[#F5F3EE] mt-0">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#C4A265] mb-4" style={{ fontFamily: "var(--font-body)" }}>Inclusi nel soggiorno</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: "var(--font-heading)" }}>Servizi ed info</h2>
            <div className="w-10 h-px bg-[#C4A265] mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-14">
            {[
              { icon: UtensilsCrossed, label: "Cucina attrezzata" },
              { icon: Thermometer, label: "Riscaldamento e raffrescamento" },
              { icon: Wifi, label: "Wi-Fi" },
              { icon: BedDouble, label: "Biancheria da letto e da bagno" },
              { icon: Droplets, label: "Asciugamani per piscina" },
              { icon: Sparkles, label: "Set di cortesia" },
              { icon: TreePine, label: "Spazi esterni con tavolino" },
              { icon: ParkingCircle, label: "Parcheggio interno" },
              { icon: PlugZap, label: "Ricarica auto elettriche" },
              { icon: WashingMachine, label: "Lavanderia" },
            ].map((service, i) => (
              <motion.div key={service.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <service.icon size={22} strokeWidth={1.2} className="text-[#C4A265] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[12px] leading-[1.4] tracking-[0.04em] text-[#2C2C2C]/65" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{service.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center text-[11px] text-[#2C2C2C]/40 mt-14 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
            Sistema di climatizzazione a pompe di calore (senza aria condizionata) · Lavanderia a uso comune
          </motion.p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
