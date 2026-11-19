# MAP — Dall'argomento al file in un passo

Cosa contiene: per ogni argomento del sito, parole chiave, termini del codice e file da aprire.
Chi lo aggiorna: chiunque aggiunge, sposta o rinomina un file (nello stesso commit).
Collegamenti: compiti aperti in [TASKS.md](TASKS.md); istruzioni d'avvio in [README.md](README.md).

## Come è fatto il sito
- Ogni sezione = un componente in `src/components/sections/` + un file di testi in `src/content/`.
- **Per cambiare un testo** si tocca solo `src/content/`; **per cambiare l'aspetto** il componente.
- Flusso: `index.html` → `src/main.tsx` → `src/App.tsx` (rotte) → `src/pages/*` → sezioni.

## Sezioni della home (in ordine di pagina)

| Argomento / parole chiave | Componente | Testi | Note |
|---|---|---|---|
| Barra in alto, logo | `sections/Header.tsx` | — | link a `/` |
| Hero, "Break the Code", sottotitolo, descrizione, pulsanti | `sections/HeroSection.tsx` | `content/hero.ts` (`heroContent`) | link pulsanti in `cta.*.url`; "Prossimo Evento" → `#next-event` (T20) |
| Con chi costruiamo (Istituzioni, Imprese, Persone), ex "La nostra essenza", ex "Chi siamo" | `sections/EssenceCard.tsx` (dentro la Hero) | `content/hero.ts` (`heroContent.essence`) | unita alla Hero (T29); testi nuovi (T34) |
| Finto browser, terminale `init_revolution.sh` | `sections/BrowserMockup.tsx` | `content/hero.ts` (`browserText`) | |
| Separatore tra sezioni | `sections/SectionDivider.tsx` | — | |
| Manifesto, mission, principi, colonne Consulenza e Formazione, "Raccontaci il tuo progetto" | `sections/ManifestoSection.tsx` | `content/manifesto.ts` (`manifestoContent`, `columns`) | prima del Corso (T32); due colonne (T33) |
| Etica, codice etico, Sempre / Mai, finestre terminale | `sections/EthicsSection.tsx` | `content/ethics.ts` (`ethicsContent`, `blocks`, `tone`) | dopo la Mission (T36) |
| Corso in evidenza, prossimo evento, `#next-event`, date, sede ERETICO, posti, early bird | `sections/FeaturedCourseSection.tsx` | `content/featuredCourse.ts` (`featuredCourseContent`, id in `anchor`) | scaduto → T03 |
| Community, Telegram | `sections/CommunitySection.tsx` | `content/community.ts` (`communityContent`) | galleria tolta (T06) |
| Footer, social, email, link legali, copyright | `sections/Footer.tsx` | `content/footer.ts` (`footerContent`) | copyright = anno corrente, calcolato (T04); email da `content/site.ts` (T44) |

Esportazioni raccolte in `src/components/sections/index.ts`; composizione in `src/pages/Index.tsx`.

## Componenti comuni (usati da più sezioni)

| Argomento / parole chiave | File | Usato da |
|---|---|---|
| Pillola arancione sopra i titoli, badge | `components/Badge.tsx` | `SectionHeader` (tolto dalla Hero in T30, riusabile) |
| Intestazione di sezione: pillola, titolo, sottotitolo, testo | `components/SectionHeader.tsx` | FeaturedCourse, Manifesto, Ethics, Community, EssenceCard |
| Pulsante d’azione, CTA, link esterno in nuova scheda, link `#sezione` con scorrimento morbido | `components/CtaLink.tsx` (web → nuova scheda; `/`, `#`, `mailto:` → stessa scheda) | Hero, Manifesto, FeaturedCourse, Community, `pages/NotFound.tsx` |
| Titolo della scheda, canonical, noindex della 404 | `components/PageMeta.tsx` (dati in `content/site.ts`) | tutte le pagine in `src/pages/` |
| Logo (webp leggero + png di riserva) | `components/Logo.tsx` | Header, Footer |
| Icone scelte nei testi (campo `icon`), `icons`, `getIcon`, nome icona nuovo | `components/icons.ts` | FeaturedCourse, Manifesto (schede e colonne), EssenceCard, Community, Footer |

## Pagine e rotte

| Rotta | Pagina | Testi |
|---|---|---|
| `/` | `src/pages/Index.tsx` | vedi tabella sopra |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` → `components/LegalPage.tsx` | `content/privacy.ts` (P.IVA → T02) |
| `/cookie-policy` | `src/pages/CookiePolicy.tsx` → `components/LegalPage.tsx` | `content/cookies.ts` |
| `*` (404) | `src/pages/NotFound.tsx` | `content/notFound.ts` (`notFoundContent`) |

Pagine legali: un solo componente `src/components/LegalPage.tsx`; tipi e formato dei testi (`**grassetto**`, `[link](indirizzo)`) in `src/content/legalTypes.ts`, letti da `src/components/RichText.tsx`. `RichText` legge anche la frase sotto il pulsante Telegram (`content/community.ts`, T43).
Rotte definite in `src/App.tsx`; ritorno in cima al cambio pagina: `src/components/ScrollToTop.tsx`.

## Dominio e hosting
- Sito pubblicato: `https://glitchsociety.dev` su **Vercel** (deploy da `master`).
- Tutti gli indirizzi assoluti (metadati, sitemap, canonical) usano `glitchsociety.dev` (T13).
- Regole di routing Vercel: `vercel.json` (tutte le rotte → `index.html`; verifica online → T14).

## Link esterni (dove sono scritti)

| Link | Dove |
|---|---|
| Academy `academy.glitchsociety.dev` | `content/featuredCourse.ts` |
| Telegram `t.me/glitchsociety_dev` | `content/community.ts`, `content/footer.ts`, `content/hero.ts`, `index.html` |
| Instagram, Linktree | `content/footer.ts`, `index.html` |
| Email di contatto `glitchacademycrew@...` (pulsante "Raccontaci il tuo progetto", link "scrivici direttamente", footer) | **solo** `content/site.ts` (`contactEmail`, T44) |
| Email del titolare nelle pagine legali | `content/privacy.ts`, `content/cookies.ts` |
| Lu.ma (iscrizioni, pagamenti) | `content/privacy.ts`, `content/cookies.ts` |

Se cambia un link, aggiornare **tutte** le righe della tabella.

## Stile e grafica
- Colori, variabili CSS (`--primary`, `--background`…): `src/index.css`
- Tema Tailwind, font, animazioni: `tailwind.config.ts`
- Logo, favicon, immagine social: `public/` (`glitch_logo-425.webp` usato dal sito, `glitch_logo.png` riserva e metadati, `favicon.png`, `ascii-art.png`)

## SEO e condivisione
- Titolo, descrizione, keyword, Open Graph, Twitter, JSON-LD, `theme-color`: `index.html` (`theme-color` arancione `#FF6A38`)
- Titolo e canonical **per pagina** (cambiano quando si cambia pagina): `components/PageMeta.tsx`; nome, dominio, titolo home: `content/site.ts` (tenerli uguali a `index.html`); lì anche l'email di contatto (`contactEmail`)
- Robot: `public/robots.txt` (cita la sitemap); elenco pagine per i motori: `public/sitemap.xml` (aggiornarlo se si aggiunge una pagina in `src/App.tsx`)

## Appunti locali (fuori da git)
- `private/` (in `.gitignore`, resta solo su questo computer)

## Configurazione e strumenti
- Dipendenze e script (`dev`, `build` = controllo tipi + vite, `lint`, `preview`): `package.json` (nome `glitch-society`) → T28 (React Router v7)
- Build e alias `@` → `src/`: `vite.config.ts`
- TypeScript: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Lint: `eslint.config.js`; PostCSS: `postcss.config.js`
