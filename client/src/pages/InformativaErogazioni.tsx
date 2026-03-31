/*
 * Pagina Informativa Erogazioni Pubbliche
 * Obbligatoria ai sensi della Legge 124/2017, Art. 1, comma 125-bis
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function InformativaErogazioni() {
  useLanguage();

  useEffect(() => {
    document.title = "Erogazioni Pubbliche — Ca' Bianchini";
    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) { el = document.createElement("meta"); el.name = "robots"; document.head.appendChild(el); }
    el.content = "noindex, nofollow";
    return () => { el!.content = "index, follow"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />

      {/* Spacer per header fisso */}
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
            Informativa Erogazioni Pubbliche
          </h1>
          <div className="w-10 h-px bg-[#C4A265] mb-10" />

          <div
            className="space-y-6 text-[#2C2C2C]/80 text-[14px] leading-[1.8]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              In ottemperanza a quanto previsto dalla Legge 4 agosto 2017, n. 124, art. 1, comma 125-bis,
              si pubblicano le informazioni relative a sovvenzioni, sussidi, vantaggi, contributi o aiuti,
              in denaro o in natura, non aventi carattere generale e privi di natura corrispettiva,
              retributiva o risarcitoria, erogati nell'esercizio finanziario precedente dalle pubbliche
              amministrazioni.
            </p>

            <div className="my-10">
              <h2
                className="text-xl font-light text-[#2C2C2C] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Aiuti non pubblicati nel Registro Nazionale Aiuti di Stato
              </h2>

              <p className="mb-4 text-[13px] text-[#2C2C2C]/60">
                Alcuni aiuti de minimis sono stati pubblicati nel Registro Nazionale Aiuti di Stato.
                Di seguito gli ulteriori aiuti non pubblicati in tale registro:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#2C2C2C]/20">
                      <th className="text-left py-3 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">
                        Ente erogante
                      </th>
                      <th className="text-left py-3 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">
                        C.F. Ente
                      </th>
                      <th className="text-right py-3 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">
                        Importo
                      </th>
                      <th className="text-left py-3 pr-4 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">
                        Anno
                      </th>
                      <th className="text-left py-3 text-xs tracking-[0.1em] uppercase text-[#2C2C2C]/50 font-normal">
                        Causale
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2C2C2C]/10">
                      <td className="py-3 pr-4">Comune di Silea</td>
                      <td className="py-3 pr-4 text-[#2C2C2C]/60">80007710264</td>
                      <td className="py-3 pr-4 text-right">€ 4.135,00</td>
                      <td className="py-3 pr-4">2020</td>
                      <td className="py-3 text-[13px]">Anticipo IMU (Art. 177, DL 34/2020)</td>
                    </tr>
                    <tr className="border-b border-[#2C2C2C]/10">
                      <td className="py-3 pr-4">Comune di Silea</td>
                      <td className="py-3 pr-4 text-[#2C2C2C]/60">80007710264</td>
                      <td className="py-3 pr-4 text-right">€ 4.136,00</td>
                      <td className="py-3 pr-4">2020</td>
                      <td className="py-3 text-[13px]">Saldo IMU (Art. 78, DL 104/2020)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2C2C2C]/10">
              <p className="text-[13px] text-[#2C2C2C]/50">
                <strong className="text-[#2C2C2C]/70 font-normal">Agriturismo Ca' Bianchini</strong><br />
                Via Bianchini, 10 – 31057 Lanzago di Silea (TV)<br />
                C.F. 80123820153 – P.I. 01132640267
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
