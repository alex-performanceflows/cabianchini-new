/*
 * Pagina Dintorni — stile i·pini
 * Hero slider full-page → intro centrato → sezioni alternanti (foto/slider sx + testo dx)
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

interface Section {
  title: string;
  paragraphs: string[];
  images: string[];
}

const sections: Section[] = [
  {
    title: "Treviso",
    paragraphs: [
      "A pochi minuti da Ca' Bianchini si trova il centro storico di Treviso, con i suoi portici, i canali e le piazze animate. Una città elegante e vivibile, ideale per una passeggiata tra negozi, caffè e ristoranti.",
    ],
    images: [
      "/images/dintorni/treviso/Treviso-1.webp",
      "/images/dintorni/treviso/Treviso-2.webp",
      "/images/dintorni/treviso/Treviso-3.webp",
    ],
  },
  {
    title: "Venezia",
    paragraphs: [
      "Venezia è facilmente raggiungibile e rappresenta una delle mete più affascinanti del territorio. Una giornata tra calli, ponti e palazzi storici permette di scoprire uno dei luoghi più unici al mondo.",
    ],
    images: [
      "/images/dintorni/venezia/Venezia-1.webp",
      "/images/dintorni/venezia/Venezia-2.webp",
      "/images/dintorni/venezia/Venezia-3.webp",
      "/images/dintorni/venezia/Venezia-4.webp",
    ],
  },
  {
    title: "Le colline del Prosecco",
    paragraphs: [
      "Verso nord si estendono le colline del Prosecco, patrimonio UNESCO, caratterizzate da vigneti, piccoli borghi e panorami aperti.",
    ],
    images: [
      "/images/dintorni/Prosecco_Pieve.webp",
      "/images/dintorni/Colline-Prosecco-3.webp",
      "/images/dintorni/colline-prosecco/Colline-Prosecco-1.webp",
    ],
  },
  {
    title: "Le ville venete",
    paragraphs: [
      "Il territorio è ricco di ville venete storiche, testimonianza della cultura e dell'architettura della Repubblica di Venezia. Molte di queste dimore sono visitabili e permettono di scoprire giardini, affreschi e ambienti legati alla storia della campagna veneta.",
      "Tra le più celebri si trovano Villa Tiepolo Passi, a pochi minuti da Ca' Bianchini, e Villa Barbaro a Maser, capolavoro palladiano decorato dagli affreschi di Paolo Veronese.",
    ],
    images: [
      "/images/dintorni/ville-venete/Ville-Venete-1.webp",
      "/images/dintorni/ville-venete/Ville-Venete-2.webp",
      "/images/dintorni/ville-venete/Ville-Venete-3.webp",
    ],
  },
  {
    title: "Le montagne",
    paragraphs: [
      "Nelle giornate più limpide le montagne sono visibili anche dalla campagna che circonda Ca' Bianchini. Le Prealpi e le Dolomiti si raggiungono facilmente e offrono numerose possibilità di escursioni e gite nella natura.",
    ],
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
    title: "Natura e percorsi",
    paragraphs: [
      "Il territorio offre numerosi percorsi immersi nella natura, ideali per passeggiate e giri in bicicletta.",
      "Da Treviso parte la Restera del Sile, un percorso lungo il fiume che arriva fino alla laguna di Jesolo. Poco distante si trova anche la Via Ostiglia, una pista ciclabile che attraversa la campagna tra Veneto e Lombardia.",
      "Per chi ama percorsi più panoramici, è possibile raggiungere le colline del Prosecco o il Montello, con itinerari tra vigneti, boschi e piccoli borghi.",
    ],
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
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />

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
              I dintorni
            </h1>
            <div
              className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <p>
                Il territorio che circonda Ca' Bianchini offre molte possibilità di scoperta,
                tra città d'arte, paesaggi di campagna e percorsi nella natura.
              </p>
              <p>
                La posizione permette di raggiungere facilmente Venezia, le colline del Prosecco
                e numerosi itinerari da esplorare con calma.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sezioni alternanti: foto/slider + testo — centrate con margini */}
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <motion.section
            key={section.title}
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
                  {section.images.length > 1 ? (
                    <SectionSlider images={section.images} title={section.title} />
                  ) : (
                    <img
                      src={section.images[0]}
                      alt={section.title}
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
                    {section.title}
                  </h2>
                  <div
                    className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
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
