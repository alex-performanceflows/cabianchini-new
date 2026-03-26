/*
 * Pagina Posizione — stile i·pini Location
 * Hero slider → Dove siamo + Arrivo/partenza → Mappa con partenza → Come raggiungerci (auto/treno/aereo)
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Car, Plane, Train } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const heroSlides = [
  "/images/slider_posizione/Location-Slider-1.webp",
  "/images/slider_posizione/Location-Slider-2.webp",
  "/images/slider_posizione/Location-Slider-3.webp",
  "/images/slider_posizione/Location-Slider-4.webp",
  "/images/slider_posizione/Location-Slider-5.webp",
  "/images/slider_posizione/Location-Slider-6.webp",
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
          <img src={heroSlides[current]} alt={`Posizione ${current + 1}`} className="w-full h-full object-cover hero-slide" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"><ChevronLeft size={36} strokeWidth={1} /></button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"><ChevronRight size={36} strokeWidth={1} /></button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-500 ${i === current ? "bg-white w-6" : "bg-white/40 w-3 hover:bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}

const destinations = [
  { name: "Treviso centro storico", time: "10 min", km: "7 km" },
  { name: "Venezia", time: "35 min", km: "30 km" },
  { name: "Aeroporto Marco Polo", time: "25 min", km: "20 km" },
  { name: "Aeroporto Treviso", time: "15 min", km: "12 km" },
  { name: "Colline del Prosecco", time: "30 min", km: "25 km" },
  { name: "Dolomiti", time: "1h 30 min", km: "100 km" },
];

export default function Posizione() {
  const [departure, setDeparture] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://maps.google.com/maps?q=Ca'+Bianchini+Agriturismo,+Via+Bianchini+10,+Lanzago+di+Silea+TV&z=14&output=embed&hl=it"
  );

  const handleShowRoute = () => {
    if (!departure.trim()) return;
    const dest = "Via+Bianchini+10,+31057+Lanzago+di+Silea+TV";
    const origin = encodeURIComponent(departure.trim());
    setMapSrc(
      `https://maps.google.com/maps?saddr=${origin}&daddr=${dest}&output=embed&hl=it`
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <HeroSlider />

      {/* Dove siamo — intro centrata */}
      <div className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1
              className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dove siamo
            </h1>

            <div className="space-y-4 text-[#2C2C2C]/70 text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <p className="font-medium text-[#2C2C2C]/90 text-sm" style={{ fontWeight: 400 }}>
                Arrivo e partenza
              </p>
              <p>
                Il check-in è dalle 15.00 alle 19.00. Se considerate di arrivare in orari diversi da quelli previsti,
                vi preghiamo di informarci in anticipo. Chiediamo a tutti i nostri ospiti di effettuare il check-out
                entro le 10.30 del giorno stesso della partenza.
              </p>

              <p className="font-medium text-[#2C2C2C]/90 text-sm pt-4" style={{ fontWeight: 400 }}>
                Come raggiungere Ca' Bianchini
              </p>
              <p>
                L'Agriturismo Ca' Bianchini si trova a Lanzago di Silea, immerso nella campagna trevigiana,
                a pochi minuti dal centro storico di Treviso. La posizione è ideale per chi vuole vivere
                la tranquillità della campagna veneta mantenendo la possibilità di raggiungere facilmente
                Venezia, le colline del Prosecco, le Dolomiti e le ville palladiane.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partenza + Mappa — stile i·pini */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Barra partenza */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-sm text-[#2C2C2C]/60 flex-shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Partenza:
            </span>
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleShowRoute()}
              placeholder="Inserisci la tua città di partenza"
              className="flex-1 border-b border-[#2C2C2C]/20 bg-transparent py-2 text-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#C4A265] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              onClick={handleShowRoute}
              className="text-xs tracking-[0.2em] uppercase border border-[#2C2C2C] text-[#2C2C2C] px-6 py-2.5 hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 flex-shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Mostra percorso
            </button>
          </div>

          {/* Mappa Google Maps — embed iframe */}
          <div className="w-full overflow-hidden" style={{ height: "500px" }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ca' Bianchini Agriturismo - Mappa"
            />
          </div>

          {/* Indirizzo sotto mappa */}
          <div className="flex items-center gap-3 mt-5 text-[#2C2C2C]/60" style={{ fontFamily: "var(--font-body)" }}>
            <MapPin size={16} className="text-[#C4A265] flex-shrink-0" />
            <span className="text-sm">Via Bianchini, 10 — 31057 Lanzago di Silea (TV), Italia</span>
            <a
              href="https://maps.google.com/?q=Ca+Bianchini+Agriturismo,+Via+Bianchini+10,+Lanzago+di+Silea+TV"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs tracking-[0.15em] uppercase border border-[#2C2C2C] text-[#2C2C2C] px-4 py-2 hover:bg-[#2C2C2C] hover:text-[#FAFAF7] transition-all duration-300 flex-shrink-0"
            >
              Apri in Google Maps
            </a>
          </div>
        </motion.div>
      </section>

      {/* Foto sfumatura grano — full width */}
      <img
        src="/images/sfumatura-grano.webp"
        alt="Campo di grano"
        className="w-full h-auto block"
      />

      {/* Come arrivare — 3 colonne */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: "var(--font-heading)" }}>
              Come raggiungerci
            </h2>
            <div className="w-10 h-px bg-[#C4A265] mx-auto mt-6" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              icon: Car,
              title: "Automobile",
              content: "Dall'autostrada A27 (Venezia–Belluno), uscita Treviso Nord. Seguire le indicazioni per Silea/Lanzago. Via Bianchini, 10.\n\nPotete fare riferimento a Google Maps per le indicazioni stradali dalla vostra destinazione.",
            },
            {
              icon: Plane,
              title: "Aeroplano",
              content: "Gli aeroporti più vicini sono:\n\nAeroporto di Treviso Sant'Angelo — 12 km\nAeroporto di Venezia Marco Polo — 20 km\nAeroporto di Verona — 140 km\nAeroporto di Bologna — 200 km",
            },
            {
              icon: Train,
              title: "Treno",
              content: "Stazione di Treviso Centrale (10 km). Da lì è possibile raggiungere Ca' Bianchini in taxi o con un'auto a noleggio.\n\nConsigliamo caldamente a tutti i nostri ospiti di vivere l'atmosfera tranquilla della campagna veneta.",
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <section.icon size={28} strokeWidth={1} className="text-[#C4A265] mx-auto mb-4" />
              <h3
                className="text-xl font-light text-[#2C2C2C] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h3>
              <div className="space-y-2 text-[#2C2C2C]/65 text-[13px] leading-[1.6]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                {section.content.split("\n\n").map((p, j) => (
                  <p key={j} className="whitespace-pre-line">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Distanze — griglia compatta */}
      <section className="bg-[#F5F3EE] py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl font-light text-[#2C2C2C]" style={{ fontFamily: "var(--font-heading)" }}>
              Distanze dalle principali mete
            </h2>
            <div className="w-10 h-px bg-[#C4A265] mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 p-5 bg-white"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <Clock size={16} className="text-[#C4A265]" />
                </div>
                <div>
                  <p className="text-sm text-[#2C2C2C] mb-0.5" style={{ fontFamily: "var(--font-body)" }}>{dest.name}</p>
                  <p className="text-xs text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-body)" }}>{dest.time} · {dest.km}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
