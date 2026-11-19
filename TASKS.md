# TASKS — Elenco unico dei compiti

Cosa contiene: tutti i compiti aperti e chiusi del sito GL!TCH Society.
Chi lo aggiorna: chi chiude o apre un compito (utente o agente), nello stesso commit del lavoro.
Collegamenti: per trovare i file di un argomento vedi [MAP.md](MAP.md).

## Regole
- Un compito = un problema, una persona, pochi file, un "fatto quando" controllabile.
- Si chiude uno alla volta (in parallelo solo se tocca file diversi).
- Se è più grande del previsto, si divide **prima** di farlo.
- Chiuso: spostare in fondo sotto "Fatti", con data.
- **Chi**: `utente` = serve una decisione o un dato dell'utente; `agente` = eseguibile da solo.
- **Priorità**: 🔴 critico (sito rotto o danno) · 🟠 bug · 🟡 pulizia/unificazione · ⚪ bassa.

## Ordine consigliato (agente, senza attese)
T13 → T14 → T15 → T16 → T07 → T17 → T08 → T18 → T09 → T19 → T05 → T22 → T23 → T24 → T25 → T10 → T12 → T26 → T27

## In attesa dell'utente
T02 (P.IVA) · T03 (corso scaduto) · T06 (foto galleria) · T11 (colore) · T20 (pulsante Hero) · T21 (nome marchio)

## Aperti

### T02 🟠 Inserire la Partita IVA del titolare — utente, poi agente
- **Problema:** nella Privacy Policy il titolare ha `vat: "[DA INSERIRE]"`, mostrato così sul sito.
- **File:** `src/content/privacy.ts`
- **Fatto quando:** `grep "DA INSERIRE" src` non trova nulla.

### T03 🟠 Decidere cosa mostrare dopo il corso di febbraio 2026 — utente
- **Problema:** "Corso in partenza" annuncia il 21/02/2026 con "Early bird attivo" e "Ultimi posti": scaduto.
- **File:** `src/content/featuredCourse.ts`, `src/pages/Index.tsx`
- **Fatto quando:** decisione scritta sotto "Decisioni" e compito di esecuzione aperto.
- **Nota:** da controllare a schermo da telefono: il bollino "EARLY BIRD" (posizione assoluta in alto a destra) potrebbe coprire la prima scheda dei dettagli.

### T04 ⚪ Aggiornare date legali e copyright — agente
- **Problema:** Privacy e Cookie Policy dicono "Novembre 2025"; copyright fermo al 2025.
- **File:** `src/content/privacy.ts`, `src/content/cookies.ts`, `src/content/footer.ts`
- **Fatto quando:** data = ultima revisione reale dei testi; copyright = anno corrente (o calcolato).

### T05 🟡 Togliere i link scritti a mano nella Hero — agente
- **Problema:** `HeroSection.tsx` ha gli URL di Academy e Telegram nel codice invece che in `src/content/` (già cambiati in più punti, commit `bb0f319`).
- **File:** `src/content/hero.ts`, `src/components/sections/HeroSection.tsx`
- **Fatto quando:** `grep -n "https://" src/components/sections/HeroSection.tsx` è vuoto; link invariati a schermo.

### T06 🟡 Galleria "Momenti Glitch": usarla o toglierla — utente, poi agente
- **Problema:** `community.ts` cita 4 foto in `/gallery/`; la cartella non esiste e la sezione non le usa.
- **File:** `src/content/community.ts`, `src/components/sections/CommunitySection.tsx`, `public/gallery/`
- **Fatto quando:** galleria visibile con foto reali, oppure blocco `gallery` rimosso.

### T07 🟡 Rimuovere componenti shadcn/ui non usati — agente
- **Problema:** ~50 file in `src/components/ui/`, nessuno importato da pagine o sezioni; importano `@/lib/utils` e `@/hooks/*` che **non esistono** (causa dei 58 errori di T17).
- **File:** `src/components/ui/*`, `tailwind.config.ts` (colori `sidebar`, animazioni `accordion`, percorsi `./pages`, `./components`, `./app` inesistenti)
- **Fatto quando:** cartella `ui/` rimossa, config Tailwind ripulita, `npm run build` passa.
- **Blocca:** T08, T17.

### T08 🟡 Rimuovere dipendenze npm non usate — agente
- **Problema:** librerie installate ma non usate (Radix, `@tanstack/react-query`, `recharts`, `next-themes`, `zod`, `react-hook-form`…) e doppio plugin `@vitejs/plugin-react-swc`.
- **File:** `package.json`, `package-lock.json`
- **Fatto quando:** ogni dipendenza è importata da `src/` o da un file di config; build passa.
- **Dipende da:** T07. **Blocca:** T18.

### T09 ⚪ Eliminare `src/App.css` non usato — agente
- **File:** `src/App.css` · **Fatto quando:** file rimosso, build passa.

### T10 ⚪ Allineare nome pacchetto e README — agente
- **Problema:** `package.json` si chiama `vite_react_shadcn_ts`; il README cita `src/assets/` (inesistente) e descrive "Gl!tch Academy - 7 settimane".
- **File:** `package.json`, `README.md`
- **Fatto quando:** nome `glitch-society`; struttura e descrizione nel README uguali al progetto reale.
- **Dipende da:** T21 (nome ufficiale).

### T11 ⚪ Colore `theme-color` incoerente — utente, poi agente
- **Problema:** `index.html` usa `#00ff00` (verde); il primario del sito è arancione (`hsl(15 100% 61%)`).
- **File:** `index.html` · **Fatto quando:** `theme-color` = colore scelto.

### T12 ⚪ Aggiungere sitemap — agente
- **Problema:** manca `sitemap.xml` (sul sito vero risponde 404).
- **File:** `public/sitemap.xml`, `public/robots.txt`
- **Fatto quando:** sitemap con le 3 pagine sul dominio corretto; `robots.txt` la cita con `Sitemap:`.
- **Dipende da:** T13.

### T13 🔴 Dominio sbagliato in tutti i metadati — agente
- **Problema:** `index.html` indica `glitch-society.com` in canonical, Open Graph, Twitter e JSON-LD. Il sito vero è `glitchsociety.dev` (Vercel). Effetti: Google e le anteprime social puntano al dominio sbagliato.
- **File:** `index.html`
- **Fatto quando:** `grep -c "glitch-society.com" index.html` = 0; tutti gli URL usano `https://glitchsociety.dev`.

### T14 🔴 Privacy e Cookie Policy danno 404 se aperte direttamente — agente
- **Problema:** su Vercel manca la regola che rimanda tutte le rotte a `index.html`. `/privacy-policy` e `/cookie-policy` funzionano solo cliccando dal footer; link diretto, ricarica o Google → 404 (verificato 2026-11-19).
- **File:** `vercel.json` (nuovo)
- **Fatto quando:** dopo il deploy, `curl -o /dev/null -w "%{http_code}" https://glitchsociety.dev/privacy-policy` = 200 (idem cookie-policy).

### T15 🟠 Pagine legali: un solo componente, testi solo dal contenuto — agente
- **Problema:** `PrivacyPolicy.tsx` e `CookiePolicy.tsx` sono quasi copie; riconoscono i paragrafi con `text.includes(...)` e li **sostituiscono** con frasi scritte nel componente. Bug visibili:
  - Privacy §3: il paragrafo "Il processo di iscrizione…" appare **due volte**; "Quando clicchi… Lu.ma" non appare mai.
  - Cookie §4: "**Nota: Nota:** Disabilitare…" (prefisso doppio).
  - Modificare il testo in `src/content/` può non avere effetto.
  - Classi `prose prose-invert` inerti (plugin typography non attivo).
  - Link a Cookie Policy con `<a href>` → ricarica intera pagina.
- **File:** `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx`, nuovo `src/components/LegalPage.tsx`, `src/content/privacy.ts`, `src/content/cookies.ts`
- **Fatto quando:** nessun `includes(` nelle pagine legali; grassetti definiti nel contenuto; i due bug sopra non compaiono a schermo; link interni con `<Link>`.

### T16 🟠 ESLint non parte — agente
- **Problema:** `npm run lint` si blocca: `eslint.config.js` usa `reactHooks.configs.flat.recommended`, che nella versione installata (5.2) non esiste (ci sono `recommended`, `recommended-latest`).
- **File:** `eslint.config.js` (+ file con errori di lint trovati dopo)
- **Fatto quando:** `npm run lint` termina con 0 errori.

### T17 🟠 Controllo dei tipi: 58 errori e build che non lo esegue — agente
- **Problema:** `tsc -p tsconfig.app.json` dà 58 errori (tutti in `src/components/ui/`); `npm run build` lancia solo `vite build`, quindi gli errori di tipo non bloccano mai.
- **File:** `package.json` (script `build` → `tsc -b && vite build`)
- **Fatto quando:** `npm run build` include il controllo tipi e passa.
- **Dipende da:** T07.

### T18 🟠 Vulnerabilità npm — agente
- **Problema:** `npm audit` 22 avvisi (10 in produzione, 9 alti: `@remix-run/router` di react-router, `zod`, `lodash`, `nanoid`, `postcss`…).
- **File:** `package.json`, `package-lock.json`
- **Fatto quando:** `npm audit --omit=dev` = 0 alti; build passa.
- **Dipende da:** T08 (molte spariscono togliendo le librerie inutili).

### T19 🟠 Pagina 404 fuori stile — agente
- **Problema:** testo in inglese ("Oops! Page not found"), senza Header/Footer, `console.error` in produzione, link con `<a>` (ricarica).
- **File:** `src/pages/NotFound.tsx`, nuovo `src/content/notFound.ts`
- **Fatto quando:** testi italiani da `content/`, Header e Footer presenti, nessun `console.error`, link `<Link>`.

### T20 🟠 Pulsante Hero "Esplora gli Eventi" porta al corso — utente
- **Problema:** l'etichetta parla di eventi, il link apre `academy.glitchsociety.dev` (sito del corso, uguale al pulsante del corso).
- **File:** `src/content/hero.ts`
- **Fatto quando:** etichetta e destinazione coincidono (decisione scritta sotto).

### T21 🟡 Nome del marchio scritto in 6 modi — utente, poi agente
- **Problema:** "GL!TCH Society", "Gl!tch Society", "GL!TCH SOCIETY", "Glitch Society", "Glitch Academy" (alt del logo in Header), "GL!TCH ACADEMY" (titolare privacy).
- **File:** `src/content/*`, `Header.tsx`, `Footer.tsx`, `index.html`, `README.md`
- **Fatto quando:** grafia ufficiale decisa (sotto) e usata ovunque (maiuscolo solo come stile CSS).

### T22 🟡 Intestazione di sezione unica (badge + titolo + testo) — agente
- **Problema:** la "pillola" badge è scritta 6 volte in 3 varianti (padding, peso, bordo diversi); titoli h2 con taglie diverse.
- **File:** nuovo `src/components/SectionHeader.tsx`; sezioni Hero, FeaturedCourse, Manifesto, About, Community
- **Fatto quando:** tutte le sezioni usano `SectionHeader`; badge con un solo stile.

### T23 🟡 Pulsante d'azione unico — agente
- **Problema:** 4 stili di pulsante (angoli `lg`/`xl`, zoom 1.05/1.02, peso diverso). Link esterni incoerenti: Academy apre nella stessa scheda, Telegram e social in una nuova.
- **File:** nuovo `src/components/CtaLink.tsx`; `HeroSection.tsx`, `FeaturedCourseSection.tsx`, `CommunitySection.tsx`
- **Fatto quando:** i pulsanti usano `CtaLink`; ogni link esterno apre in nuova scheda con `rel="noopener noreferrer"`.

### T24 🟡 Mappa icone unica, icone scelte nel contenuto — agente
- **Problema:** 4 mappe icone diverse (FeaturedCourse, Manifesto, About, Community, Footer). Manifesto sceglie l'icona **per posizione**: aggiungere un 5° principio fa crashare la pagina (icona `undefined`); un nome icona sbagliato nel contenuto fa lo stesso.
- **File:** nuovo `src/components/icons.ts`; sezioni sopra; `src/content/manifesto.ts`
- **Fatto quando:** una sola mappa; ogni elemento del contenuto ha `icon`; icona mancante → nessun crash.

### T25 ⚪ Animazioni: durata ignorata in Manifesto e About — agente
- **Problema:** nelle varianti `fadeInUp` la chiave `transition` sta allo stesso livello di `initial`/`animate`, quindi framer-motion la tratta come variante e la ignora.
- **File:** `ManifestoSection.tsx`, `AboutSection.tsx`
- **Fatto quando:** `transition` dentro `animate`; build passa.

### T26 ⚪ Logo: usare il formato leggero — agente
- **Problema:** Header e Footer caricano `glitch_logo.png` (32 KB, 850×227); `glitch_logo.webp` (4 KB) è inutilizzato.
- **File:** `Header.tsx`, `Footer.tsx`
- **Fatto quando:** logo servito in webp (con png di riserva), dimensioni `width`/`height` indicate.

### T27 ⚪ Titolo e canonical per ogni pagina — agente
- **Problema:** tutte le pagine hanno titolo e canonical della home.
- **File:** `src/pages/*`
- **Fatto quando:** Privacy, Cookie e 404 hanno titolo proprio; canonical corretto per pagina.
- **Dipende da:** T13.

## Decisioni prese sui compiti
- 2026-11-19 — Il dominio del sito è `glitchsociety.dev` (Vercel): tutti gli indirizzi assoluti usano questo (T13).

## Fatti
- 2026-11-19 — **T01** Dipendenze installate; `npm run build` passa. Lint non parte → T16; controllo tipi fallisce → T17; vulnerabilità → T18.
