/*
 * Cookie Policy — GDPR / Direttiva ePrivacy compliant
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function CookiePolicy() {
  useLanguage();

  useEffect(() => {
    document.title = "Cookie Policy — Ca' Bianchini";
    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) { el = document.createElement("meta"); el.name = "robots"; document.head.appendChild(el); }
    el.content = "noindex, nofollow";
    return () => { el!.content = "index, follow"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <div className="pt-28 md:pt-32" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cookie Policy
          </h1>
          <div className="w-10 h-px bg-[#C4A265] mb-10" />

          <div
            className="space-y-8 text-[#2C2C2C]/80 text-[14px] leading-[1.8]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              La presente Cookie Policy descrive le tipologie di cookie utilizzati dal sito web
              di Ca' Bianchini e le modalità con cui l'utente può gestirli, ai sensi dell'Art. 13
              del Regolamento (UE) 2016/679 (GDPR) e della Direttiva 2002/58/CE (Direttiva ePrivacy).
            </p>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                1. Cosa sono i cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente,
                dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
                I cookie sono utilizzati per diverse finalità, tra cui memorizzare le preferenze di navigazione
                e migliorare l'esperienza dell'utente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                2. Cookie utilizzati da questo sito
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-medium text-[#2C2C2C] mb-2">Cookie tecnici (necessari)</h3>
                  <p>
                    Sono cookie indispensabili per il corretto funzionamento del sito. Includono il cookie
                    di consenso (per memorizzare le preferenze dell'utente sui cookie) e cookie di sessione.
                    Non richiedono il consenso dell'utente.
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#2C2C2C]/20">
                          <th className="text-left py-2 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Cookie</th>
                          <th className="text-left py-2 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Finalità</th>
                          <th className="text-left py-2 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className="py-2 pr-4">cb_cookie_consent</td>
                          <td className="py-2 pr-4">Memorizza le preferenze cookie dell'utente</td>
                          <td className="py-2">12 mesi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#2C2C2C] mb-2">Cookie analitici</h3>
                  <p>
                    Questo sito potrebbe utilizzare Google Analytics (Google LLC), un servizio di analisi web
                    che utilizza cookie per raccogliere dati statistici anonimi sull'utilizzo del sito. I cookie
                    di Google Analytics vengono installati solo previo consenso dell'utente. Per maggiori informazioni:{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">
                      policies.google.com/technologies/cookies
                    </a>
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#2C2C2C]/20">
                          <th className="text-left py-2 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Cookie</th>
                          <th className="text-left py-2 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Finalità</th>
                          <th className="text-left py-2 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className="py-2 pr-4">_ga</td>
                          <td className="py-2 pr-4">Distingue gli utenti per analisi statistiche</td>
                          <td className="py-2">24 mesi</td>
                        </tr>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className="py-2 pr-4">_ga_*</td>
                          <td className="py-2 pr-4">Mantiene lo stato della sessione</td>
                          <td className="py-2">24 mesi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#2C2C2C] mb-2">Cookie di terze parti</h3>
                  <p>
                    Il sito incorpora mappe di Google Maps tramite iframe. Google potrebbe impostare
                    cookie propri durante il caricamento delle mappe. Per maggiori informazioni sui cookie
                    di Google, consultare:{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">
                      policies.google.com/technologies/cookies
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                3. Come gestire i cookie
              </h2>
              <p className="mb-3">
                L'utente può gestire le proprie preferenze sui cookie in qualsiasi momento attraverso
                le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-3">
                La disabilitazione dei cookie potrebbe limitare l'utilizzo di alcune funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                4. Titolare del trattamento
              </h2>
              <p>
                <strong className="font-normal text-[#2C2C2C]">Agriturismo Ca' Bianchini</strong><br />
                Via Bianchini, 10 – 31057 Lanzago di Silea (TV)<br />
                Email: <a href="mailto:info@cabianchini.com" className="text-[#C4A265] hover:underline">info@cabianchini.com</a>
              </p>
            </section>

            <div className="pt-6 border-t border-[#2C2C2C]/10 text-[13px] text-[#2C2C2C]/50">
              <p>Ultimo aggiornamento: marzo 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
