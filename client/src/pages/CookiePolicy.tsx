/*
 * Cookie Policy — GDPR / ePrivacy compliant — IT / EN
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function CookiePolicy() {
  const { lang } = useLanguage();
  const en = lang === "en";

  useEffect(() => {
    document.title = "Cookie Policy — Ca' Bianchini";
    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) { el = document.createElement("meta"); el.name = "robots"; document.head.appendChild(el); }
    el.content = "noindex, nofollow";
    return () => { el!.content = "index, follow"; };
  }, []);

  const s = {
    h2: "text-xl font-light text-[#2C2C2C] mb-3",
    h3: "text-sm font-medium text-[#2C2C2C] mb-2",
    link: "text-[#C4A265] hover:underline",
    th: "text-left py-2 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal",
    td: "py-2 pr-4",
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <div className="pt-28 md:pt-32" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Cookie Policy
          </h1>
          <div className="w-10 h-px bg-[#C4A265] mb-10" />

          <div className="space-y-8 text-[#2C2C2C]/80 text-[14px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>

            <p>
              {en
                ? "This Cookie Policy describes the types of cookies used by the Ca' Bianchini website and how users can manage them, in accordance with Art. 13 of EU Regulation 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy Directive)."
                : "La presente Cookie Policy descrive le tipologie di cookie utilizzati dal sito web di Ca' Bianchini e le modalità con cui l'utente può gestirli, ai sensi dell'Art. 13 del Regolamento (UE) 2016/679 (GDPR) e della Direttiva 2002/58/CE (Direttiva ePrivacy)."}
            </p>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "1. What are cookies" : "1. Cosa sono i cookie"}</h2>
              <p>
                {en
                  ? "Cookies are small text files that visited websites send to the user's browser, where they are stored and retransmitted to the same sites on subsequent visits. Cookies are used for various purposes, including storing browsing preferences and improving the user experience."
                  : "I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità, tra cui memorizzare le preferenze di navigazione e migliorare l'esperienza dell'utente."}
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "2. Cookies used by this site" : "2. Cookie utilizzati da questo sito"}</h2>

              <div className="space-y-5">
                <div>
                  <h3 className={s.h3}>{en ? "Technical cookies (necessary)" : "Cookie tecnici (necessari)"}</h3>
                  <p>
                    {en
                      ? "These cookies are essential for the correct functioning of the site. They include the consent cookie (to store the user's cookie preferences) and session cookies. They do not require user consent."
                      : "Sono cookie indispensabili per il corretto funzionamento del sito. Includono il cookie di consenso (per memorizzare le preferenze dell'utente sui cookie) e cookie di sessione. Non richiedono il consenso dell'utente."}
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#2C2C2C]/20">
                          <th className={s.th}>Cookie</th>
                          <th className={s.th}>{en ? "Purpose" : "Finalità"}</th>
                          <th className={s.th}>{en ? "Duration" : "Durata"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className={s.td}>cb_cookie_consent</td>
                          <td className={s.td}>{en ? "Stores the user's cookie preferences" : "Memorizza le preferenze cookie dell'utente"}</td>
                          <td className="py-2">{en ? "12 months" : "12 mesi"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className={s.h3}>{en ? "Analytical cookies" : "Cookie analitici"}</h3>
                  <p>
                    {en
                      ? "This site uses Google Analytics (Google LLC), a web analytics service that uses cookies to collect anonymous statistical data about site usage. Google Analytics cookies are installed only with the user's prior consent, in accordance with the Consent Mode v2 standard."
                      : "Questo sito utilizza Google Analytics (Google LLC), un servizio di analisi web che utilizza cookie per raccogliere dati statistici anonimi sull'utilizzo del sito. I cookie di Google Analytics vengono installati solo previo consenso dell'utente, nel rispetto dello standard Consent Mode v2."}{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className={s.link}>
                      policies.google.com/technologies/cookies
                    </a>
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#2C2C2C]/20">
                          <th className={s.th}>Cookie</th>
                          <th className={s.th}>{en ? "Purpose" : "Finalità"}</th>
                          <th className={s.th}>{en ? "Duration" : "Durata"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className={s.td}>_ga</td>
                          <td className={s.td}>{en ? "Distinguishes users for statistical analysis" : "Distingue gli utenti per analisi statistiche"}</td>
                          <td className="py-2">{en ? "24 months" : "24 mesi"}</td>
                        </tr>
                        <tr className="border-b border-[#2C2C2C]/10">
                          <td className={s.td}>_ga_*</td>
                          <td className={s.td}>{en ? "Maintains session state" : "Mantiene lo stato della sessione"}</td>
                          <td className="py-2">{en ? "24 months" : "24 mesi"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className={s.h3}>{en ? "Third-party cookies" : "Cookie di terze parti"}</h3>
                  <p>
                    {en
                      ? "The site embeds Google Maps via iframe. Google may set its own cookies when the maps load."
                      : "Il sito incorpora mappe di Google Maps tramite iframe. Google potrebbe impostare cookie propri durante il caricamento delle mappe."}{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className={s.link}>
                      policies.google.com/technologies/cookies
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "3. Managing cookies" : "3. Come gestire i cookie"}</h2>
              <p className="mb-3">
                {en
                  ? "You can manage your cookie preferences at any time through your browser settings. Links to the main browser guides:"
                  : "L'utente può gestire le proprie preferenze sui cookie in qualsiasi momento attraverso le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:"}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={s.link}>Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className={s.link}>Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className={s.link}>Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className={s.link}>Microsoft Edge</a></li>
              </ul>
              <p className="mt-3">
                {en
                  ? "Disabling cookies may limit the use of some features of the site."
                  : "La disabilitazione dei cookie potrebbe limitare l'utilizzo di alcune funzionalità del sito."}
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "4. Data Controller" : "4. Titolare del trattamento"}</h2>
              <p>
                <strong className="font-normal text-[#2C2C2C]">Agriturismo Ca' Bianchini</strong><br />
                Via Bianchini, 10 – 31057 Lanzago di Silea (TV)<br />
                Email: <a href="mailto:info@cabianchini.com" className={s.link}>info@cabianchini.com</a>
              </p>
            </section>

            <div className="pt-6 border-t border-[#2C2C2C]/10 text-[13px] text-[#2C2C2C]/50">
              <p>{en ? "Last updated: March 2026" : "Ultimo aggiornamento: marzo 2026"}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
