/*
 * Design: Campagna Editoriale
 * Sezione introduttiva Home — pattern I Pini: titolo centrato → testo centrato → 2 foto affiancate
 */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function HomeIntro() {
  const { t } = useTranslation();

  return (
    <section className="pt-14 md:pt-14 pb-0">
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
            {t("home.intro.title")}
          </h2>

          <div
            className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>{t("home.intro.p1")}</p>
            <p>{t("home.intro.p2")}</p>
            <p>{t("home.intro.p3")}</p>
          </div>

          <p
            className="text-[#2C2C2C] text-[13px] italic mb-6"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            {t("home.intro.quote")}
          </p>
        </motion.div>
      </div>

      {/* Foto Ca' Bianchini — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-10 w-full -mb-1"
      >
        <img
          src="/images/full-length-location.webp"
          alt="Ca' Bianchini agriturismo"
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  );
}
