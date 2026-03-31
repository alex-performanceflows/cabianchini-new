/*
 * Design: Campagna Editoriale
 * Sezione appartamenti in Home Page — solo titolo centrato + testo + CTA "Scopri di più"
 * NO foto, NO dettagli singole camere — rimanda alla pagina /appartamenti
 * Pattern ispirato a ipinitoscana.com: titolo → testo → link
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

export default function ApartmentsPreview() {
  const { t } = useTranslation();
  const lang = useLanguage();
  const aptHref = lang === "en" ? "/en/apartments" : "/it/appartamenti";

  return (
    <section className="py-14 md:py-14 bg-[#F5F3EE]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("home.apartments.title")}
          </h2>

          <div
            className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>{t("home.apartments.p1")}</p>
            <p>{t("home.apartments.p2")}</p>
            <p>{t("home.apartments.p3")}</p>
          </div>

          {/* CTA */}
          <Link href={aptHref}>
            <span
              className="inline-block text-xs tracking-[0.3em] uppercase text-[#2C2C2C] border-b border-[#2C2C2C] pb-0.5 hover:text-[#C4A265] hover:border-[#C4A265] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("home.apartments.cta")}
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Foto Ca' Bianchini sotto la CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 lg:px-10 mt-12"
      >
        <img
          src="/images/home_ca-bianchini.webp"
          alt="Ca' Bianchini — vista dalla piscina"
          className="w-full h-[400px] md:h-[500px] object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
