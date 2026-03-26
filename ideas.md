# Brainstorm Design - Ca' Bianchini Agriturismo

Tre approcci stilistici distinti per il nuovo sito web, ispirati allo stile elegante e immersivo di ipinitoscana.com.

---

<response>
<idea>

## Idea 1: "Rustico Contemporaneo Veneto"

**Design Movement**: Neo-Rustic Minimalism — ispirato all'architettura rurale veneta reinterpretata con sensibilità contemporanea.

**Core Principles**:
1. Contrasto tra materia grezza e raffinatezza tipografica
2. Fotografia come elemento dominante, il testo si sottomette all'immagine
3. Ritmo verticale lento, che invita allo scroll contemplativo
4. Asimmetria controllata nei layout

**Color Philosophy**: Palette terrosa derivata dalla campagna trevigiana. Beige caldo (#F5F0E8) come sfondo principale, verde oliva scuro (#3A4A3C) per i testi, terracotta (#B8704B) come accento per CTA e dettagli. Il bianco puro è bandito: ogni superficie ha una leggera patina calda.

**Layout Paradigm**: Full-bleed photography con testo sovrapposto o affiancato in layout a 2 colonne asimmetriche (60/40). Le sezioni degli appartamenti si alternano: foto a sinistra/testo a destra e viceversa, con transizioni fluide tra le sezioni.

**Signature Elements**:
- Linee sottili orizzontali in terracotta come separatori tra sezioni
- Numeri romani per la numerazione degli appartamenti
- Effetto parallax leggero sulle immagini hero

**Interaction Philosophy**: Movimenti lenti e deliberati. Hover sulle foto rivela un leggero zoom. I pulsanti hanno transizioni morbide. Lo scroll è fluido e cinematografico.

**Animation**: Fade-in dal basso per i testi (300ms ease-out), scale leggero sulle immagini al hover (1.02x, 600ms), parallax verticale sulle immagini hero a 0.3x della velocità di scroll.

**Typography System**: Playfair Display per i titoli (peso 400-700), Lato per il corpo del testo (peso 300-400). I titoli degli appartamenti in Playfair Display italic. Spaziatura lettere ampia (+2px) per i sottotitoli e le label.

</idea>
<text>Approccio che fonde l'estetica rurale veneta con un design contemporaneo pulito, dove la fotografia domina e la tipografia serif crea eleganza.</text>
<probability>0.08</probability>
</response>

---

<response>
<idea>

## Idea 2: "Campagna Editoriale"

**Design Movement**: Editorial Design applicato al web — ispirato ai magazine di viaggio di lusso come Condé Nast Traveler e Cereal Magazine.

**Core Principles**:
1. Gerarchia tipografica forte come in un magazine stampato
2. Griglia editoriale con colonne variabili
3. Bianco come respiro, non come vuoto
4. Ogni sezione è una "pagina" del magazine

**Color Philosophy**: Bianco avorio (#FAFAF7) dominante, nero caldo (#2C2C2C) per il testo, oro antico (#C4A265) per accenti minimali. La palette è volutamente ristretta per lasciare che le fotografie siano l'unico elemento cromatico vibrante.

**Layout Paradigm**: Layout editoriale a colonne variabili. L'hero è un'immagine full-viewport con titolo sovrapposto in grande. Le schede degli appartamenti usano un layout magazine: immagine grande a sinistra (65%) con testo a destra in una colonna stretta, alternando con layout invertito. Tra le sezioni, citazioni o dettagli in grande formato.

**Signature Elements**:
- Titoli degli appartamenti in dimensione oversize (clamp 4-8rem)
- Sottili linee dorate come accenti decorativi
- Caption fotografiche in stile didascalia editoriale

**Interaction Philosophy**: Eleganza discreta. Nessun effetto appariscente. Le transizioni sono quasi impercettibili. L'hover sui link cambia solo il colore con una transizione di 400ms. Le gallerie fotografiche scorrono con un drag naturale.

**Animation**: Reveal progressivo dei contenuti con IntersectionObserver (opacity 0→1, translateY 20px→0, duration 500ms, ease cubic-bezier). Le immagini si caricano con un fade-in morbido. Nessun parallax — la staticità è una scelta editoriale.

**Typography System**: Cormorant Garamond per i titoli (peso 300-600), Source Sans 3 per il corpo (peso 300-400). I nomi degli appartamenti in Cormorant Garamond Light a dimensione oversize. Le specifiche tecniche (mq, posti letto) in Source Sans 3 uppercase con letter-spacing 3px.

</idea>
<text>Approccio editoriale da magazine di lusso, con tipografia oversize, layout a colonne variabili e una palette ristretta che lascia parlare le fotografie.</text>
<probability>0.06</probability>
</response>

---

<response>
<idea>

## Idea 3: "Paesaggio Immersivo"

**Design Movement**: Immersive Storytelling — ispirato ai siti di hotel boutique e resort di lusso come Aman Resorts e Six Senses.

**Core Principles**:
1. L'immagine è il messaggio — le foto occupano il massimo spazio possibile
2. Navigazione minimale e quasi invisibile
3. Storytelling verticale: ogni scroll rivela un nuovo capitolo
4. Il sito è un'esperienza, non una brochure

**Color Philosophy**: Sfondo scuro caldo (#1A1A18) nelle sezioni di transizione, crema caldo (#F2EDE4) per le sezioni testuali. Verde bosco (#2D3B2D) per i pulsanti e gli accenti. La dualità chiaro/scuro crea ritmo e profondità, evocando il contrasto tra interni accoglienti ed esterni naturali.

**Layout Paradigm**: Sezioni full-viewport che si susseguono come diapositive. L'hero è uno slider a tutto schermo. Ogni appartamento ha la propria "scena": immagine full-width seguita da un pannello informativo con layout split-screen. Le transizioni tra sezioni usano un effetto di dissolvenza.

**Signature Elements**:
- Slider hero con transizione crossfade lenta (2s)
- Icone custom disegnate a mano per i servizi (letto, bagno, mq)
- Sezione mappa con sfondo scuro e pin personalizzato

**Interaction Philosophy**: Immersione totale. Lo scroll è l'unica interazione necessaria. Le gallerie degli appartamenti si navigano con swipe/drag. I pulsanti appaiono solo quando servono, con un'apparizione graduale.

**Animation**: Crossfade hero slider (2000ms ease-in-out), scroll-triggered reveal con stagger (ogni elemento 100ms di ritardo), immagini con clip-path reveal da sinistra o destra (800ms cubic-bezier), testi con fade-in e leggero blur iniziale (blur 4px→0, 400ms).

**Typography System**: DM Serif Display per i titoli (peso 400), Nunito Sans per il corpo (peso 300-400). I titoli sono sempre in minuscolo per un effetto contemporaneo. Le specifiche tecniche usano Nunito Sans Light con spaziatura ampia.

</idea>
<text>Approccio immersivo da hotel boutique di lusso, con sezioni full-viewport, transizioni cinematografiche e dualità chiaro/scuro per creare profondità narrativa.</text>
<probability>0.04</probability>
</response>
