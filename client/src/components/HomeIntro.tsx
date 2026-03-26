/*
 * Design: Campagna Editoriale
 * Sezione introduttiva Home — pattern I Pini: titolo centrato → testo centrato → 2 foto affiancate
 */
import { motion } from "framer-motion";


export default function HomeIntro() {
  return (
    <section className="py-14 md:py-14">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ca' Bianchini
          </h2>

          <div
            className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              Immerso nella campagna veneta, Ca' Bianchini è un agriturismo con appartamenti
              indipendenti situato all'interno di una proprietà agricola che appartiene alla
              nostra famiglia da generazioni. Qui la terra continua a essere vissuta e curata
              con attenzione, nel rispetto dei suoi ritmi.
            </p>
            <p>
              La casa di campagna è stata restaurata preservandone la semplicità e la struttura
              originaria, aprendola all'ospitalità. I cinque appartamenti indipendenti offrono
              spazi luminosi e curati, pensati per vivere il soggiorno con autonomia.
            </p>
            <p>
              Le giornate scorrono tra campi e natura. La piscina, immersa nel verde, è uno
              spazio dove fermarsi e godere dell'aria aperta. La posizione permette di raggiungere
              facilmente Treviso, Venezia e le colline del Prosecco, per poi rientrare in un
              contesto tranquillo e autentico.
            </p>
          </div>

          <p
            className="text-[#2C2C2C] text-[13px] italic mb-6"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            Accogliamo chi sceglie la natura e ne condivide il rispetto.
          </p>
        </motion.div>
      </div>

      {/* Foto Ca' Bianchini — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-10 w-full -mb-1"
      >
        <img
          src="/images/full-length-location.webp"
          alt="Ca' Bianchini agriturismo"
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  );
}
