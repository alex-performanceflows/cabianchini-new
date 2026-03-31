/*
 * Design: Sezione Dintorni — stile i·pini
 * Titolo centrato → testo centrato → CTA → fascia foto full-width
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const dintorniSlides = [
  { src: "/images/slider_dintorni/Dintorni_Slider-1.webp", alt: "Dintorni 1" },
  { src: "/images/slider_dintorni/Dintorni_Slider-2.webp", alt: "Dintorni 2" },
  { src: "/images/slider_dintorni/Dintorni_Slider-3.webp", alt: "Dintorni 3" },
  { src: "/images/slider_dintorni/Dintorni_Slider-4.webp", alt: "Dintorni 4" },
  { src: "/images/slider_dintorni/Dintorni_Slider-5.webp", alt: "Dintorni 5" },
  { src: "/images/slider_dintorni/Dintorni_Slider-6.webp", alt: "Dintorni 6" },
  { src: "/images/slider_dintorni/Dintorni_Slider-7.webp", alt: "Dintorni 7" },
];

export default function DintorniSection() {
  const { t } = useTranslation();
  const lang = useLanguage();
  const dintorniHref = lang === "en" ? "/en/surroundings" : "/it/dintorni";

  return (
    <section id="dintorni" className="bg-[#FAFAF7]">
      {/* Testo centrato */}
      <div className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("home.dintorni.title")}
            </h2>

            <div
              className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <p>{t("home.dintorni.p1")}</p>
              <p>{t("home.dintorni.p2")}</p>
            </div>

            <Link
              href={dintorniHref}
              className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#2C2C2C] border-b border-[#2C2C2C]/40 pb-1 hover:text-[#C4A265] hover:border-[#C4A265] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("home.dintorni.cta")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Fascia foto full-width — stile i pini */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-0">
          {dintorniSlides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex-shrink-0"
              style={{ width: `${100 / 7}%` }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-48 md:h-64 lg:h-72 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
