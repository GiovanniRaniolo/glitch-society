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
| Hero, "Break the Code", stats 0/404/∞, pulsanti | `sections/HeroSection.tsx` | `content/hero.ts` (`heroContent`) | URL scritti a mano → T05 |
| Finto browser, terminale `init_revolution.sh` | `sections/BrowserMockup.tsx` | `content/hero.ts` (`browserText`) | |
| Separatore tra sezioni | `sections/SectionDivider.tsx` | — | |
| Corso in evidenza, date, sede ERETICO, posti, early bird | `sections/FeaturedCourseSection.tsx` | `content/featuredCourse.ts` (`featuredCourseContent`) | scaduto → T03 |
| Manifesto, mission, principi | `sections/ManifestoSection.tsx` | `content/manifesto.ts` (`manifestoContent`) | |
| Chi siamo, essenza, valori | `sections/AboutSection.tsx` | `content/about.ts` (`aboutContent`) | |
| Community, Telegram, galleria | `sections/CommunitySection.tsx` | `content/community.ts` (`communityContent`) | galleria non usata → T06 |
| Footer, social, email, link legali, copyright | `sections/Footer.tsx` | `content/footer.ts` (`footerContent`) | copyright → T04 |

Esportazioni raccolte in `src/components/sections/index.ts`; composizione in `src/pages/Index.tsx`.

## Pagine e rotte

| Rotta | Pagina | Testi |
|---|---|---|
| `/` | `src/pages/Index.tsx` | vedi tabella sopra |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | `content/privacy.ts` (P.IVA → T02) |
| `/cookie-policy` | `src/pages/CookiePolicy.tsx` | `content/cookies.ts` |
| `*` (404) | `src/pages/NotFound.tsx` | testo nel componente |

Rotte definite in `src/App.tsx`; ritorno in cima al cambio pagina: `src/components/ScrollToTop.tsx`.

## Dominio e hosting
- Sito pubblicato: `https://glitchsociety.dev` su **Vercel** (deploy da `master`).
- Tutti gli indirizzi assoluti (metadati, sitemap, canonical) usano `glitchsociety.dev` (T13).
- Regole di routing Vercel: `vercel.json` (da creare → T14).

## Link esterni (dove sono scritti)

| Link | Dove |
|---|---|
| Academy `academy.glitchsociety.dev` | `content/featuredCourse.ts`, `sections/HeroSection.tsx` |
| Telegram `t.me/glitchsociety_dev` | `content/community.ts`, `content/footer.ts`, `sections/HeroSection.tsx`, `index.html` |
| Instagram, Linktree | `content/footer.ts`, `index.html` |
| Email `glitchacademycrew@...` | `content/footer.ts`, `content/privacy.ts`, `content/cookies.ts` |
| Lu.ma (iscrizioni, pagamenti) | `content/privacy.ts`, `content/cookies.ts` |

Se cambia un link, aggiornare **tutte** le righe della tabella.

## Stile e grafica
- Colori, variabili CSS (`--primary`, `--background`…): `src/index.css`
- Tema Tailwind, font, animazioni: `tailwind.config.ts`
- Logo, favicon, immagine social: `public/` (`glitch_logo.*`, `favicon.png`, `ascii-art.png`)
- Componenti shadcn/ui: `src/components/ui/` — oggi **nessuno usato** → T07

## SEO e condivisione
- Titolo, descrizione, keyword, Open Graph, Twitter, JSON-LD, `theme-color`: `index.html` (colore → T11)
- Robot: `public/robots.txt`; sitemap mancante → T12

## Configurazione e strumenti
- Dipendenze e script (`dev`, `build`, `lint`, `preview`): `package.json` → T08, T10
- Build e alias `@` → `src/`: `vite.config.ts`
- TypeScript: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Lint: `eslint.config.js`; PostCSS: `postcss.config.js`
- File non usato: `src/App.css` → T09
