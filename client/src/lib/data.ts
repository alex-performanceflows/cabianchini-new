/*
 * Design: Campagna Editoriale
 * Dati Ca' Bianchini - testi e immagini aggiornati dal cliente
 */

export interface Apartment {
  id: string;
  name: string;
  capacity: string;
  sqm: number;
  beds: string;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  petsAllowed: boolean;
  disabledAccess?: boolean;
}

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663140576256/RDeGQpYXuvox6UhAZuA9kb";

export const apartments: Apartment[] = [
  {
    id: "villa-anna",
    name: "Villa Anna",
    capacity: "Fino a 8 persone",
    sqm: 205,
    beds: "2 + 2 + 2 + 1 + 1",
    bathrooms: 4,
    description: "Villa Anna è l'appartamento più ampio di Ca' Bianchini, sviluppato su due livelli con ambienti luminosi. La cucina semi-professionale e gli ampi spazi lo rendono ideale per chi desidera soggiornare insieme con comodità.",
    features: ["Cucina semi-professionale", "Portico frontale", "Sala lettura", "Due livelli", "Pompa di calore"],
    images: [
      `${CDN}/anna_1_7c5f01a6.jpg`,
      `${CDN}/anna_2_ae7ab304.jpg`,
      `${CDN}/anna_3_0f813245.jpg`,
      `${CDN}/anna_4_2062a1bf.jpg`,
      `${CDN}/anna_5_1adf3ad5.jpg`,
    ],
    petsAllowed: true,
  },
  {
    id: "villa-bina",
    name: "Villa Bina",
    capacity: "Fino a 6 persone",
    sqm: 110,
    beds: "2 + 2 + 2",
    bathrooms: 4,
    description: "Villa Bina si sviluppa su due livelli e dispone di tre camere. Un appartamento luminoso e accogliente, con accesso agli spazi esterni sul retro.",
    features: ["Tre camere", "Spazi esterni sul retro", "Balcone condiviso", "Due livelli", "Pompa di calore"],
    images: [
      "/images/appartamenti/villa-bina/Villa-Bina_Slider1.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider2.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider3.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider4.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider5.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider6.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider7.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider8.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider9.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider10.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider11.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider12.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider13.webp",
      "/images/appartamenti/villa-bina/Villa-Bina_Slider14.webp",
    ],
    petsAllowed: false,
  },
  {
    id: "villa-coco",
    name: "Villa Coco",
    capacity: "Fino a 4 persone",
    sqm: 90,
    beds: "2 + 2",
    bathrooms: 3,
    description: "Villa Coco si sviluppa su due livelli e dispone di due camere. Ambienti luminosi con accesso agli spazi esterni sul retro.",
    features: ["Due camere", "Spazi esterni sul retro", "Due livelli", "Pompa di calore"],
    images: [
      `${CDN}/coco_1_008a6686.jpg`,
      `${CDN}/coco_2_6e46c841.jpg`,
      `${CDN}/coco_3_b8f0c6fb.jpg`,
      `${CDN}/coco_4_5ac45d47.jpg`,
    ],
    petsAllowed: false,
  },
  {
    id: "villa-arzilla",
    name: "Villa Arzilla",
    capacity: "Fino a 3 persone",
    sqm: 77,
    beds: "2 + 1",
    bathrooms: 2,
    description: "Villa Arzilla si sviluppa su due livelli e dispone di bagno attrezzato per persone con disabilità motoria. Ambienti luminosi con accesso agli spazi esterni sul retro.",
    features: ["Accessibile disabili", "Spazi esterni sul retro", "Balcone condiviso", "Due livelli", "Pompa di calore"],
    images: Array.from({ length: 10 }, (_, i) => `/images/villa-arzilla/Villa-Arzilla_Slider-${i + 1}.webp`),
    petsAllowed: true,
    disabledAccess: true,
  },
  {
    id: "alloggio-marina",
    name: "Alloggio Marina",
    capacity: "Fino a 2 persone",
    sqm: 50,
    beds: "2",
    bathrooms: 1,
    description: "Alloggio Marina si sviluppa interamente al piano terra ed è situato in una struttura adiacente alla casa principale. Dispone di un portico con tavolino, ideale per godersi la tranquillità della campagna.",
    features: ["Piano terra", "Portico con tavolino", "Struttura indipendente", "Pompa di calore"],
    images: [
      `${CDN}/marina_1_e481995b.jpg`,
      `${CDN}/marina_2_71acb501.jpg`,
      `${CDN}/marina_3_3c851c9a.jpg`,
      `${CDN}/marina_4_1de73c52.jpg`,
    ],
    petsAllowed: true,
  },
];

export const heroImages = [
  "/images/slider_home/Header_Slider-1.webp",
  "/images/slider_home/Header_Slider-2.webp",
  "/images/slider_home/Header_Slider-3.webp",
  "/images/slider_home/Header_Slider-4.webp",
  "/images/slider_home/Header_Slider-5.webp",
  "/images/slider_home/Header_Slider-6.webp",
  "/images/slider_home/Header_Slider-7.webp",
];

// Immagini per la sezione "Il Soggiorno" (piscina / campagna)
export const soggiornImages = {
  piscina: `${CDN}/DSC_1343or_25ba197c.webp`,
  campagna: `${CDN}/DSC_9658v_6f11a8ff.webp`,
  tramonto: `${CDN}/DSC_4320e_1884434a.webp`,
};

// Immagini per i dintorni
export const dintorniImages = {
  treviso: `${CDN}/Treviso_canali_ceb05157.webp`,
  trevisoMura: `${CDN}/Treviso_mura_38c66a64.webp`,
  venezia: `${CDN}/Venezia2_3d1c3ec8.webp`,
  venezia3: `${CDN}/Venezia3_473da72a.webp`,
  prosecco: `${CDN}/Dolomiti1_40eec282.webp`,
  dolomiti: `${CDN}/Dolomiti1_40eec282.webp`,
  laguna: `${CDN}/Laguna_ca877e35.webp`,
  ciclovia: `${CDN}/Ciclovia_Sile_ee39746c.webp`,
  arte1: `${CDN}/Arte1_331a9c6f.webp`,
  arte2: `${CDN}/Arte2_8cf8445b.webp`,
  arte3: `${CDN}/arte3_14044187.webp`,
};

// Immagine per la sezione appartamenti in home
export const apartmentsPreviewImage = `${CDN}/DSC_2221e_51ea03bc.webp`;

export const logoUrl = "/images/cabianchini-logo.png";
export const logoWhiteUrl = "/images/cabianchini-logo-white.png";

export const services = [
  "Cucina attrezzata",
  "Sistema centralizzato di riscaldamento e raffrescamento alimentato da pompe di calore",
  "Wi-Fi",
  "Biancheria da letto e da bagno",
  "Asciugamani per piscina",
  "Set di cortesia",
  "Spazi esterni con tavolino",
  "Parcheggio interno alla struttura",
  "Colonnina di ricarica per auto elettriche",
  "Lavanderia in comune",
];

export const contactInfo = {
  name: "Agriturismo Ca' Bianchini",
  address: "Via Bianchini, 10",
  city: "31057 Lanzago di Silea (TV)",
  country: "Italia",
  email: "info@cabianchini.com",
  cf: "80120153",
  vat: "01132640267",
  cin: "IT026081B5H3NYFQMK",
  facebook: "https://www.facebook.com/agriturismocabianchini/?locale=it_IT",
  instagram: "https://www.instagram.com/agriturismocabianchini/",
};
