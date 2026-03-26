/*
 * Cookie consent banner — GDPR compliant
 * Salva la preferenza in localStorage come "cb_cookie_consent"
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cb_cookie_consent");
    if (!consent) {
      // Mostra il banner dopo un breve delay per non bloccare il rendering
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cb_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cb_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#2C2C2C] text-white/80 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p
          className="text-[13px] leading-[1.7] flex-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Questo sito utilizza cookie tecnici e di terze parti per migliorare la tua esperienza di navigazione.
          Per maggiori informazioni consulta la nostra{" "}
          <Link
            href="/cookie-policy"
            className="text-[#C4A265] hover:underline"
          >
            Cookie Policy
          </Link>{" "}
          e la{" "}
          <Link
            href="/privacy-policy"
            className="text-[#C4A265] hover:underline"
          >
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs tracking-[0.15em] uppercase border border-white/30 text-white/60 px-5 py-2.5 hover:border-white hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Rifiuta
          </button>
          <button
            onClick={handleAccept}
            className="text-xs tracking-[0.15em] uppercase bg-[#C4A265] text-white px-5 py-2.5 hover:bg-[#b5934f] transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
