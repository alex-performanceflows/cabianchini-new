/*
 * Privacy Policy — GDPR compliant
 * Titolare: Agriturismo Ca' Bianchini
 */
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <div className="w-10 h-px bg-[#C4A265] mb-10" />

          <div
            className="space-y-8 text-[#2C2C2C]/80 text-[14px] leading-[1.8]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              La presente informativa descrive le modalit&agrave; di trattamento dei dati personali degli utenti
              che consultano il sito web di Ca' Bianchini, ai sensi del Regolamento (UE) 2016/679 (GDPR)
              e del D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018.
            </p>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                1. Titolare del trattamento
              </h2>
              <p>
                Il Titolare del trattamento dei dati personali è:<br />
                <strong className="font-normal text-[#2C2C2C]">Agriturismo Ca' Bianchini</strong><br />
                Via Bianchini, 10 – 31057 Lanzago di Silea (TV)<br />
                C.F. 80123820153 – P.IVA 01132640267<br />
                Email: <a href="mailto:info@cabianchini.com" className="text-[#C4A265] hover:underline">info@cabianchini.com</a><br />
                Telefono: <a href="tel:+393488144556" className="text-[#C4A265] hover:underline">+39 348 814 4556</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                2. Dati raccolti
              </h2>
              <p className="mb-3">I dati personali trattati attraverso il sito sono:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="font-normal text-[#2C2C2C]">Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso. Questi dati sono raccolti automaticamente durante la navigazione.</li>
                <li><strong className="font-normal text-[#2C2C2C]">Dati forniti volontariamente:</strong> nome, cognome, email, telefono e messaggio inseriti nei moduli di contatto e richiesta prenotazione.</li>
                <li><strong className="font-normal text-[#2C2C2C]">Cookie:</strong> informazioni raccolte tramite cookie tecnici e di terze parti (vedi <a href="/cookie-policy" className="text-[#C4A265] hover:underline">Cookie Policy</a>).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                3. Finalità del trattamento
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rispondere alle richieste di informazioni e prenotazione inviate tramite i moduli di contatto.</li>
                <li>Gestire la navigazione del sito e garantirne il corretto funzionamento.</li>
                <li>Analisi statistica anonima delle visite al sito tramite strumenti di analytics.</li>
                <li>Adempiere ad obblighi di legge o regolamentari.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                4. Base giuridica del trattamento
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="font-normal text-[#2C2C2C]">Consenso</strong> (Art. 6.1.a GDPR): per l'invio di dati tramite moduli di contatto e per l'utilizzo di cookie non tecnici.</li>
                <li><strong className="font-normal text-[#2C2C2C]">Legittimo interesse</strong> (Art. 6.1.f GDPR): per la raccolta di dati di navigazione e l'analisi statistica anonima.</li>
                <li><strong className="font-normal text-[#2C2C2C]">Obbligo legale</strong> (Art. 6.1.c GDPR): per adempiere a obblighi normativi.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                5. Modalità di trattamento e conservazione
              </h2>
              <p>
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche organizzative
                e modalità strettamente correlate alle finalità indicate. I dati saranno conservati per il tempo
                strettamente necessario a conseguire le finalità per cui sono stati raccolti e comunque non oltre
                24 mesi dalla raccolta, salvo diversi obblighi di legge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                6. Comunicazione e diffusione dei dati
              </h2>
              <p>
                I dati personali non saranno diffusi, né comunicati a terzi, salvo che il trattamento
                sia necessario per adempiere a obblighi di legge o sia connesso alla gestione del rapporto
                con l'utente. I dati possono essere trattati da soggetti terzi che forniscono servizi
                strumentali (es. hosting, analytics), nominati Responsabili del trattamento ai sensi dell'Art. 28 GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                7. Servizi di terze parti
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="font-normal text-[#2C2C2C]">Google Maps (Google LLC)</strong> — utilizzato per visualizzare la posizione dell'agriturismo.
                  Può raccogliere dati di navigazione e cookie propri. Informativa privacy:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">policies.google.com/privacy</a>
                </li>
                <li>
                  <strong className="font-normal text-[#2C2C2C]">Google Analytics (Google LLC)</strong> — utilizzato per l'analisi statistica
                  delle visite al sito. Può raccogliere dati di navigazione e utilizzare cookie propri per finalità
                  di analisi. I dati sono trattati in forma anonimizzata. Informativa privacy:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">policies.google.com/privacy</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                8. Diritti dell'interessato
              </h2>
              <p className="mb-3">
                Ai sensi degli articoli 15-22 del GDPR, l'utente ha il diritto di:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Accedere ai propri dati personali.</li>
                <li>Richiederne la rettifica o la cancellazione.</li>
                <li>Limitare il trattamento o opporsi allo stesso.</li>
                <li>Richiedere la portabilità dei dati.</li>
                <li>Revocare il consenso in qualsiasi momento.</li>
                <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali ({" "}
                  <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#C4A265] hover:underline">www.garanteprivacy.it</a>).
                </li>
              </ul>
              <p className="mt-3">
                Per esercitare i propri diritti, è possibile contattare il Titolare all'indirizzo email{" "}
                <a href="mailto:info@cabianchini.com" className="text-[#C4A265] hover:underline">info@cabianchini.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                9. Modifiche alla presente informativa
              </h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento,
                dandone pubblicità agli utenti su questa pagina. Si prega di consultare periodicamente questa pagina
                per verificare eventuali aggiornamenti.
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
