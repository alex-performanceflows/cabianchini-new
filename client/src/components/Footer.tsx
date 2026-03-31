/*
 * Design: Campagna Editoriale
 * Footer elegante con contatti, social e informazioni legali
 */
import { useTranslation } from "react-i18next";
import { contactInfo } from "@/lib/data";
import { Mail, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation();
  const lang = useLanguage();

  const erogazioniHref =
    lang === "it"
      ? "/it/informativa-erogazioni-pubbliche"
      : "/en/public-grants";

  return (
    <footer id="contatti" className="bg-[#2C2C2C] text-white/80">
      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl md:text-2xl text-white font-light mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ca' Bianchini
            </h3>
            <div className="w-8 h-px bg-[#C4A265] mb-4" />
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("footer.contatti")}
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm hover:text-[#C4A265] transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <Mail size={16} strokeWidth={1.5} className="text-[#C4A265]" />
                {contactInfo.email}
              </a>
              <a
                href="tel:+393488144556"
                className="flex items-center gap-3 text-sm hover:text-[#C4A265] transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <Phone size={16} strokeWidth={1.5} className="text-[#C4A265]" />
                +39 348 814 4556
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                <MapPin size={16} strokeWidth={1.5} className="text-[#C4A265] mt-0.5 shrink-0" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("footer.seguici")}
            </h4>
            <div className="flex gap-4 mb-8">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/393488144556"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <div className="text-xs text-white/30 space-y-1" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <p>C.F. {contactInfo.cf}</p>
              <p>P.IVA {contactInfo.vat}</p>
              <p>CIN: {contactInfo.cin}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            {t("footer.copyright", { year: new Date().getFullYear() })}{" "}
            <a href="https://performanceflows.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A265] transition-colors duration-300">Performance Flows</a>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <LanguageSwitcher variant="text" />
            <Link
              href={`/${lang}/privacy-policy`}
              className="text-xs text-white/30 hover:text-[#C4A265] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href={`/${lang}/cookie-policy`}
              className="text-xs text-white/30 hover:text-[#C4A265] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {t("footer.cookie")}
            </Link>
            <Link
              href={erogazioniHref}
              className="text-xs text-white/30 hover:text-[#C4A265] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {t("footer.erogazioni")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
