// ─── Product Data ─────────────────────────────────
const PRODUCTS = [
  {
    "id": "lytolamp",
    "cat": "lampade",
    "img": "extracted/3D_printed_lamp_on_tripod_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_lithophane_lamp_moon_202607111258.jpeg",
      "extracted/LED_light_bulb_and_moon_202607111258.jpeg"
    ],
    "name": "Lytolamp",
    "short": "Design magnetico senza viti. Luce calda e avvolgente.",
    "long": "Lytolamp è una lampada dal design elegante e pulito, priva di viti a vista grazie all'esclusivo sistema di assemblaggio magnetico (magneti al neodimio da 8x2 mm). Il corpo diffonde la luce in modo caldo e accogliente, contrastato modernamente dalla cornice opaca in PETG. Sistema di illuminazione interno a LED (10kWh) ad alta intensità per una diffusione omogenea.",
    "material": "Corpo Principale e Coperchio: PLA Wood Premium. Cornice (Lid Frame): PETG Matte Black. Il mix di texture naturali e finitura opaca moderna rende il pezzo unico.",
    "options": [
      {
        "id": "lyto-base",
        "label": "Lytolamp Premium",
        "price": "49.99",
        "note": "Spedizione in 24/48h inclusa"
      }
    ],
    "badge_class": "badge-premium",
    "badge_txt": "Top Seller",
    "is_custom": false
  },
  {
    "id": "fp-classic",
    "cat": "figure",
    "img": "extracted/3D_printed_Funko_Pop_figure_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Funko_Pop_figure_202607111258_2.jpeg",
      "extracted/Funko_Pop_Batman_wood_figure_202607111258.jpeg",
      "extracted/3D_printed_Spider-Man_Funko_Pop_202607111258.jpeg"
    ],
    "name": "Funko Pop Personalizzato",
    "short": "Realizzato interamente in PLA Wood. Scegli il personaggio.",
    "long": "I nostri Funko Pop sono stampati in 100% PLA Wood, un filamento composito che mescola PLA e fibre di legno naturale. Il risultato è una superficie calda con venature uniche che rende ogni pezzo un esemplare irripetibile. Qualsiasi personaggio su richiesta: film, serie TV, anime, sport, persone reali.",
    "material": "PLA Wood — filamento composito con fibre di legno reale. Finitura naturale sabbiata. Colore naturale del legno con venature.",
    "options": [
      {
        "id": "fp-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Taglia standard"
      },
      {
        "id": "fp-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX — più dettaglio"
      }
    ],
    "badge_class": "badge-wood",
    "badge_txt": "PLA Wood",
    "is_custom": false
  },
  {
    "id": "fp-spider",
    "cat": "figure",
    "img": "extracted/3D_printed_Spider-Man_Funko_Pop_202607111258.jpeg",
    "thumbs": [
      "extracted/Funko_Pop_Batman_wood_figure_202607111258.jpeg",
      "extracted/Funko_Pop_detective_wood_figure_202607111258.jpeg"
    ],
    "name": "Funko Pop Spider-Man",
    "short": "Il tuo supereroe preferito in PLA Wood. Pezzo unico.",
    "long": "Spider-Man in versione Funko Pop, stampato in PLA Wood con venature naturali. Ogni pezzo è unico grazie alla texture organica del filamento. Disponibile nelle due taglie standard.",
    "material": "PLA Wood — filamento composito con fibre di legno. Finitura naturale, colore caldo del legno.",
    "options": [
      {
        "id": "fp-spider-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Taglia standard"
      },
      {
        "id": "fp-spider-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      }
    ],
    "badge_class": "badge-wood",
    "badge_txt": "Marvel",
    "is_custom": false
  },
  {
    "id": "fp-batman",
    "cat": "figure",
    "img": "extracted/Funko_Pop_Batman_wood_figure_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Funko_Pop_figure_202607111258.jpeg",
      "extracted/Funko_Pop_detective_wood_figure_202607111258.jpeg"
    ],
    "name": "Funko Pop Batman",
    "short": "Il Cavaliere Oscuro in PLA Wood. Da collezione.",
    "long": "Batman in versione Funko Pop realizzato in PLA Wood. La texture del filamento richiama l'aspetto rugoso e oscuro del personaggio, rendendo questo oggetto un pezzo di design unico. Ideale come regalo o da esporre.",
    "material": "PLA Wood — filamento composito con fibre di legno. Finitura naturale sabbiata.",
    "options": [
      {
        "id": "fp-bat-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Taglia standard"
      },
      {
        "id": "fp-bat-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      }
    ],
    "badge_class": "badge-wood",
    "badge_txt": "DC Comics",
    "is_custom": false
  },
  {
    "id": "fp-detective",
    "cat": "figure",
    "img": "extracted/Funko_Pop_detective_wood_figure_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Funko_Pop_figure_202607111258.jpeg"
    ],
    "name": "Funko Pop Detective",
    "short": "Stile retro in PLA Wood. Atmosfera vintage unica.",
    "long": "Funko Pop in stile detective noir, perfetto per gli amanti del genere poliziesco retro. Stampato in PLA Wood per un'atmosfera vintage e artigianale. Ottimo anche come regalo originale.",
    "material": "PLA Wood — filamento composito con fibre di legno. Venature uniche su ogni pezzo.",
    "options": [
      {
        "id": "fp-det-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Taglia standard"
      },
      {
        "id": "fp-det-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      }
    ],
    "badge_class": "badge-wood",
    "badge_txt": "Vintage",
    "is_custom": false
  },
  {
    "id": "fig-groot",
    "cat": "figure",
    "img": "extracted/3D_printed_Groot_figure_wood_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Darth_Vader_figure_202607111258.jpeg",
      "extracted/3D_printed_astronaut_figure_bamboo_202607111258.jpeg"
    ],
    "name": "Groot — Figura PLA Wood",
    "short": "La natura di Groot esaltata dal filamento legno.",
    "long": "Groot è il personaggio perfetto per il PLA Wood: la sua corteccia naturale viene resa alla perfezione dalla texture organica del filamento. Una figura decorativa di grande impatto, ideale da esporre o regalare.",
    "material": "PLA Wood — filamento composito legno+PLA. Superficie naturale con venature. Colore miele/rovere chiaro.",
    "options": [
      {
        "id": "fig-groot-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Taglia standard"
      },
      {
        "id": "fig-groot-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      }
    ],
    "badge_class": "badge-premium",
    "badge_txt": "Marvel",
    "is_custom": false
  },
  {
    "id": "fig-vader",
    "cat": "figure",
    "img": "extracted/3D_printed_Darth_Vader_figure_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Groot_figure_wood_202607111258.jpeg",
      "extracted/3D_printed_astronaut_figure_bamboo_202607111258.jpeg"
    ],
    "name": "Darth Vader — Figura 3D",
    "short": "Figura dettagliata in PLA. Perfetta per gli appassionati.",
    "long": "Darth Vader stampato con livello di dettaglio elevato in PLA Standard. Ogni linea del costume iconico viene resa con precisione. Disponibile anche in PLA Wood per un effetto più artigianale e caldo.",
    "material": "PLA Standard (nero opaco) oppure PLA Wood su richiesta.",
    "options": [
      {
        "id": "fig-vader-std-16",
        "label": "PLA Standard — 16 × 16 cm",
        "price": "15.99",
        "note": "Nero opaco"
      },
      {
        "id": "fig-vader-std-25",
        "label": "PLA Standard — 25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      },
      {
        "id": "fig-vader-wood-16",
        "label": "PLA Wood — 16 × 16 cm",
        "price": "15.99",
        "note": "Effetto legno"
      }
    ],
    "badge_class": "badge-premium",
    "badge_txt": "Star Wars",
    "is_custom": false
  },
  {
    "id": "fig-astronaut",
    "cat": "figure",
    "img": "extracted/3D_printed_astronaut_figure_bamboo_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_Groot_figure_wood_202607111258.jpeg"
    ],
    "name": "Astronauta — Bamboo",
    "short": "Filamento bamboo sostenibile. Design minimalista.",
    "long": "Figura astronauta realizzata in filamento bamboo — materiale eco-friendly con texture granulosa naturale. Un pezzo di design contemporaneo, perfetto per scrivania o mensola. Sostenibile al 100%.",
    "material": "Filamento Bamboo — PLA misto fibre di bamboo. Colore naturale beige/sabbia. Eco-friendly.",
    "options": [
      {
        "id": "fig-astro-16",
        "label": "16 × 16 cm",
        "price": "15.99",
        "note": "Bamboo naturale"
      },
      {
        "id": "fig-astro-25",
        "label": "25 × 25 cm",
        "price": "20.99",
        "note": "Taglia MAX"
      }
    ],
    "badge_class": "badge-eco",
    "badge_txt": "Bamboo",
    "is_custom": false
  },
  {
    "id": "lamp-luna",
    "cat": "lampade",
    "img": "extracted/3D_printed_lithophane_lamp_moon_202607111258.jpeg",
    "thumbs": [
      "extracted/LED_light_bulb_and_moon_202607111258.jpeg",
      "extracted/3D_printed_lamp_on_tripod_202607111258.jpeg"
    ],
    "name": "Lampada Lithophane Luna",
    "short": "Luna 3D con effetto lithophane. Atmosfera magica.",
    "long": "La lampada lithophane crea un effetto di luce e ombra unico: quando è spenta sembra un solido bianco, accesa rivela profondità e dettagli sorprendenti. La forma luna è il nostro modello più amato, perfetto per camerette, soggiorni e regali romantici. Base lampada inclusa. Lampadina non inclusa.",
    "material": "PLA bianco traslucido (per effetto lithophane ottimale). Base in PLA nero. Compatibile con lampadine E14/E27 standard.",
    "options": [
      {
        "id": "lamp-luna-base",
        "label": "Lampada Lithophane",
        "price": "19.99",
        "note": "Base inclusa — Lampadina NON inclusa"
      }
    ],
    "badge_class": "badge-glow",
    "badge_txt": "Lithophane",
    "is_custom": false
  },
  {
    "id": "lamp-tripod",
    "cat": "lampade",
    "img": "extracted/3D_printed_lamp_on_tripod_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_lamp_on_tripod_202607111258_2.jpeg",
      "extracted/3D_printed_lithophane_lamp_moon_202607111258.jpeg"
    ],
    "name": "Lampada su Treppiede",
    "short": "Design industriale con supporto treppiede in PLA.",
    "long": "Lampada decorativa con treppiede stampato interamente in 3D. Il design industriale si adatta perfettamente a interni moderni e minimalisti. Il diffusore è in PLA traslucido per una luce calda e avvolgente. Base lampada inclusa. Lampadina non inclusa.",
    "material": "PLA Standard per il treppiede. PLA traslucido per il diffusore. Base lampada inclusa.",
    "options": [
      {
        "id": "lamp-trip-std",
        "label": "Treppiede Standard",
        "price": "19.99",
        "note": "Base inclusa — Lampadina NON inclusa"
      },
      {
        "id": "lamp-trip-xl",
        "label": "Treppiede XL",
        "price": "24.99",
        "note": "Versione più alta — Lampadina NON inclusa"
      }
    ],
    "badge_class": "badge-glow",
    "badge_txt": "Design",
    "is_custom": false
  },
  {
    "id": "lamp-ritratto",
    "cat": "lampade",
    "img": "extracted/Lithophane_lamp_with_dog_portrait_202607111258.jpeg",
    "thumbs": [
      "extracted/LED_light_bulb_and_lithophane_202607111258.jpeg",
      "extracted/LED_light_bulb_and_lithophane_202607111258_2.jpeg"
    ],
    "name": "Lithophane Ritratto",
    "short": "La tua foto trasformata in luce. Personalizzata al 100%.",
    "long": "Inviaci la tua foto e la trasformiamo in una lithophane unica. L'immagine viene incisa in 3D sulla plastica: spenta appare bianca, accesa rivela ogni dettaglio con contrasti di luce straordinari. Ideale per ritratti di persone, animali, paesaggi, monumenti. Base lampada inclusa. Lampadina non inclusa.",
    "material": "PLA bianco traslucido ad alta definizione. Base in PLA. Compatibile con lampadine standard.",
    "options": [
      {
        "id": "lamp-ritratto-base",
        "label": "Lithophane Ritratto Personalizzata",
        "price": "19.99",
        "note": "Invia la tua foto — Base inclusa — Lampadina NON inclusa"
      }
    ],
    "badge_class": "badge-glow",
    "badge_txt": "Personalizzata",
    "is_custom": false
  },
  {
    "id": "lamp-edison",
    "cat": "lampade",
    "img": "extracted/LED_light_bulb_and_moon_202607111258.jpeg",
    "thumbs": [
      "extracted/LED_light_bulb_and_lithophane_202607111258.jpeg",
      "extracted/LED_light_bulb_and_lithophane_202607111258_2.jpeg"
    ],
    "name": "Lithophane con LED Edison",
    "short": "Pannello lithophane con lampadina a vista. Arte e luce.",
    "long": "Combinazione di pannello lithophane personalizzabile con lampadina Edison a vista. Il calore della luce ambrata esalta i dettagli della lithophane creando un'atmosfera unica. Perfetto come pezzo di arredo, regalo di design o decorazione vintage. Base lampada inclusa. Lampadina non inclusa.",
    "material": "PLA traslucido per il pannello. Supporto in PLA. Base E27 inclusa. Compatibile con lampadine Edison standard.",
    "options": [
      {
        "id": "lamp-edison-base",
        "label": "Lithophane + Edison Holder",
        "price": "19.99",
        "note": "Base inclusa — Lampadina NON inclusa"
      }
    ],
    "badge_class": "badge-glow",
    "badge_txt": "Edison",
    "is_custom": false
  },
  {
    "id": "card-wood",
    "cat": "card",
    "img": "extracted/3D_printed_NFC_card_wood_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_smart_card_bamboo_202607111258.jpeg",
      "extracted/3D_printed_card_on_mirror_202607111258.jpeg"
    ],
    "name": "Smart Card NFC",
    "short": "Condividi contatti, social o sito con un tocco. In PLA Wood.",
    "long": "La Smart Card NFC è la tua biglietto da visita del futuro: avvicini il telefono e in un secondo condividi il tuo profilo Instagram, numero di telefono, sito web o qualsiasi link. Nessuna app necessaria. Funziona con qualsiasi smartphone Android e iOS (NFC attivato). Programmabile e riprogrammabile.",
    "material": "PLA Wood (finitura legno) oppure Bamboo oppure Mirror (finitura lucida). Chip NFC integrato NTAG213 — compatibile universale.",
    "options": [
      {
        "id": "card-wood",
        "label": "PLA Wood",
        "price": "5.99",
        "note": "Finitura legno naturale"
      },
      {
        "id": "card-bamboo",
        "label": "Bamboo",
        "price": "5.99",
        "note": "Eco-friendly, colore naturale"
      },
      {
        "id": "card-mirror",
        "label": "Mirror Edition",
        "price": "5.99",
        "note": "Finitura lucida premium"
      },
      {
        "id": "card-tag",
        "label": "Smart Tag NFC (da applicare)",
        "price": "5.99",
        "note": "Adesivo — da incollare ovunque"
      }
    ],
    "badge_class": "badge-tech",
    "badge_txt": "NFC",
    "is_custom": false,
    "force_nfc": true
  },
  {
    "id": "key-wood",
    "cat": "portachiavi",
    "img": "extracted/3D_printed_keychain_wood_filament_202607111258.jpeg",
    "thumbs": [
      "extracted/3D_printed_keychain_dark_oak_202607111258.jpeg"
    ],
    "name": "Portachiavi 3D",
    "short": "Personalizzato con nome, logo o forma. In PLA Wood.",
    "long": "Portachiavi realizzato in stampa 3D con filamento PLA Wood o Dark Oak. Scegli la forma, aggiungi un nome, iniziali o logo. Ogni portachiavi viene stampato su richiesta — nessuno è identico all'altro grazie alle venature naturali del filamento. Ottimo come regalo personalizzato o gadget aziendale.",
    "material": "PLA Wood (caldo, venature naturali) oppure Dark Oak (tono scuro, pregiato). Anellino metallico incluso.",
    "options": [
      {
        "id": "key-wood",
        "label": "PLA Wood",
        "price": "5.99",
        "note": "Colore legno chiaro naturale"
      },
      {
        "id": "key-oak",
        "label": "Dark Oak",
        "price": "5.99",
        "note": "Tono scuro, effetto rovere pregiato"
      }
    ],
    "badge_class": "badge-wood",
    "badge_txt": "PLA Wood",
    "is_custom": false
  },
  {
    "id": "custom-1",
    "cat": "custom",
    "img": "extracted/image.png_202607111258_3.jpeg",
    "thumbs": [
      "extracted/image.png_202607111258_5.jpeg"
    ],
    "name": "Stampa Custom",
    "short": "Hai un'idea? La realizziamo. Qualsiasi oggetto su misura.",
    "long": "Porta il tuo file STL/OBJ oppure descrivi l'oggetto che hai in mente: noi lo stampiamo. Gestiamo tutta la filiera: dalla modellazione 3D (se non hai il file), alla scelta del materiale, alla stampa e al post-processing. Consulenza gratuita iniziale. Preventivo senza impegno.",
    "material": "Qualsiasi materiale disponibile: PLA, PLA Wood, Bamboo, PETG, TPU, Resina. Colori personalizzabili.",
    "options": [],
    "badge_class": "badge-premium",
    "badge_txt": "Custom",
    "is_custom": true
  },
  {
    "id": "custom-2",
    "cat": "custom",
    "img": "extracted/image.png_202607111258_5.jpeg",
    "thumbs": [
      "extracted/image.png_202607111258_3.jpeg"
    ],
    "name": "Modello 3D + Stampa",
    "short": "Dal concept al prodotto finito. Modellazione inclusa.",
    "long": "Non hai il file 3D? Nessun problema. Il nostro team crea il modello partendo da un disegno, una foto o una descrizione. Una volta approvato il modello, procediamo con la stampa nel materiale e nei colori scelti. Servizio end-to-end con anteprima digitale inclusa.",
    "material": "Modellazione 3D + stampa. Materiale e colori a scelta. Anteprima digitale inclusa prima della stampa.",
    "options": [],
    "badge_class": "badge-premium",
    "badge_txt": "Full Service",
    "is_custom": true
  }
];


// ─── Format Currency ───
function formatPrice(num) {
  return parseFloat(num).toFixed(2).replace('.', ',') + ' €';
}

// ─── Cart State ─────────────────────────────────
let cart = JSON.parse(localStorage.getItem('3dspark_cart')) || [];

function saveCart() {
  localStorage.setItem('3dspark_cart', JSON.stringify(cart));
}

function addToCart(item) {
  // item: { id, name, img, optionId, optionLabel, price, nfc }
  // Check if identical item exists
  const existing = cart.find(c => c.id === item.id && c.optionId === item.optionId && c.nfc === item.nfc);
  if (existing) {
    existing.qty += 1;
  } else {
    item.qty = 1;
    cart.push(item);
  }
  saveCart();
  updateCartUI();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.qty), 0);
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const itemsContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  badge.textContent = totalItems;
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = '<div class="cart-empty">Il tuo carrello è vuoto.</div>';
  } else {
    itemsContainer.innerHTML = cart.map((item, index) => {
      let optText = item.optionLabel;
      if (item.nfc) optText += ' + Chip NFC';
      
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name} <span style="font-size:12px; color:gray">x${item.qty}</span></div>
            <div class="cart-item-opt">${optText}</div>
            <div class="cart-item-bottom">
              <div class="cart-item-price">${formatPrice(parseFloat(item.price) * item.qty)}</div>
              <button class="cart-item-remove" onclick="removeFromCart(${index})">Rimuovi</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
  
  totalEl.textContent = formatPrice(getCartTotal());
}

// ─── Render product cards ─────────────────────────────────
function renderCards(filter) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.id = p.id;
    card.style.animationDelay = (i * 60) + 'ms';
    
    let priceHtml = '';
    if (p.is_custom) {
      priceHtml = `<span class="price-tag" style="font-size:16px;">Preventivo</span>`;
    } else {
      const minPrice = p.options[0].price;
      priceHtml = `<span class="price-from-label">da</span><span class="price-tag">${formatPrice(minPrice)}</span>`;
    }
    
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="card-hover-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
          Vedi dettagli
        </div>
        <span class="product-badge ${p.badge_class}">${p.badge_txt}</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.short}</p>
        <div class="product-price-row">
          ${priceHtml}
        </div>
        <button class="product-detail-btn" data-id="${p.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          Info, materiale e opzioni
        </button>
      </div>
    `;
    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });
  // trigger reveal
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach(el => {
      el.classList.add('visible');
    });
  }, 80);
}

// ─── Tabs filter ─────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});
renderCards('lampade'); // Impostato 'lampade' come default visto che Lytolamp è il pezzo forte

// ─── Modal ─────────────────────────────────
const modal = document.getElementById('product-modal');
const modalOverlay = document.getElementById('modal-overlay');

let currentModalProduct = null;
let currentSelectedOption = null;
let isNfcSelected = false;

function updateModalDynamicPrice() {
  if (!currentModalProduct || currentModalProduct.is_custom) return;
  
  let basePrice = parseFloat(currentSelectedOption.price);
  if (isNfcSelected) {
    basePrice += 1.50;
  }
  
  document.getElementById('modal-dynamic-price').textContent = formatPrice(basePrice);
}

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;

  // Tabs
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.name;
  document.getElementById('modal-badge').textContent = p.badge_txt;
  document.getElementById('modal-badge').className = 'modal-badge ' + p.badge_class;
  document.getElementById('modal-title').textContent = p.name;

  // Thumbs
  const thumbsEl = document.getElementById('modal-thumbs');
  thumbsEl.innerHTML = `<img src="${p.img}" alt="${p.name}" class="thumb active" onclick="switchImg(this,'${p.img}')" />`;
  (p.thumbs || []).forEach(t => {
    thumbsEl.innerHTML += `<img src="${t}" alt="" class="thumb" onclick="switchImg(this,'${t}')" />`;
  });

  // Tab content
  document.getElementById('tab-info').textContent = p.long;
  document.getElementById('tab-material').textContent = p.material;

  // Options Tab
  const optContainer = document.getElementById('dynamic-options-container');
  const ctaEl = document.getElementById('modal-cta');
  
  optContainer.innerHTML = '';
  ctaEl.innerHTML = '';
  isNfcSelected = false;
  
  if (p.is_custom) {
    // Custom product: no cart
    optContainer.innerHTML = `<div style="padding:20px; background:var(--gray-50); border-radius:12px; margin-bottom:20px;">Questo prodotto viene realizzato interamente su misura. Richiedi un preventivo gratuito.</div>`;
    ctaEl.innerHTML = `
      <a href="mailto:info@3dspark.it?subject=Richiesta Custom: ${encodeURIComponent(p.name)}" class="add-to-cart-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        Richiedi preventivo gratuito
      </a>
    `;
  } else {
    // Normal product: options + NFC + Cart
    currentSelectedOption = p.options[0]; // default first
    
    // 1. Radio buttons for sizes/options
    let radioHtml = `<div class="opt-radio-group">`;
    p.options.forEach((opt, idx) => {
      const checked = idx === 0 ? 'checked' : '';
      radioHtml += `
        <input type="radio" name="modal_opt" id="${opt.id}" value="${opt.id}" class="opt-radio-input" ${checked} />
        <label for="${opt.id}" class="opt-radio-label">
          <div class="opt-left">
            <div class="opt-name">${opt.label}</div>
            ${opt.note ? `<div class="option-note" style="margin-top:2px">${opt.note}</div>` : ''}
          </div>
          <div class="opt-price">${formatPrice(opt.price)}</div>
        </label>
      `;
    });
    radioHtml += `</div>`;
    
    // 2. NFC Toggle (show for all normal products unless force_nfc is true)
    if (!p.force_nfc) {
        radioHtml += `
          <div class="nfc-toggle-wrap" id="nfc-toggle-btn">
            <div class="nfc-info">
              <svg class="nfc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 100 20 10 10 0 100-20zM12 6v6l4 2"/></svg>
              <div class="nfc-text">
                <h4>Aggiungi chip NFC</h4>
                <p>Rendi il tuo oggetto smart</p>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <span class="nfc-price">+1,50 €</span>
              <input type="checkbox" id="nfc-checkbox" class="nfc-checkbox" />
            </div>
          </div>
        `;
    } else {
        // Product is ALREADY an NFC card/keychain, NFC is included
        radioHtml += `
          <div class="nfc-toggle-wrap" style="background:#f0fdf4; border-color:#bbf7d0; cursor:default;">
            <div class="nfc-info">
              <svg class="nfc-icon" style="color:#16a34a;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <div class="nfc-text">
                <h4 style="color:#166534">Chip NFC Incluso</h4>
                <p style="color:#22c55e">Già compreso nel prezzo</p>
              </div>
            </div>
          </div>
        `;
    }
    
    optContainer.innerHTML = radioHtml;
    
    // CTA Button
    ctaEl.innerHTML = `
      <button class="add-to-cart-btn" id="modal-add-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        <span>Aggiungi al carrello • <span id="modal-dynamic-price">${formatPrice(currentSelectedOption.price)}</span></span>
      </button>
    `;
    
    // Event listeners for radios
    document.querySelectorAll('.opt-radio-input').forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentSelectedOption = p.options.find(o => o.id === e.target.value);
        updateModalDynamicPrice();
      });
    });
    
    // Event listeners for NFC
    const nfcToggleBtn = document.getElementById('nfc-toggle-btn');
    const nfcCheckbox = document.getElementById('nfc-checkbox');
    if (nfcToggleBtn && nfcCheckbox) {
      nfcToggleBtn.addEventListener('click', (e) => {
        if(e.target !== nfcCheckbox) {
           nfcCheckbox.checked = !nfcCheckbox.checked;
        }
        isNfcSelected = nfcCheckbox.checked;
        updateModalDynamicPrice();
      });
      nfcCheckbox.addEventListener('change', () => {
        isNfcSelected = nfcCheckbox.checked;
        updateModalDynamicPrice();
      });
    }
    
    // Add to cart click
    document.getElementById('modal-add-btn').addEventListener('click', () => {
      let finalPrice = parseFloat(currentSelectedOption.price);
      if (isNfcSelected) finalPrice += 1.50;
      
      addToCart({
        id: p.id,
        name: p.name,
        img: p.img,
        optionId: currentSelectedOption.id,
        optionLabel: currentSelectedOption.label,
        price: finalPrice.toFixed(2),
        nfc: isNfcSelected || p.force_nfc
      });
      closeModal();
    });
  }

  // Switch to options tab by default so they see the prices immediately
  switchTab('options');

  modal.classList.add('open');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function switchImg(el, src) {
  document.getElementById('modal-img').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function switchTab(tab) {
  document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.modal-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ─── Cart Sidebar Logic ─────────────────────────────────
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartBtn = document.getElementById('cart-btn');
const cartClose = document.getElementById('cart-close');

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if(cartBtn) cartBtn.addEventListener('click', openCart);
if(cartClose) cartClose.addEventListener('click', closeCart);
if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Init cart on load
updateCartUI();

// ─── Custom Cursor ─────────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
function animFollower() {
  fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px'; follower.style.top = fy + 'px';
  requestAnimationFrame(animFollower);
}
animFollower();
document.addEventListener('mouseover', e => {
  if (e.target.closest('a, button, .product-card, .filter-btn, .opt-radio-label, .nfc-toggle-wrap')) {
    cursor.classList.add('hover'); follower.classList.add('hover');
  } else {
    cursor.classList.remove('hover'); follower.classList.remove('hover');
  }
});

// ─── Particles ─────────────────────────────────
(function() {
  const c = document.getElementById('hero-particles');
  if (!c) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 14) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    const s = (3 + Math.random() * 5) + 'px';
    p.style.width = s; p.style.height = s;
    c.appendChild(p);
  }
})();

// ─── Navbar scroll ─────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Mobile menu ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── Reveal on scroll ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ─── Smooth anchors ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ─── Contact form ─────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  const txt = document.getElementById('submit-text');
  txt.textContent = 'Invio in corso...';
  btn.disabled = true;
  setTimeout(() => {
    txt.textContent = 'Messaggio inviato!';
    btn.style.background = '#15803d';
    setTimeout(() => {
      txt.textContent = 'Invia richiesta';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3200);
  }, 1200);
}
