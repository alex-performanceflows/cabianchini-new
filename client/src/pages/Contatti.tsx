/*
 * Design: Campagna Editoriale
 * Pagina Contatti - pagina generica di contatto
 * Struttura: Header → Hero testuale → Griglia info contatti → Mappa → Form generico → Footer
 * NO pre-footer prenotazione, NO modulo appartamenti
 */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { trackEvent } from "@/lib/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Contatti() {
  const { t } = useTranslation();
  useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...formData }),
      });
      if (res.ok) {
        trackEvent("contact_message", { subject: formData.subject || "non specificato" });
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <SeoHead page="contatti" />

      {/* Hero image full-screen */}
      <section className="relative h-screen overflow-hidden" data-hero="true">
        <img
          src="/images/header-contatti.webp"
          alt="Ca' Bianchini contatti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Intro testuale */}
      <section className="py-14 md:py-20 px-6 max-w-3xl mx-auto text-center">
        <h1
          className="text-3xl md:text-4xl font-light leading-[1.15] mb-6"
          style={{ fontFamily: "var(--font-heading)", color: "#2C2C2C" }}
        >
          {t("contatti.heroTitle")}
        </h1>
        <div className="w-10 h-px bg-[#C4A265] mx-auto mb-8" />
        <p className="text-[13px] text-[#5a5a5a] leading-[1.6] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Siamo a disposizione per qualsiasi informazione su Ca' Bianchini, gli appartamenti, la struttura o il territorio. Scrivici, chiamaci o vieni a trovarci.
        </p>
      </section>

      {/* Griglia info contatti */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Indirizzo */}
          <div className="bg-white border border-[#e8e4dc] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#C4A265]/10 rounded-sm flex items-center justify-center mb-4">
              <MapPin size={18} className="text-[#C4A265]" />
            </div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-2"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              {t("posizione.address_label")}
            </h3>
            <p className="text-[#2C2C2C] text-[13px] leading-[1.6]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Via Bianchini, 10<br />
              31057 Lanzago di Silea (TV)<br />
              Italia
            </p>
          </div>

          {/* Telefono */}
          <div className="bg-white border border-[#e8e4dc] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#C4A265]/10 rounded-sm flex items-center justify-center mb-4">
              <Phone size={18} className="text-[#C4A265]" />
            </div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-2"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Telefono
            </h3>
            <a
              href="tel:+393488144556"
              className="text-[#2C2C2C] text-[13px] leading-[1.6] hover:text-[#C4A265] transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              +39 348 814 4556
            </a>
          </div>

          {/* Email */}
          <div className="bg-white border border-[#e8e4dc] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#C4A265]/10 rounded-sm flex items-center justify-center mb-4">
              <Mail size={18} className="text-[#C4A265]" />
            </div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-2"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Email
            </h3>
            <a
              href="mailto:info@cabianchini.com"
              className="text-[#2C2C2C] text-[13px] leading-[1.6] hover:text-[#C4A265] transition-colors break-all"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              info@cabianchini.com
            </a>
          </div>

          {/* Orari risposta */}
          <div className="bg-white border border-[#e8e4dc] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#C4A265]/10 rounded-sm flex items-center justify-center mb-4">
              <Clock size={18} className="text-[#C4A265]" />
            </div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-2"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Rispondiamo
            </h3>
            <p className="text-[#2C2C2C] text-[13px] leading-[1.6]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Lun – Sab<br />
              9:00 – 19:00
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.facebook.com/agriturismocabianchini/?locale=it_IT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#5a5a5a] hover:text-[#C4A265] transition-colors"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <Facebook size={16} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/agriturismocabianchini/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#5a5a5a] hover:text-[#C4A265] transition-colors"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>
      </section>

      {/* Mappa + Form */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4dc]">

          {/* Mappa */}
          <div className="h-[500px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Ca'+Bianchini+Agriturismo,+Via+Bianchini+10,+Lanzago+di+Silea+TV&z=14&output=embed&hl=it"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ca' Bianchini Agriturismo - Mappa"
            />
          </div>

          {/* Form generico */}
          <div className="bg-white p-8 lg:p-12">
            <p className="text-xs tracking-[0.2em] text-[#C4A265] uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              {t("contatti.scrivici")}
            </p>
            <h2
              className="text-3xl font-light mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2C2C2C" }}
            >
              {t("contatti.title")}
            </h2>
            <div className="w-8 h-px bg-[#C4A265] mb-6" />
            <p className="text-sm text-[#5a5a5a] mb-8 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              {t("contatti.subtitle")}
            </p>

            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-[#C4A265]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-[#C4A265]" />
                </div>
                <p className="text-[#2C2C2C] font-medium mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                  {t("contatti.sent_title")}
                </p>
                <p className="text-sm text-[#5a5a5a]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {t("contatti.sent_subtitle")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#5a5a5a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {t("contatti.form.nome")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contatti.form.nome_placeholder")}
                      className="w-full border border-[#e8e4dc] bg-[#FAFAF7] px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#b0a898] focus:outline-none focus:border-[#C4A265] transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#5a5a5a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {t("contatti.form.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contatti.form.email_placeholder")}
                      className="w-full border border-[#e8e4dc] bg-[#FAFAF7] px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#b0a898] focus:outline-none focus:border-[#C4A265] transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#5a5a5a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {t("contatti.form.telefono")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contatti.form.telefono_placeholder")}
                      className="w-full border border-[#e8e4dc] bg-[#FAFAF7] px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#b0a898] focus:outline-none focus:border-[#C4A265] transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#5a5a5a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {t("contatti.oggetto_label")}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-[#e8e4dc] bg-[#FAFAF7] px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4A265] transition-colors appearance-none"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <option value="">{t("contatti.oggetto_placeholder")}</option>
                      <option value="Informazioni generali">{t("contatti.oggetto_info")}</option>
                      <option value="Disponibilità appartamenti">{t("contatti.oggetto_disponibilita")}</option>
                      <option value="Prezzi e tariffe">{t("contatti.oggetto_prezzi")}</option>
                      <option value="Come raggiungerci">{t("contatti.oggetto_come")}</option>
                      <option value="Altro">{t("contatti.oggetto_altro")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#5a5a5a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {t("contatti.form.messaggio")} *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t("contatti.form.messaggio_placeholder")}
                    className="w-full border border-[#e8e4dc] bg-[#FAFAF7] px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#b0a898] focus:outline-none focus:border-[#C4A265] transition-colors resize-none"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 text-center" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {t("contatti.error_msg")}{" "}
                    <a href="mailto:info@cabianchini.com" className="underline">info@cabianchini.com</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#2C2C2C] text-[#FAFAF7] py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#C4A265] transition-colors duration-300 disabled:opacity-50"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {status === "sending" ? "Invio in corso..." : t("contatti.form.invia")}
                </button>

                <p className="text-xs text-[#b0a898] text-center" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {t("contatti.alternativa")}{" "}
                  <a href="mailto:info@cabianchini.com" className="text-[#C4A265] hover:underline">
                    info@cabianchini.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Link Google Maps */}
        <div className="mt-4 text-right">
          <a
            href="https://maps.google.com/?q=Via+Bianchini+10+Lanzago+di+Silea+TV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-[#5a5a5a] hover:text-[#C4A265] transition-colors"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            {t("contatti.apri_maps")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
