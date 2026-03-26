/*
 * Design: Campagna Editoriale
 * Sezione Contatti / Richiesta disponibilità
 * Layout: testo a sinistra, form a destra
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apartment: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Richiesta disponibilità Ca' Bianchini");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\nAppartamento: ${formData.apartment}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nOspiti: ${formData.guests}\n\nMessaggio:\n${formData.message}`
    );
    window.location.href = `mailto:info@cabianchini.com?subject=${subject}&body=${body}`;
  };

  const inputClass = "w-full border-0 border-b border-[#2C2C2C]/20 bg-transparent py-3 text-sm text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:outline-none focus:border-[#C4A265] transition-colors duration-300";
  const labelClass = "block text-xs tracking-[0.15em] uppercase text-[#2C2C2C]/50 mb-1";

  return (
    <section id="prenota" className="py-14 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4A265] mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Richiedi disponibilità
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Organizziamo insieme il tuo soggiorno
            </h2>
            <div className="w-10 h-px bg-[#C4A265] mb-8" />
            <p className="text-[#2C2C2C]/65 text-[13px] leading-[1.6] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Per informazioni o per richiedere la disponibilità degli appartamenti, potete
              contattarci compilando il modulo oppure scrivendoci direttamente. Saremo felici
              di rispondervi e di aiutarvi a organizzare il vostro soggiorno a Ca' Bianchini.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#C4A265] mt-0.5 shrink-0" />
                <div style={{ fontFamily: "var(--font-body)" }}>
                  <p className="text-sm text-[#2C2C2C]/80">Via Bianchini, 10</p>
                  <p className="text-sm text-[#2C2C2C]/80">31057 Lanzago di Silea (TV), Italia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-[#C4A265] shrink-0" />
                <a
                  href="mailto:info@cabianchini.com"
                  className="text-sm text-[#2C2C2C]/80 hover:text-[#C4A265] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  info@cabianchini.com
                </a>
              </div>
            </div>

            {/* Mappa piccola sotto ai contatti */}
            <div className="mt-6 w-full overflow-hidden rounded-sm" style={{ height: "200px" }}>
              <iframe
                src="https://maps.google.com/maps?q=Ca'+Bianchini+Agriturismo,+Via+Bianchini+10,+Lanzago+di+Silea+TV&z=14&output=embed&hl=it"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ca' Bianchini - Posizione"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Nome e cognome</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Mario Rossi" className={inputClass} style={{ fontFamily: "var(--font-body)" }} required />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="mario@email.com" className={inputClass} style={{ fontFamily: "var(--font-body)" }} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Telefono</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+39 000 0000000" className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Appartamento</label>
                  <select name="apartment" value={formData.apartment} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }}>
                    <option value="">Tutti</option>
                    <option value="Villa Anna">Villa Anna</option>
                    <option value="Villa Bina">Villa Bina</option>
                    <option value="Villa Coco">Villa Coco</option>
                    <option value="Villa Arzilla">Villa Arzilla</option>
                    <option value="Alloggio Marina">Alloggio Marina</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Check-in</label>
                  <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Check-out</label>
                  <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>

              <div>
                <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Numero ospiti</label>
                <input name="guests" type="number" min="1" max="20" value={formData.guests} onChange={handleChange} placeholder="2" className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
              </div>

              <div>
                <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>Messaggio</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Scrivi qui eventuali richieste o domande..." className={`${inputClass} resize-none`} style={{ fontFamily: "var(--font-body)" }} />
              </div>

              <button
                type="submit"
                className="w-full border border-[#2C2C2C] text-[#2C2C2C] py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#2C2C2C] hover:text-[#FAFAF7] transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Invia richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
