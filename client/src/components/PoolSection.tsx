/*
 * Design: Campagna Editoriale
 * Sezione piscina con immagine full-width e testo sovrapposto
 */
import { motion } from "framer-motion";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663140576256/RDeGQpYXuvox6UhAZuA9kb";
const poolImage = `${CDN}/hero_pool-M634TiWWmaTZCCjVNbpU2a.webp`;

export default function PoolSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden my-8">
      <img
        src={poolImage}
        alt="Piscina Ca' Bianchini"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white text-xl md:text-2xl font-light mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          La piscina
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-px bg-[#C4A265] mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/90 text-[13px] leading-[1.6] font-light max-w-lg"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Una splendida piscina immersa nel verde, a disposizione di tutti gli ospiti
          per momenti di relax e divertimento.
        </motion.p>
      </div>
    </section>
  );
}
