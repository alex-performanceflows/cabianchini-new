/*
 * Design: Campagna Editoriale
 * Footer elegante con contatti, social e informazioni legali
 */
import { contactInfo } from "@/lib/data";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
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
              Agriturismo immerso nel verde della campagna trevigiana,
              a pochi minuti dal centro storico di Treviso.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contatti
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
              Seguici
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
            &copy; {new Date().getFullYear()} Ca' Bianchini. Tutti i diritti riservati.
          </p>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs text-white/30 hover:text-[#C4A265] transition-colors duration-300 tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Torna su
          </a>
        </div>
      </div>
    </footer>
  );
}
