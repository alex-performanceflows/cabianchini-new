/*
 * Design: Campagna Editoriale
 * Sezione servizi con layout pulito e icone
 */
import { motion } from "framer-motion";
import { Check, CreditCard } from "lucide-react";

const includedServices = [
  "Cucina attrezzata",
  "Sistema centralizzato di riscaldamento e raffrescamento alimentato da pompe di calore",
  "Wi-Fi",
  "Biancheria da letto e da bagno",
  "Asciugamani per piscina",
  "Set di cortesia",
  "Spazi esterni con tavolino",
  "Parcheggio interno alla struttura",
  "Colonnina di ricarica per auto elettriche",
];

const paidServices = [
  "Lavanderia (servizio comune)",
  "Cambio biancheria extra",
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-14 md:py-14 bg-[#F5F0E8]/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light text-[#2C2C2C] text-center mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Servizi
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-px bg-[#C4A265] mx-auto mb-6"
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Included services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-base font-light text-[#2C2C2C] mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Check size={20} className="text-[#C4A265]" strokeWidth={1.5} />
              Servizi inclusi
            </h3>
            <ul className="space-y-4">
              {includedServices.map((service: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A265] mt-1.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Paid services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-base font-light text-[#2C2C2C] mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CreditCard size={20} className="text-[#C4A265]" strokeWidth={1.5} />
              Servizi a pagamento
            </h3>
            <ul className="space-y-4">
              {paidServices.map((service: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A265] mt-1.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
