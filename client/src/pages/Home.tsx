/*
 * Design: Campagna Editoriale
 * Home Page Ca' Bianchini - testi cliente, sezione appartamenti preview → pagina dedicata
 * Struttura: Hero → Intro → Appartamenti Preview → Il Soggiorno → I Dintorni → PreFooter Contatti → Footer
 */
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import HomeIntro from "@/components/HomeIntro";
import ApartmentsPreview from "@/components/ApartmentsPreview";
import SoggiornSection from "@/components/SoggiornSection";
import DintorniSection from "@/components/DintorniSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { useLanguage } from "@/hooks/useLanguage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Ca' Bianchini Agriturismo",
  "description": "Agriturismo con cinque appartamenti indipendenti immerso nella campagna veneta a Lanzago di Silea (TV), a pochi minuti da Treviso e Venezia.",
  "url": "https://cabianchini.com",
  "telephone": "+393488144556",
  "email": "info@cabianchini.com",
  "image": "https://cabianchini.com/images/slider_home/Home_Slider-1.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Bianchini, 10",
    "addressLocality": "Lanzago di Silea",
    "addressRegion": "TV",
    "postalCode": "31057",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.6583,
    "longitude": 12.2847
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parcheggio privato", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Ricarica auto elettriche", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cucina attrezzata", "value": true }
  ],
  "numberOfRooms": 5,
  "checkinTime": "15:00",
  "checkoutTime": "10:30",
  "sameAs": [
    "https://www.facebook.com/agriturismocabianchini/",
    "https://www.instagram.com/agriturismocabianchini/"
  ]
};

export default function Home() {
  useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jsonld-lodging";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById("jsonld-lodging")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <SeoHead page="home" />
      <HeroSlider />
      <HomeIntro />
      <ApartmentsPreview />
      <SoggiornSection />
      <DintorniSection />
      {/* Pre-footer con modulo richiesta disponibilità — id="prenota" per scroll dal tasto Prenota */}
      <ContactSection />
      <Footer />
    </div>
  );
}
