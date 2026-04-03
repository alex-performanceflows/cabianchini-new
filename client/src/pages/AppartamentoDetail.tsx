/*
 * Pagina dettaglio appartamento — stile i·pini Torretta
 * Hero slider full-page → Nome + info → Descrizione → Servizi → Prenota
 */
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Accessibility, UtensilsCrossed, Thermometer, Wifi, BedDouble, Droplets, Sparkles, TreePine, ParkingCircle, PlugZap, WashingMachine, Users, Maximize, Bath, LogIn, LogOut } from "lucide-react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { apartments } from "@/lib/apartments";
import { useLanguage } from "@/hooks/useLanguage";

function DetailHeroSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
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
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt={`${name} - ${current + 1}`}
            className="w-full h-full object-cover hero-slide"
            fetchPriority={current === 0 ? "high" : "auto"}
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
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-500 ${i === current ? "bg-white w-6" : "bg-white/40 w-3 hover:bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}

function OtherApartments({ currentId, lang }: { currentId: string; lang: string }) {
  const { t } = useTranslation();
  const others = apartments.filter((a) => a.id !== currentId);
  const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);
  const aptBasePath = lang === "en" ? "/en/apartments" : "/it/appartamenti";

  const scrollBy = (dir: number) => {
    if (!scrollRef) return;
    const cardWidth = scrollRef.querySelector("a")?.offsetWidth || 350;
    scrollRef.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        <h2
          className="text-2xl font-light text-[#2C2C2C] mb-8 text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("appartamenti.detail.altri_title")}
        </h2>
        {/* Frecce ai lati come i pini */}
        <button
          onClick={() => scrollBy(-1)}
          className="absolute -left-2 lg:-left-6 top-[200px] z-10 text-[#2C2C2C]/30 hover:text-[#2C2C2C]/70 transition-colors hidden md:block"
          aria-label="Precedente"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute -right-2 lg:-right-6 top-[200px] z-10 text-[#2C2C2C]/30 hover:text-[#2C2C2C]/70 transition-colors hidden md:block"
          aria-label="Successivo"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        <div
          ref={setScrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {others.map((other) => (
            <Link
              key={other.id}
              href={`${aptBasePath}/${other.id}`}
              className="flex-shrink-0 w-[300px] md:w-[340px] snap-start group block"
            >
              {/* Foto con nome + info sovrapposti in bianco */}
              <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                <img
                  src={other.coverImage}
                  alt={other.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3
                    className="text-white text-xl font-light tracking-wide uppercase"
                    style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
                  >
                    {other.name}
                  </h3>
                  <p
                    className="text-white/80 text-xs tracking-[0.08em] mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {other.sqm} m² per {other.capacity.replace("Fino a ", "").replace(" persone", "").replace(" persona", "")} person{other.capacity.includes("1 persona") ? "a" : "e"}
                  </p>
                </div>
              </div>

              {/* Sezione grigia con testo + link dettagli */}
              <div className="bg-[#F0EDE8] px-5 py-5">
                <p
                  className="text-[#2C2C2C]/65 text-[12px] leading-[1.6] line-clamp-4 mb-4"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {other.shortDescription}
                </p>
                <p
                  className="text-[11px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 group-hover:text-[#C4A265] transition-colors duration-300 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("appartamenti.detail.dettagli")} <span className="inline-block w-6 h-px bg-current ml-1" /><span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AppartamentoDetail() {
  const { t } = useTranslation();
  const lang = useLanguage();
  const params = useParams<{ id: string }>();
  const apt = apartments.find((a) => a.id === params.id);

  const aptBasePath = lang === "en" ? "/en/apartments" : "/it/appartamenti";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!apt) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
        <Header />
        <p className="text-[#2C2C2C]/60 text-lg pt-24" style={{ fontFamily: "var(--font-heading)" }}>
          Appartamento non trovato
        </p>
      </div>
    );
  }

  const handlePrenota = () => {
    const el = document.getElementById("prenota");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `/${lang}/contatti`;
  };

  const services = [
    { icon: UtensilsCrossed, key: "cucina" },
    { icon: Thermometer, key: "riscaldamento" },
    { icon: Wifi, key: "wifi" },
    { icon: BedDouble, key: "biancheria" },
    { icon: Droplets, key: "asciugamani" },
    { icon: Sparkles, key: "cortesia" },
    { icon: TreePine, key: "esterni" },
    { icon: ParkingCircle, key: "parcheggio" },
    { icon: PlugZap, key: "ricarica" },
    { icon: WashingMachine, key: "lavanderia" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <SeoHead page="appartamenti" />

      {/* Hero slider */}
      <DetailHeroSlider images={apt.images} name={apt.name} />

      {/* Nome + info compatto */}
      <div className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1
              className="text-3xl md:text-5xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {apt.name}
            </h1>

            {/* Quick specs */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-[#2C2C2C]/60">
                <Maximize size={16} strokeWidth={1.2} />
                <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{apt.sqm} {t("appartamenti.detail.mq")}</span>
              </div>
              <div className="flex items-center gap-2 text-[#2C2C2C]/60">
                <Users size={16} strokeWidth={1.2} />
                <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {t("appartamenti.detail.fino_a")} {apt.capacity.replace("Fino a ", "").replace(" persone", "").replace(" persona", "")} {t("appartamenti.detail.persone")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#2C2C2C]/60">
                <Bath size={16} strokeWidth={1.2} />
                <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{apt.bathrooms} {t("appartamenti.detail.bagni")}</span>
              </div>
            </div>

            {/* Description */}
            <div
              className="space-y-4 text-[#2C2C2C]/70 text-[13px] leading-[1.7] text-left md:text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {apt.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tags — solo accessibilità disabili, non animali (info in nota servizi) */}
            {apt.disabledAccess && (
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#2C2C2C]/60 border border-[#2C2C2C]/20 px-3 py-1.5" style={{ fontFamily: "var(--font-body)" }}>
                  <Accessibility size={14} />
                  {t("appartamenti.detail.disabili")}
                </span>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button
                onClick={handlePrenota}
                className="text-xs tracking-[0.2em] uppercase border border-[#2C2C2C] text-[#2C2C2C] px-8 py-3 hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Richiesta
              </button>
              <button
                onClick={handlePrenota}
                className="text-xs tracking-[0.2em] uppercase border border-[#C4A265] text-[#C4A265] px-8 py-3 hover:bg-[#C4A265] hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("appartamenti.detail.prenota")}
              </button>
            </div>

            {/* Back to apartments link */}
            <div className="mt-6">
              <Link
                href={aptBasePath}
                className="text-xs tracking-[0.15em] uppercase text-[#2C2C2C]/40 hover:text-[#C4A265] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ← {lang === "en" ? "All apartments" : "Tutti gli appartamenti"}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Servizi inclusi */}
      <section className="py-14 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#C4A265] mb-4" style={{ fontFamily: "var(--font-body)" }}>
              {t("appartamenti.detail.servizi_subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: "var(--font-heading)" }}>
              {t("appartamenti.detail.servizi_title")}
            </h2>
            <div className="w-10 h-px bg-[#C4A265] mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-14">
            {services.map((service, i) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <service.icon size={22} strokeWidth={1.2} className="text-[#C4A265] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[12px] leading-[1.4] tracking-[0.04em] text-[#2C2C2C]/65" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {t(`appartamenti.services.${service.key}`)}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Nota informativa */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-[#C4A265]/20"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-16 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <LogIn size={16} className="text-[#C4A265] shrink-0" strokeWidth={1.5} />
                <p className="text-[13px] text-[#2C2C2C]/70 leading-[1.6]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  <span className="font-medium text-[#2C2C2C]">Check-in</span>
                  {" · "}
                  {t("appartamenti.checkin_info")}
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <LogOut size={16} className="text-[#C4A265] shrink-0" strokeWidth={1.5} />
                <p className="text-[13px] text-[#2C2C2C]/70 leading-[1.6]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  <span className="font-medium text-[#2C2C2C]">Check-out</span>
                  {" · "}
                  {t("appartamenti.checkout_info")}
                </p>
              </div>
            </div>
            <p
              className="text-center text-[11px] text-[#2C2C2C]/40 tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("appartamenti.note")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo gallery grid — planimetria come prima foto, poi le foto dell'appartamento, poi galleryExtras */}
      {(apt.floorPlanImage || apt.images.length > 2) && (
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 gap-3">
            {/* Planimetria — prima foto, sfondo chiaro, object-contain */}
            {apt.floorPlanImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F5F3EF] flex items-center justify-center"
              >
                <img
                  src={apt.floorPlanImage}
                  alt={`${t("appartamenti.detail.floorplan")} ${apt.name}`}
                  className="w-full h-[250px] md:h-[350px] object-contain p-4"
                  loading="lazy"
                />
              </motion.div>
            )}
            {/* Foto dell'appartamento */}
            {apt.images.slice(0, apt.floorPlanImage ? 5 : 6).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={img}
                  alt={`${apt.name} - ${i + 1}`}
                  className="w-full h-[250px] md:h-[350px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
            {/* Foto extra solo gallery (non nello slider) */}
            {apt.galleryExtras?.map((img, i) => (
              <motion.div
                key={`extra-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (apt.images.slice(0, 5).length + i) * 0.08 }}
              >
                <img
                  src={img}
                  alt={`${apt.name} - extra ${i + 1}`}
                  className="w-full h-[250px] md:h-[350px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Carosello altri appartamenti */}
      <OtherApartments currentId={apt.id} lang={lang} />

      <ContactSection />
      <Footer />
    </div>
  );
}
