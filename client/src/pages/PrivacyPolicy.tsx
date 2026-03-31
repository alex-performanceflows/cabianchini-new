/*
 * Privacy Policy — GDPR compliant — IT / EN
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const en = lang === "en";

  useEffect(() => {
    document.title = "Privacy Policy — Ca' Bianchini";
    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) { el = document.createElement("meta"); el.name = "robots"; document.head.appendChild(el); }
    el.content = "noindex, nofollow";
    return () => { el!.content = "index, follow"; };
  }, []);

  const s = {
    h2: "text-xl font-light text-[#2C2C2C] mb-3",
    h3: "text-sm font-medium text-[#2C2C2C] mb-2",
    link: "text-[#C4A265] hover:underline",
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <div className="pt-28 md:pt-32" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Privacy Policy
          </h1>
          <div className="w-10 h-px bg-[#C4A265] mb-10" />

          <div className="space-y-8 text-[#2C2C2C]/80 text-[14px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>

            {en ? (
              <p>This privacy notice describes how Ca' Bianchini processes the personal data of users who visit this website, in accordance with EU Regulation 2016/679 (GDPR).</p>
            ) : (
              <p>La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di Ca' Bianchini, ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018.</p>
            )}

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "1. Data Controller" : "1. Titolare del trattamento"}</h2>
              <p>
                <strong className="font-normal text-[#2C2C2C]">Agriturismo Ca' Bianchini</strong><br />
                Via Bianchini, 10 – 31057 Lanzago di Silea (TV)<br />
                C.F. 80123820153 – P.IVA 01132640267<br />
                Email: <a href="mailto:info@cabianchini.com" className={s.link}>info@cabianchini.com</a><br />
                {en ? "Phone" : "Telefono"}: <a href="tel:+393488144556" className={s.link}>+39 348 814 4556</a>
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "2. Data collected" : "2. Dati raccolti"}</h2>
              <p className="mb-3">{en ? "Personal data processed through this website:" : "I dati personali trattati attraverso il sito sono:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                {en ? (
                  <>
                    <li><strong className="font-normal text-[#2C2C2C]">Browsing data:</strong> IP address, browser type, operating system, pages visited, access times. Collected automatically during navigation.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Voluntarily provided data:</strong> name, email, phone and message submitted through contact and booking request forms.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Cookies:</strong> information collected through technical and third-party cookies (see <a href="/en/cookie-policy" className={s.link}>Cookie Policy</a>).</li>
                  </>
                ) : (
                  <>
                    <li><strong className="font-normal text-[#2C2C2C]">Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso. Raccolti automaticamente durante la navigazione.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Dati forniti volontariamente:</strong> nome, cognome, email, telefono e messaggio inseriti nei moduli di contatto e richiesta prenotazione.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Cookie:</strong> informazioni raccolte tramite cookie tecnici e di terze parti (vedi <a href="/it/cookie-policy" className={s.link}>Cookie Policy</a>).</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "3. Purposes of processing" : "3. Finalità del trattamento"}</h2>
              <ul className="list-disc pl-5 space-y-1">
                {en ? (
                  <>
                    <li>Responding to information and booking requests submitted through contact forms.</li>
                    <li>Managing website navigation and ensuring its proper functioning.</li>
                    <li>Anonymous statistical analysis of site visits through analytics tools.</li>
                    <li>Complying with legal or regulatory obligations.</li>
                  </>
                ) : (
                  <>
                    <li>Rispondere alle richieste di informazioni e prenotazione inviate tramite i moduli di contatto.</li>
                    <li>Gestire la navigazione del sito e garantirne il corretto funzionamento.</li>
                    <li>Analisi statistica anonima delle visite al sito tramite strumenti di analytics.</li>
                    <li>Adempiere ad obblighi di legge o regolamentari.</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "4. Legal basis" : "4. Base giuridica del trattamento"}</h2>
              <ul className="list-disc pl-5 space-y-1">
                {en ? (
                  <>
                    <li><strong className="font-normal text-[#2C2C2C]">Consent</strong> (Art. 6.1.a GDPR): for data submitted via contact forms and for the use of non-technical cookies.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Legitimate interest</strong> (Art. 6.1.f GDPR): for the collection of browsing data and anonymous statistical analysis.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Legal obligation</strong> (Art. 6.1.c GDPR): to comply with regulatory obligations.</li>
                  </>
                ) : (
                  <>
                    <li><strong className="font-normal text-[#2C2C2C]">Consenso</strong> (Art. 6.1.a GDPR): per l'invio di dati tramite moduli di contatto e per l'utilizzo di cookie non tecnici.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Legittimo interesse</strong> (Art. 6.1.f GDPR): per la raccolta di dati di navigazione e l'analisi statistica anonima.</li>
                    <li><strong className="font-normal text-[#2C2C2C]">Obbligo legale</strong> (Art. 6.1.c GDPR): per adempiere a obblighi normativi.</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "5. Data retention" : "5. Modalità di trattamento e conservazione"}</h2>
              <p>
                {en
                  ? "Personal data are processed using electronic tools, with organisational methods strictly related to the stated purposes. Data will be retained for as long as strictly necessary to achieve the purposes for which they were collected, and in any case no longer than 24 months from collection, unless otherwise required by law."
                  : "I dati personali sono trattati con strumenti informatici e/o telematici, con logiche organizzative e modalità strettamente correlate alle finalità indicate. I dati saranno conservati per il tempo strettamente necessario a conseguire le finalità per cui sono stati raccolti e comunque non oltre 24 mesi dalla raccolta, salvo diversi obblighi di legge."}
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "6. Data sharing" : "6. Comunicazione e diffusione dei dati"}</h2>
              <p>
                {en
                  ? "Personal data will not be disclosed or communicated to third parties, unless processing is necessary to comply with legal obligations or is connected to managing the relationship with the user. Data may be processed by third parties providing instrumental services (e.g. hosting, analytics), appointed as Data Processors pursuant to Art. 28 GDPR."
                  : "I dati personali non saranno diffusi, né comunicati a terzi, salvo che il trattamento sia necessario per adempiere a obblighi di legge o sia connesso alla gestione del rapporto con l'utente. I dati possono essere trattati da soggetti terzi che forniscono servizi strumentali (es. hosting, analytics), nominati Responsabili del trattamento ai sensi dell'Art. 28 GDPR."}
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "7. Third-party services" : "7. Servizi di terze parti"}</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="font-normal text-[#2C2C2C]">Google Maps (Google LLC)</strong> —{" "}
                  {en ? "used to display the farmhouse location. May collect browsing data and its own cookies." : "utilizzato per visualizzare la posizione dell'agriturismo. Può raccogliere dati di navigazione e cookie propri."}{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={s.link}>policies.google.com/privacy</a>
                </li>
                <li>
                  <strong className="font-normal text-[#2C2C2C]">Google Analytics (Google LLC)</strong> —{" "}
                  {en
                    ? "used for statistical analysis of site visits. Activated only with the user's consent. Data are processed in anonymised form."
                    : "utilizzato per l'analisi statistica delle visite al sito. Attivato solo previo consenso dell'utente. I dati sono trattati in forma anonimizzata."}{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={s.link}>policies.google.com/privacy</a>
                </li>
                <li>
                  <strong className="font-normal text-[#2C2C2C]">Resend (Resend Inc.)</strong> —{" "}
                  {en
                    ? "used to deliver messages submitted via the contact form. Processes name, email and message content solely for delivery purposes."
                    : "utilizzato per recapitare i messaggi inviati tramite il modulo di contatto. Tratta nome, email e contenuto del messaggio esclusivamente ai fini della consegna."}{" "}
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={s.link}>resend.com/legal/privacy-policy</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "8. Your rights" : "8. Diritti dell'interessato"}</h2>
              <p className="mb-3">{en ? "Under Articles 15–22 of the GDPR, you have the right to:" : "Ai sensi degli articoli 15-22 del GDPR, l'utente ha il diritto di:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                {en ? (
                  <>
                    <li>Access your personal data.</li>
                    <li>Request rectification or erasure.</li>
                    <li>Restrict or object to processing.</li>
                    <li>Request data portability.</li>
                    <li>Withdraw consent at any time.</li>
                    <li>Lodge a complaint with the supervisory authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={s.link}>www.garanteprivacy.it</a>).</li>
                  </>
                ) : (
                  <>
                    <li>Accedere ai propri dati personali.</li>
                    <li>Richiederne la rettifica o la cancellazione.</li>
                    <li>Limitare il trattamento o opporsi allo stesso.</li>
                    <li>Richiedere la portabilità dei dati.</li>
                    <li>Revocare il consenso in qualsiasi momento.</li>
                    <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={s.link}>www.garanteprivacy.it</a>).</li>
                  </>
                )}
              </ul>
              <p className="mt-3">
                {en ? "To exercise your rights, contact the Data Controller at " : "Per esercitare i propri diritti, è possibile contattare il Titolare all'indirizzo email "}
                <a href="mailto:info@cabianchini.com" className={s.link}>info@cabianchini.com</a>.
              </p>
            </section>

            <section>
              <h2 className={s.h2} style={{ fontFamily: "var(--font-heading)" }}>{en ? "9. Changes to this notice" : "9. Modifiche alla presente informativa"}</h2>
              <p>
                {en
                  ? "The Data Controller reserves the right to make changes to this notice at any time, publishing the updated version on this page. Please check this page periodically for any updates."
                  : "Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento, dandone pubblicità agli utenti su questa pagina. Si prega di consultare periodicamente questa pagina per verificare eventuali aggiornamenti."}
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
