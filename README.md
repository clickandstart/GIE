# GIE Holding

Sito istituzionale del gruppo, ricostruito a partire dal *Company Profile 2025*. Non è una
trascrizione del PDF: contenuti, immagini e gerarchia sono stati reinterpretati in un sito
editoriale moderno, multisezione, responsive e ottimizzato per i motori di ricerca.

Il sito è pensato come **casa madre di un gruppo**: la pagina *Group* descrive le divisioni
operative e le iniziative in sviluppo, ed è il punto da cui agganciare in futuro i siti
verticali (e-commerce, automotive) senza rifare l'impianto.

## Stack

- **Next.js 16** (App Router, rendering statico)
- **TypeScript**
- **Tailwind CSS 4** con design system a token in `app/globals.css`
- Font self-hosted (`app/fonts`): Archivo, Inter, Instrument Serif — nessuna richiesta a Google Fonts

## Avvio

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build di produzione
npm run typecheck  # controllo TypeScript
```

## Struttura

```
app/
  layout.tsx        header, footer, font, metadati, JSON-LD
  page.tsx          home
  group/            struttura del gruppo e iniziative in sviluppo
  about/            storia, timeline, mission, vision, valori
  divisions/        commodities, food, construction, logistics
  markets/          linee di prodotto e catalogo food
  insights/         indice editoriale + articoli statici
  contact/          recapiti, banche, modulo di richiesta
  globals.css       token colore/tipografia e componenti
  sitemap.ts, robots.ts, icon.svg
components/         header, footer, logo, form, reveal, hero visual, CTA
content/site.ts     testi, recapiti, divisioni, dati del gruppo
content/insights.ts articoli editoriali
public/images/      immagini estratte dal PDF e ottimizzate in WebP
public/og.jpg       immagine di anteprima social 1200×630
CONTENT-REVIEW.md   checklist di verifica per il cliente
```

**Per modificare i contenuti** basta agire su `content/`: testi, telefoni, indirizzo, banche,
divisioni, gruppo e articoli sono centralizzati lì.

### Da aggiornare prima della pubblicazione

- `site.url` in `content/site.ts` (attualmente `https://www.gurselimportexport.com`): deve
  corrispondere al dominio reale, perché alimenta canonical, sitemap e Open Graph.
- `site.banks`: il PDF riporta "HALF BANK"; verificare se il nome corretto sia Halk Bank.
- **`CONTENT-REVIEW.md`**: elenco puntuale di tutte le affermazioni pubblicate da confermare
  con il cliente (date, claim commerciali, telefoni, licenze delle immagini).

## Modulo di contatto

Il modulo non invia dati a nessun server: compone un'email precompilata verso
`fuat@fuatgursel.com` e apre il client di posta dell'utente. Funziona senza chiavi API e senza
GDPR da gestire lato server. Se si desidera un invio diretto dal sito, si può collegare un
servizio transazionale (es. Resend) con una route API dedicata.

## Traduzioni (fase successiva)

Lingue previste: italiano, spagnolo, turco, arabo. L'architettura consigliata è il routing per
locale (`/it`, `/es`, `/tr`, `/ar`) con contenuti in file dedicati — `content/it.ts` ecc. — e
`dir="rtl"` per l'arabo. Non è ancora implementato: prima vanno chiuse le voci di
`CONTENT-REVIEW.md`, altrimenti ogni correzione va ripetuta in cinque lingue.

## Deploy su Vercel

1. Creare un repository GitHub e pushare il progetto.
2. Su Vercel: *Add New → Project*, importare il repository.
3. Framework rilevato automaticamente (Next.js). Nessuna variabile d'ambiente richiesta.
4. Ogni push su `main` genera un deploy di produzione; le altre branch generano preview.

## Asset

Le immagini provengono dal PDF aziendale e sono state ritagliate, ricomposte e compresse in
WebP. Il marchio in header/footer è ridisegnato in SVG (vettoriale, nitido a ogni dimensione).
