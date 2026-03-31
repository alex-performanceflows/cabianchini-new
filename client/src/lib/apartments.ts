const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663140576256/RDeGQpYXuvox6UhAZuA9kb";

export interface Apartment {
  id: string;
  name: string;
  capacity: string;
  sqm: number;
  beds: string;
  bathrooms: number;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  floorPlanImage?: string;
  disabledAccess?: boolean;
  petsAllowed?: boolean;
}

export const apartments: Apartment[] = [
  {
    id: "villa-anna",
    name: "Villa Anna",
    capacity: "Fino a 8 persone",
    sqm: 205,
    beds: "2 + 2 + 2 + 1 + 1",
    bathrooms: 4,
    shortDescription: "Villa Anna è l'appartamento più ampio di Ca' Bianchini, sviluppato su due livelli con ambienti luminosi. La cucina semi-professionale e gli ampi spazi lo rendono ideale per chi desidera soggiornare insieme con comodità.",
    description: "Villa Anna è l'appartamento più ampio di Ca' Bianchini, sviluppato su due livelli con ambienti luminosi. La cucina semi-professionale e gli ampi spazi lo rendono ideale per chi desidera soggiornare insieme con comodità.\n\nL'ingresso di Villa Anna vi accoglie con il portico dotato di tavoli e sedie per i vostri momenti conviviali. Il piano terra è composto di una cucina semiprofessionale (frigo, freezer, forno a gas, fuochi grandi e due piastre elettriche, lavastoviglie rapida, bollitore, macchina da caffè americano, tostapane), contigua zona pranzo, un soggiorno con due divani, una piccola sala lettura, bagno con doccia e una cameretta singola.\n\nIl primo piano ospita 1 camera doppia extra large con bagno, 1 camera doppia standard con bagno, 1 camera doppia standard e 1 camera singola con bagno in comune.",
    coverImage: "/images/villa-anna/Villa-Anna_Slider-1.webp",
    images: Array.from({ length: 14 }, (_, i) => `/images/villa-anna/Villa-Anna_Slider-${i + 1}.webp`),
    floorPlanImage: "/images/foto-planimetrie/planvillaanna-ITA-2.webp",
    petsAllowed: true,
  },
  {
    id: "villa-bina",
    name: "Villa Bina",
    capacity: "Fino a 6 persone",
    sqm: 110,
    beds: "2 + 2 + 2",
    bathrooms: 4,
    shortDescription: "Ampio e luminoso appartamento su due livelli con tre camere doppie, ciascuna con bagno privato. Accesso al giardino retrostante.",
    description: "L'appartamento è situato nella parte centrale della casa ed è strutturato su due livelli, con riscaldamento e raffrescamento centralizzato.\n\nVilla Bina è un ampio e luminoso appartamento. Il piano terra ospita un soggiorno spazioso con due divani e il tavolo da pranzo, toilette, ripostiglio e la cucina a vista dotata di fornello e forno a gas, frigorifero, piccolo freezer e lavastoviglie. Vi è inoltre un accesso al giardino sul retro, dove trovate tavolo e sedie per i vostri pranzi all'aria aperta.\n\nAl piano superiore si trovano le 3 camere doppie e bagno privato ciascuna, e l'accesso al loggiato esterno in comune con Villa Arzilla.",
    coverImage: "/images/appartamenti/villa-bina/Villa-Bina_Slider1.webp",
    floorPlanImage: "/images/foto-planimetrie/planvillabina-ITA.webp",
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
    shortDescription: "Confortevole appartamento per piccoli gruppi, con due camere doppie e accesso al giardino sul retro per pranzi all'aperto.",
    description: "L'appartamento è situato nella parte centrale della casa ed è strutturato su due livelli, con riscaldamento e raffrescamento centralizzato.\n\nVilla Coco è un confortevole appartamento adatto per gruppi di 3-4 persone. Il piano terra è composto di un ampio soggiorno con divani e tavolo da pranzo, una piccola toilette, ripostiglio e la cucina, dotata di fornello e forno a gas, frigorifero, piccolo freezer e lavastoviglie. Vi è inoltre un accesso al giardino sul retro dove trovate tavolo e sedie per i vostri pranzi all'aria aperta.\n\nAl piano superiore si trovano le 2 camere doppie ed i rispettivi bagni con doccia e vasca.",
    coverImage: "/images/villa-coco/Villa-Coco_Slider-1.webp",
    images: Array.from({ length: 7 }, (_, i) => `/images/villa-coco/Villa-Coco_Slider-${i + 1}.webp`),
    floorPlanImage: "/images/foto-planimetrie/planvillacoco-ITA-1.webp",
    petsAllowed: false,
  },
  {
    id: "villa-arzilla",
    name: "Villa Arzilla",
    capacity: "Fino a 3 persone",
    sqm: 77,
    beds: "2 + 1",
    bathrooms: 2,
    shortDescription: "Ideale per coppie e piccole famiglie, accessibile a persone con disabilità motoria. Camera matrimoniale con loggiato esterno.",
    description: "Villa Arzilla è un appartamento ideale per coppie, piccole famiglie e ospiti con disabilità motoria.\n\nL'ingresso, sul lato ovest, dà sul soggiorno arredato con divano, due poltrone e tavolo da pranzo. La cucina a vista, seppur di piccole dimensioni è dotata di tutto il necessario: fornello e forno a gas, frigorifero, freezer e lavastoviglie. Al piano terra sono collocate anche una camera singola, con accesso al giardino sul retro, e il bagno con doccia attrezzato per gli ospiti con disabilità motoria.\n\nLa scala in legno conduce al piano superiore dove troverete un'ampia camera matrimoniale con bagno con doccia e loggiato esterno in comune con Villa Bina. In giardino tavolo e sedie per pranzare all'aperto.",
    coverImage: "/images/villa-arzilla/Villa-Arzilla_Slider-1.webp",
    images: Array.from({ length: 10 }, (_, i) => `/images/villa-arzilla/Villa-Arzilla_Slider-${i + 1}.webp`),
    floorPlanImage: "/images/foto-planimetrie/planvillaarzilla-ITA-1.webp",
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
    shortDescription: "Mini appartamento rustico nel piccolo edificio adiacente, ideale per coppie. Accesso diretto al giardino con pensilina.",
    description: "L'appartamento è situato nel piccolo edificio adiacente alla casa e si sviluppa esclusivamente al piano terreno, con riscaldamento e raffrescamento centralizzato.\n\nAlloggio Marina è un mini appartamento in stile rustico, ideale per coppie anche con un bambino piccolo. È composto di zona giorno dotata di tavolo da pranzo, poltroncine e piccola cucina a vista completa di tutto il necessario: fornello e forno a gas, frigorifero, freezer e lavastoviglie. Ampio bagno con doccia e la camera doppia.\n\nDalla zona giorno è inoltre possibile accedere al giardino sul retro con tavolo con sedie e pensilina.",
    coverImage: "/images/alloggio-marina/Alloggio-Marina_Slider-1.webp",
    images: Array.from({ length: 10 }, (_, i) => `/images/alloggio-marina/Alloggio-Marina_Slider-${i + 1}.webp`),
    floorPlanImage: "/images/foto-planimetrie/planalloggiomarina-ITA.webp",
    petsAllowed: true,
  },
];
