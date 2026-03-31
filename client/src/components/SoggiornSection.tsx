/*
 * Design: Campagna Editoriale
 * Sezione "Il Soggiorno" — titolo centrato → testo centrato → carosello 2 foto alla volta
 */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const soggiornSlides = [
  { src: "/images/slider_soggiorno/Slider_Soggiorno-1.webp", alt: "Ca' Bianchini campagna" },
  { src: "/images/slider_soggiorno/Slider_Soggiorno-3.webp", alt: "Ca' Bianchini piscina" },
  { src: "/images/slider_soggiorno/Slider_Soggiorno-4.webp", alt: "Ca' Bianchini tramonto" },
  { src: "/images/slider_soggiorno/Slider_Soggiorno-5.webp", alt: "Ca' Bianchini natura" },
  { src: "/images/slider_soggiorno/Slider_Soggiorno-6.webp", alt: "Ca' Bianchini verde" },
];

export default function SoggiornSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-14">
      <div className="max-w-3xl mx-auto px-6 text-center mb-6">
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
            {t("home.soggiorno.title")}
          </h2>

          <div
            className="space-y-3 text-[#2C2C2C]/70 text-[13px] leading-[1.6]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>{t("home.soggiorno.p1")}</p>
            <p>{t("home.soggiorno.p2")}</p>
          </div>
        </motion.div>
      </div>

      {/* Carosello 2 foto alla volta */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {soggiornSlides.map((slide, i) => (
                <CarouselItem key={i} className="pl-4 basis-1/2">
                  <div className="overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-64 md:h-96 object-cover hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-5 bg-white/80 hover:bg-white border-0 shadow-md" />
            <CarouselNext className="right-2 md:-right-5 bg-white/80 hover:bg-white border-0 shadow-md" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
