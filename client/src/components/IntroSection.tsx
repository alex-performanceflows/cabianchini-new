/*
 * Design: Campagna Editoriale
 * Sezione introduttiva con titolo e testo, ispirata a ipinitoscana.com
 */
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-14 md:py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Gli appartamenti
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-px bg-[#C4A265] mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#2C2C2C]/70 text-[13px] leading-[1.6] font-light"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Gli appartamenti di Ca' Bianchini, a pochi minuti dal centro di Treviso,
          si distinguono per le loro stanze ampie e luminose, arredate con eleganza.
          Sono ideali per una vacanza in famiglia o con amici, per soggiorni brevi e lunghi.
        </motion.p>
      </div>
    </section>
  );
}
