/*
 * Design: Campagna Editoriale
 * Sezione Contatti / Richiesta disponibilità
 * Layout: testo a sinistra, form a destra
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "booking", ...formData }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
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
              {t("contact_section.label")}
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("contact_section.title")}
            </h2>
            <div className="w-10 h-px bg-[#C4A265] mb-8" />
            <p className="text-[#2C2C2C]/65 text-[13px] leading-[1.6] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {t("contact_section.subtitle")}
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

            {/* Servizi extra */}
            <p
              className="mt-5 text-[13px] text-[#2C2C2C]/60 leading-[1.7]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <Trans
                i18nKey="contact_section.servizi_extra"
                components={{
                  bike: (
                    <a
                      href="https://treviso.bike/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4A265] hover:underline"
                    />
                  ),
                  tel: (
                    <a
                      href="tel:+393473059916"
                      className="text-[#C4A265] hover:underline"
                    />
                  ),
                }}
              />
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "sent" ? (
              <div className="flex flex-col justify-center h-full py-16 text-center">
                <p className="text-2xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {t("contact_section.sent_title")}
                </p>
                <div className="w-8 h-px bg-[#C4A265] mx-auto mb-4" />
                <p className="text-[13px] text-[#2C2C2C]/60" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {t("contact_section.sent_subtitle")}
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.nome")}
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact_section.form.nome_placeholder")}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-body)" }}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.email")}
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact_section.form.email_placeholder")}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-body)" }}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.telefono")}
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact_section.form.telefono_placeholder")}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.appartamento")}
                  </label>
                  <select name="apartment" value={formData.apartment} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }}>
                    <option value="">{t("contact_section.form.tutti")}</option>
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
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.checkin")}
                  </label>
                  <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                    {t("contact_section.form.checkout")}
                  </label>
                  <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>

              <div>
                <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact_section.form.ospiti")}
                </label>
                <input
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder={t("contact_section.form.ospiti_placeholder")}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              <div>
                <label className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact_section.form.messaggio")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("contact_section.form.messaggio_placeholder")}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500 text-center" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact_section.error_msg")}{" "}
                  <a href="mailto:info@cabianchini.com" className="underline">info@cabianchini.com</a>.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full border border-[#2C2C2C] text-[#2C2C2C] py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#2C2C2C] hover:text-[#FAFAF7] transition-all duration-300 disabled:opacity-50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {status === "sending" ? "Invio in corso..." : t("contact_section.form.invia")}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
