/*
 * Pagina Dintorni — stile i·pini
 * Hero slider full-page → intro centrato → sezioni alternanti (foto/slider sx + testo dx)
 */
import { useState, useEffect, useCallback } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { useLanguage } from "@/hooks/useLanguage";

const heroSlides = [
  "/images/slider_dintorni/Dintorni_Slider-1.webp",
  "/images/slider_dintorni/Dintorni_Slider-2.webp",
  "/images/slider_dintorni/Dintorni_Slider-3.webp",
  "/images/slider_dintorni/Dintorni_Slider-4.webp",
  "/images/slider_dintorni/Dintorni_Slider-5.webp",
  "/images/slider_dintorni/Dintorni_Slider-6.webp",
  "/images/slider_dintorni/Dintorni_Slider-7.webp",
  "/images/dintorni/Montagne-1.webp",
];

/* Mini slider per sezioni con più foto */
function SectionSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Precedente"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Successiva"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 rounded-full transition-all duration-400 ${
                  i === current ? "bg-white w-4" : "bg-white/40 w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* Hero Slider full-page */
function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

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
            alt={`Dintorni ${current + 1}`}
            className="w-full h-full object-cover hero-slide"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "bg-white w-6" : "bg-white/40 w-3 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default function Dintorni() {
  const { t } = useTranslation();
  useLanguage();

  // Build sections from translation keys, keeping original image arrays
  const sectionDefs = [
    {
      key: "treviso",
      paragraphKeys: ["p1", "p2"],
      images: [
        "/images/dintorni/treviso/Treviso-1.webp",
        "/images/dintorni/treviso/Treviso-2.webp",
        "/images/dintorni/treviso/Treviso-3.webp",
      ],
    },
    {
      key: "venezia",
      paragraphKeys: ["p1", "p2"],
      transComponents: {
        p2: {
          flaline: (
            <a
              href="https://lagunaflaline.it/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A265] hover:underline"
            />
          ),
        },
      } as Record<string, Record<string, React.ReactElement>>,
      images: [
        "/images/dintorni/venezia/Venezia-1.webp",
        "/images/dintorni/venezia/Venezia-2.webp",
        "/images/dintorni/venezia/Venezia-3.webp",
        "/images/dintorni/venezia/Venezia-4.webp",
      ],
    },
    {
      key: "prosecco",
      paragraphKeys: ["p1", "p2"],
      images: [
        "/images/dintorni/Prosecco_Pieve.webp",
        "/images/dintorni/Colline-Prosecco-3.webp",
        "/images/dintorni/colline-prosecco/Colline-Prosecco-1.webp",
      ],
    },
    {
      key: "ville",
      paragraphKeys: ["p1", "p2"],
      images: [
        "/images/dintorni/ville-venete/Ville-Venete-1.webp",
        "/images/dintorni/ville-venete/Ville-Venete-2.webp",
        "/images/dintorni/ville-venete/Ville-Venete-3.webp",
      ],
    },
    {
      key: "montagne",
      paragraphKeys: ["p1", "p2"],
      images: [
        "/images/dintorni/Montagne-1.webp",
        "/images/dintorni/Montagne-2.webp",
        "/images/dintorni/Montagne-3.webp",
        "/images/dintorni/Montagne-4.webp",
        "/images/dintorni/montagne/Montagne-1.webp",
        "/images/dintorni/montagne/Montagne-2.webp",
      ],
    },
    {
      key: "natura",
      paragraphKeys: ["p1", "p2", "p3", "p4"],
      transComponents: {
        p3: {
          tours: (
            <a
              href="https://treviso.bike/tour-giornalieri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A265] hover:underline"
            />
          ),
        },
        p4: {
          rent: (
            <a
              href="https://treviso.bike/servizi/rent/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A265] hover:underline"
            />
          ),
        },
      } as Record<string, Record<string, React.ReactElement>>,
      images: [
        "/images/dintorni/Ciclovia-Sile-1.webp",
        "/images/dintorni/Ciclovia-Sile-2.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-1.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-2.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-3.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-4.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-5.webp",
        "/images/dintorni/natura-percorsi/Natura-Percorsi-6.webp",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <SeoHead page="dintorni" />

      {/* Hero full-page slider */}
      <HeroSlider />

      {/* Intro centrato */}
      <div className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("dintorni.heroTitle")}
            </h1>
            <div
              className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <p>{t("dintorni.intro_p1")}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sezioni alternanti: foto/slider + testo — centrate con margini */}
      {sectionDefs.map((s, idx) => {
        const isEven = idx % 2 === 0;
        const sectionTitle = t(`dintorni.sections.${s.key}.title`);
        return (
          <motion.section
            key={s.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className=""
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}>
                {/* Foto o Slider */}
                <div className={`relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden ${isEven ? "" : "lg:[direction:ltr]"}`}>
                  {s.images.length > 1 ? (
                    <SectionSlider images={s.images} title={sectionTitle} />
                  ) : (
                    <img
                      src={s.images[0]}
                      alt={sectionTitle}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Testo — sfondo grigio chiaro come i pini */}
                <div className={`flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 md:py-14 bg-[#F0EDE8] ${isEven ? "" : "lg:[direction:ltr]"}`}>
                  <h2
                    className="text-2xl md:text-3xl font-light text-[#2C2C2C] leading-[1.15] mb-5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {sectionTitle}
                  </h2>
                  <div
                    className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {s.paragraphKeys.map((pk) => {
                      const components = (s as any).transComponents?.[pk];
                      return components ? (
                        <p key={pk}>
                          <Trans
                            i18nKey={`dintorni.sections.${s.key}.${pk}`}
                            components={components}
                          />
                        </p>
                      ) : (
                        <p key={pk}>{t(`dintorni.sections.${s.key}.${pk}`)}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      <ContactSection />
      <Footer />
    </div>
  );
}
