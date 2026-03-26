/*
 * Design: Campagna Editoriale
 * Home Page Ca' Bianchini - testi cliente, sezione appartamenti preview → pagina dedicata
 * Struttura: Hero → Intro → Appartamenti Preview → Il Soggiorno → I Dintorni → PreFooter Contatti → Footer
 */
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import HomeIntro from "@/components/HomeIntro";
import ApartmentsPreview from "@/components/ApartmentsPreview";
import SoggiornSection from "@/components/SoggiornSection";
import DintorniSection from "@/components/DintorniSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
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
