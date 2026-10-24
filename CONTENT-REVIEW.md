# Revisione contenuti — prima della pubblicazione

Documento di lavoro per il cliente. Ogni riga è un'affermazione pubblicata sul sito: va confermata,
corretta o rimossa. La colonna "Fonte" indica dove compare nel PDF *Company Profile GIE 2025*.

## Identità

| Voce | Stato attuale | Fonte | Da confermare |
|---|---|---|---|
| Nome del sito | **GIE Holding** | scelta concordata, non presente nel PDF | Denominazione legale esatta e uso pubblico del nome "Holding" |
| Ragione sociale | Gursel Import Export | p. 2 | Se la holding è una nuova società, servono ragione sociale, sede e P. IVA |
| Marchio | Ricostruito in SVG (triangolo + GIE) | p. 1, p. 16 | Se esiste il file vettoriale ufficiale, va sostituito prima del go-live |
| Sottotitolo logo | "HOLDING" | — | In alternativa "GÜRSEL GROUP" o "GÜRSEL HOLDING" |

## Storia e date

| Voce | Stato attuale | Fonte | Nota |
|---|---|---|---|
| Fondazione | 1938 | p. 2 | Il PDF dice anche "70 anni di storia" (p. 1) e "dal 1930" (p. 2): incoerenza da chiarire |
| Attività teatrale fino agli anni '60 | pubblicata | p. 2 | — |
| Laurea in ingegneria 1970 | pubblicata | p. 2 | — |
| Cambio nome in GIE Gursel Import Export | "negli anni successivi", senza data | p. 2 | Il PDF non indica l'anno: confermare se si vuole una data |
| Divisione food dal 2020 | pubblicata | p. 11 | — |

## Affermazioni commerciali (le più delicate)

| Voce | Stato attuale | Fonte | Rischio |
|---|---|---|---|
| "Co-producer of sugar in Central and South America" | pubblicata in Divisioni | p. 3 | Affermazione forte: serve conferma contrattuale |
| "Official distributor for major refineries across Asia" | pubblicata | p. 3 | Idem: indicare se è esclusiva o meno |
| "Registered with chambers of commerce, starting with the Chinese one" | pubblicata in Mercati | p. 11 | Meglio citare numeri di registrazione, se disponibili |
| "Over forty years in logistics" | pubblicata | p. 14 | — |
| Numeri sintetici (4 divisioni, 30+ linee, 5 continenti) | pubblicati | calcolati dal PDF | Verificare che siano accettabili come claim |
| Nuove iniziative (e-commerce, automotive) | marcate "In development" con disclaimer | indicazione del cliente | Confermare che si possano citare pubblicamente e con quale formulazione |

## Contatti

| Voce | Stato attuale | Fonte | Nota |
|---|---|---|---|
| Email | fuat@fuatgursel.com | p. 16 | Se cambia il dominio, aggiornare `site.email` |
| Telefono +971 55 269 3659 | "Commercial office" | p. 16 | Etichetta dedotta: il PDF non la specifica |
| Telefono +90 552 481 9302 | "Türkiye" | p. 16 | — |
| Telefono +30 690 662 5021 | "Greece" | p. 16 | Prefisso greco, città non indicata |
| Sede | Tomtom Mahallesi, İstiklal Caddesi, Beyoğlu No. 187 K2, Istanbul | p. 16 | Verificare formato postale e CAP, assente nel PDF |
| Banche | 9 istituti, incluso "Half Bank" | p. 16 | Quasi certamente **Halk Bank**: confermare. Nessun IBAN è pubblicato |
| Dominio | `https://www.gurselimportexport.com` | segnaposto | Va sostituito in `content/site.ts` |

## Immagini

- Tutte le fotografie provengono dal PDF aziendale (globo, meeting, cantiere, logistica, materie prime,
  Istanbul). **Verificare la licenza**: se sono stock acquistati va bene, se sono prese da web no.
- Le immagini generiche (meeting, stretta di mano) indeboliscono l'autorevolezza: la sostituzione con
  foto reali di porti, magazzini, camion e merci del gruppo è il singolo intervento che alza di più la
  percezione di solidità.
- Per il dinamismo della home è stata usata una sequenza di tre immagini esistenti con crossfade lento.
  Se il cliente produce un video reale (anche 15 secondi, senza audio), si può sostituire la sequenza.

## Testi editoriali (Insights)

I tre articoli sono stati scritti come note tecniche divulgative su zucchero, rottame ferroso e
documenti di trasporto. Non contengono prezzi né dati di mercato, ma **vanno rivisti dai desk** prima
della pubblicazione: ogni affermazione tecnica deve essere quella che l'azienda è disposta a sostenere.

## Legale

- **Privacy e cookie**: da predisporre prima del go-live in UE. Il modulo attuale non invia dati a
  server e non usa cookie di profilazione; se in futuro si aggiungono analytics o invio via API,
  servono informativa, base giuridica e consenso.
- **Termini d'uso**: opzionali per un sito istituzionale, consigliati se si pubblicano schede prodotto
  o prezzi.
- **Note legali**: ragione sociale, sede, registro imprese e P. IVA secondo la normativa turca.

## Traduzioni (fase successiva)

Lingue richieste: italiano, spagnolo, turco, arabo. Prima di tradurre vanno chiuse le voci qui sopra,
altrimenti ogni correzione va rifatta in cinque lingue. L'arabo richiede layout RTL e font dedicati.
