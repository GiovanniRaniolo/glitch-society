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
T14 (verifica dopo deploy) → T05 → T22 → T23 → T24 → T25 → T10 → T12 → T26 → T27 → T28

## In attesa dell'utente
- T03 — dati dell'evento one-shot del 12 dicembre (li fornisce l'utente).
- T20 — comportamento del pulsante Hero: **riproporre la domanda quando tutte le sistemazioni sono finite.**

## Da attenzionare (ricordarlo all'utente a fine blocchi grandi o sessioni lunghe)
- ⚠️ **T02 — Partita IVA del titolare** da inserire nella Privacy Policy.

## Aperti

### T02 🟠 Inserire la Partita IVA del titolare — utente, poi agente
- **Problema:** nella Privacy Policy il titolare ha `vat: "[DA INSERIRE]"`, mostrato così sul sito.
- **Stato:** l'utente non l'ha ancora fornita; ricordarlo a fine blocchi grandi o sessioni lunghe (vedi "Da attenzionare"). Il titolare è già "GL!TCH Society" (T21).
- **File:** `src/content/privacy.ts`
- **Fatto quando:** `grep "DA INSERIRE" src` non trova nulla.

### T03 🟠 Sezione corso → evento one-shot del 12 dicembre — utente, poi agente
- **Problema:** "Corso in partenza" annuncia il 21/02/2026 con "Early bird attivo" e "Ultimi posti": scaduto.
- **Decisione:** la sezione resta; diventerà l'incontro one-shot del 12 dicembre. I dati arrivano dall'utente più avanti.
- **File:** `src/content/featuredCourse.ts`, `src/components/sections/FeaturedCourseSection.tsx`
- **Fatto quando:** la sezione mostra i dati dell'evento forniti dall'utente; nessun riferimento al corso di febbraio.
- **Nota:** da controllare a schermo da telefono: il bollino "EARLY BIRD" (posizione assoluta in alto a destra) potrebbe coprire la prima scheda dei dettagli.

### T04 ⚪ Aggiornare date legali e copyright — agente
- **Problema:** Privacy e Cookie Policy dicono "Novembre 2025"; copyright fermo al 2025.
- **File:** `src/content/privacy.ts`, `src/content/cookies.ts`, `src/content/footer.ts`
- **Fatto quando:** data = ultima revisione reale dei testi; copyright = anno corrente (o calcolato).

### T05 🟡 Togliere i link scritti a mano nella Hero — agente
- **Problema:** `HeroSection.tsx` ha gli URL di Academy e Telegram nel codice invece che in `src/content/` (già cambiati in più punti, commit `bb0f319`).
- **File:** `src/content/hero.ts`, `src/components/sections/HeroSection.tsx`
- **Fatto quando:** `grep -n "https://" src/components/sections/HeroSection.tsx` è vuoto; link invariati a schermo.

### T10 ⚪ Allineare nome pacchetto e README — agente
- **Problema:** `package.json` si chiama `vite_react_shadcn_ts`; il README cita `src/assets/` (inesistente) e descrive "Gl!tch Academy - 7 settimane".
- **File:** `package.json`, `README.md`
- **Fatto quando:** nome `glitch-society`; struttura e descrizione nel README uguali al progetto reale.

### T12 ⚪ Aggiungere sitemap — agente
- **Problema:** manca `sitemap.xml` (sul sito vero risponde 404).
- **File:** `public/sitemap.xml`, `public/robots.txt`
- **Fatto quando:** sitemap con le 3 pagine sul dominio corretto; `robots.txt` la cita con `Sitemap:`.
- **Dipende da:** T13.

### T14 🔴 Privacy e Cookie Policy danno 404 se aperte direttamente — agente
- **Problema:** su Vercel manca la regola che rimanda tutte le rotte a `index.html`. `/privacy-policy` e `/cookie-policy` funzionano solo cliccando dal footer; link diretto, ricarica o Google → 404 (verificato 2026-11-19).
- **File:** `vercel.json` (nuovo)
- **Stato (2026-11-19):** `vercel.json` creato con riscrittura di tutte le rotte su `/index.html` (i file statici in `public/` hanno la precedenza). Manca solo la verifica col curl **dopo il deploy da master**.
- **Fatto quando:** dopo il deploy, `curl -o /dev/null -w "%{http_code}" https://glitchsociety.dev/privacy-policy` = 200 (idem cookie-policy).

### T20 🟠 Pulsante Hero "Esplora gli Eventi" porta al corso — utente
- **Problema:** l'etichetta parla di eventi, il link apre `academy.glitchsociety.dev` (sito del corso, uguale al pulsante del corso).
- **Stato:** l'utente ha già un'idea; **non toccare**. Riproporre la domanda quando le altre sistemazioni sono finite.
- **File:** `src/content/hero.ts`
- **Fatto quando:** etichetta e destinazione coincidono (decisione scritta sotto).

### T22 🟡 Intestazione di sezione unica (badge + titolo + testo) — agente
- **Problema:** la "pillola" badge è scritta 6 volte in 3 varianti (padding, peso, bordo diversi); titoli h2 con taglie diverse.
- **File:** nuovo `src/components/SectionHeader.tsx`; sezioni Hero, FeaturedCourse, Manifesto, About, Community
- **Fatto quando:** tutte le sezioni usano `SectionHeader`; badge con un solo stile.

### T23 🟡 Pulsante d'azione unico — agente
- **Problema:** 4 stili di pulsante (angoli `lg`/`xl`, zoom 1.05/1.02, peso diverso). Link esterni incoerenti: Academy apre nella stessa scheda, Telegram e social in una nuova.
- **File:** nuovo `src/components/CtaLink.tsx`; `HeroSection.tsx`, `FeaturedCourseSection.tsx`, `CommunitySection.tsx`, `pages/NotFound.tsx`
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

### T28 ⚪ Passare a React Router v7 — agente
- **Problema:** dopo T18 restano 2 avvisi medi di `react-router` (redirect con barra rovesciata in `<Link>`/`useNavigate`); la correzione esiste solo nella v7 (salto di versione maggiore). Oggi non sfruttabile: i link del sito sono fissi, nessun percorso viene dall'utente.
- **File:** `package.json`, `package-lock.json`, `src/App.tsx`, file che importano `react-router-dom`
- **Fatto quando:** `npm audit` = 0 avvisi; Home, Privacy, Cookie e 404 si aprono e i link interni non ricaricano la pagina.

## Decisioni prese sui compiti
- 2026-11-19 — Il dominio del sito è `glitchsociety.dev` (Vercel): tutti gli indirizzi assoluti usano questo (T13).
- 2026-11-19 — Nome ufficiale: **GL!TCH Society**; è anche il titolare in Privacy Policy (non "GL!TCH Academy").
- 2026-11-19 — `theme-color` = arancione `#FF6A38`.
- 2026-11-19 — Galleria "Momenti Glitch": tolta per ora (niente foto).
- 2026-11-19 — Sezione corso: resta, diventerà l'evento one-shot del 12 dicembre (dati dall'utente).
- 2026-11-19 — Pulsante Hero (T20): rinviato; riproporre la domanda a fine sistemazioni.
- 2026-11-19 — P.IVA (T02): non ancora fornita; ricordarla solo a fine blocchi grandi o sessioni lunghe (correzione dell'utente: non a ogni resoconto).
- 2026-11-19 — Commit e merge su master li fa l'utente; il deploy (e quindi la verifica di T14) si fa a sviluppo finito.
- 2026-11-19 — Pagine legali: grassetti e link si scrivono nel testo del contenuto (`**…**`, `[testo](indirizzo)`), letti da `RichText`.

- 2026-11-19 — Nome del marchio (T21): restano volutamente `alternateName: "GLITCH Society"` e la keyword "glitch academy" in `index.html` (servono alle ricerche), "Unisciti a GL!TCH" (forma breve, come il logo), i prompt `gl!tch@society` / `user@gl!tch` (stile terminale) e l'email `glitchacademycrew@` (indirizzo reale).

## Fatti
- 2026-11-19 — **T01** Dipendenze installate; `npm run build` passa. Lint non parte → T16; controllo tipi fallisce → T17; vulnerabilità → T18.
- 2026-11-19 — **T13** `index.html`: canonical, Open Graph, Twitter e JSON-LD ora su `https://glitchsociety.dev` (9 URL); `ascii-art.png` e `glitch_logo.png` rispondono 200 sul dominio vero; build passa. Visibile online dopo il deploy da master.
- 2026-11-19 — **T11** `theme-color` in `index.html` = `#FF6A38`.
- 2026-11-19 — **T15** Privacy e Cookie usano un solo componente `src/components/LegalPage.tsx`; grassetti e link scritti in `content/privacy.ts` e `content/cookies.ts` (formato in `content/legalTypes.ts`, lettura in `components/RichText.tsx`). Nessun `includes(`; controllato nel browser: "Il processo di iscrizione…" una volta, "Quando clicchi…" visibile, un solo "Nota:", link interno senza ricarica, link esterni in nuova scheda. Cambi visivi minimi: in Cookie §3 il grassetto copre solo il nome della categoria; email del titolare cliccabile.
- 2026-11-19 — **T16** `eslint.config.js` usa `reactHooks.configs['recommended-latest']`; `tailwind.config.ts` importa `tailwindcss-animate` invece di `require` (CSS generato identico). `npm run lint` = 0 errori (dopo T07).
- 2026-11-19 — **T07** Rimossa `src/components/ui/` (49 file, nessuno importato). `tailwind.config.ts`: tolti colori `sidebar`, animazioni `accordion`, percorsi inesistenti; `content` = `index.html` + `src/`. CSS da 67 a 22 kB; controllato che nessuna classe tolta sia usata dal sito; home a schermo invariata, console senza errori.
- 2026-11-19 — **T17** Script `build` = `tsc -b && vite build`; `tsc` 0 errori; provato che un errore di tipo blocca la build.
- 2026-11-19 — **T08** Tolti 18 pacchetti di produzione (tutti i Radix, `@hookform/resolvers`, `@tanstack/react-query`, `class-variance-authority`, `clsx`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `next-themes`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `tailwind-merge`, `vaul`, `zod`) e 2 di sviluppo (`@tailwindcss/typography`, `@vitejs/plugin-react-swc`). Restano 6 di produzione, tutti importati. Build con file identici a prima (stesso hash), lint 0 errori; avvisi audit in produzione da 10 a 8.
- 2026-11-19 — **T18** `npm audit fix` (senza `--force`; solo lockfile, versioni in `package.json` invariate) + `npm update typescript-eslint`. Avvisi da 19 a 2 medi (0 alti, anche in produzione): restano quelli di `react-router` → T28. Aggiornati tra gli altri react-router-dom 6.30.6, vite 7.3.8, postcss 8.5.33. Build, tipi e lint passano; nel browser (build di produzione) Home, Privacy, Cookie e 404 ok, navigazione interna senza ricarica.
- 2026-11-19 — **T09** Eliminato `src/App.css` (esempio di Vite, non importato da nessun file); build con file identici a prima.
- 2026-11-19 — **T19** Pagina 404 rifatta: testi italiani in `content/notFound.ts`, Header e Footer, riga in stile terminale col percorso cercato (va a capo se lungo), pulsante `<Link>` "Torna alla home" (stile del pulsante principale della Hero, da unificare in T23). Tolto il `console.error`. Controllato nel browser: niente errori del sito in console, ritorno alla home senza ricarica, da telefono (375 px) nessuno scorrimento orizzontale.
- 2026-11-19 — **T06** Tolto il blocco `gallery` da `content/community.ts` (non usato, foto inesistenti). Testi originali, da riusare quando arrivano le foto: titolo "Momenti Glitch"; foto `/gallery/event1-4.jpg` con alt "Hack live session", "Deploy celebration", "Community networking", "Code together". `grep gallery src` vuoto, build passa.
- 2026-11-19 — **T21** Grafia "GL!TCH Society" in `content/hero.ts`, `about.ts`, `manifesto.ts`, `footer.ts`, `privacy.ts` (titolare), `alt` dei loghi in `Header.tsx`/`Footer.tsx`, README. Badge della Hero e titolo di About restano maiuscoli via CSS (`uppercase`). Nessun "Academy" come nome del marchio. Controllato nel browser: a schermo identico a prima, titolare Privacy = GL!TCH Society.
