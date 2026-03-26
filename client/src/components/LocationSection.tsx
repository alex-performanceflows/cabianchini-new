/*
 * Design: Campagna Editoriale
 * Sezione posizione con immagine di Treviso e mappa Google Maps
 */
import { motion } from "framer-motion";
import { dintorniImages, contactInfo } from "@/lib/data";
import { MapPin, Clock, Bike } from "lucide-react";
const locationImage = dintorniImages.treviso;
import { MapView } from "@/components/Map";

export default function LocationSection() {
  return (
    <section id="posizione" className="py-14 md:py-14">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light text-[#2C2C2C] text-center mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Posizione
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-px bg-[#C4A265] mx-auto mb-6"
        />

        {/* Location image + text */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <img
              src={locationImage}
              alt="Treviso centro storico"
              className="w-full h-[350px] lg:h-full object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p
              className="text-[#2C2C2C]/70 text-[13px] leading-[1.6] mb-8 font-light"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              La tenuta agrituristica Ca' Bianchini è immersa nel rigoglioso verde
              della campagna trevigiana, in un'atmosfera piacevole e rilassante.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#C4A265] mt-0.5 shrink-0" strokeWidth={1.5} />
                <p
                  className="text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  A soli dieci minuti in auto dal centro storico di Treviso,
                  una delle città più interessanti della regione.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Bike size={20} className="text-[#C4A265] mt-0.5 shrink-0" strokeWidth={1.5} />
                <p
                  className="text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Raggiungibile in bicicletta in 15 minuti o a piedi in circa 40 minuti.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[#C4A265] mt-0.5 shrink-0" strokeWidth={1.5} />
                <p
                  className="text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  La vicinanza alle principali vie di comunicazione rende Ca' Bianchini
                  un ottimo punto di partenza per visitare Venezia e le altre città del Veneto.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C4A265]/20">
              <p
                className="text-[#2C2C2C] text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {contactInfo.address}
              </p>
              <p
                className="text-[#2C2C2C]/60 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {contactInfo.city}, {contactInfo.country}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="w-full h-[400px] overflow-hidden"
        >
          <MapView
            className="w-full h-full"
            onMapReady={(map) => {
              const position = { lat: 45.6167, lng: 12.2763 };
              map.setCenter(position);
              map.setZoom(14);
              new google.maps.Marker({
                position,
                map,
                title: "Ca' Bianchini Agriturismo",
              });
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
