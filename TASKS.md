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
T14 (verifica dopo deploy) → T08 → T18 → T09 → T19 → T06 → T21 → T05 → T22 → T23 → T24 → T25 → T10 → T12 → T26 → T27

## In attesa dell'utente
- T03 — dati dell'evento one-shot del 12 dicembre (li fornisce l'utente).
- T20 — comportamento del pulsante Hero: **riproporre la domanda quando tutte le sistemazioni sono finite.**

## Da attenzionare (ricordarlo all'utente a fine blocchi grandi o sessioni lunghe)
- ⚠️ **T02 — Partita IVA del titolare** da inserire nella Privacy Policy.

## Aperti

### T02 🟠 Inserire la Partita IVA del titolare — utente, poi agente
- **Problema:** nella Privacy Policy il titolare ha `vat: "[DA INSERIRE]"`, mostrato così sul sito.
- **Stato:** l'utente non l'ha ancora fornita; ricordarlo a fine blocchi grandi o sessioni lunghe (vedi "Da attenzionare"). Il nome del titolare diventa "GL!TCH Society" in T21.
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

### T06 ⚪ Togliere la galleria "Momenti Glitch" — agente
- **Problema:** `community.ts` cita 4 foto in `/gallery/`; la cartella non esiste e la sezione non le usa.
- **Decisione:** togliere per ora; si rimette quando ci saranno le foto.
- **File:** `src/content/community.ts`
- **Fatto quando:** `grep -rn "gallery" src` è vuoto; build passa.

### T08 🟡 Rimuovere dipendenze npm non usate — agente
- **Problema:** librerie installate ma non usate (Radix, `@tanstack/react-query`, `recharts`, `next-themes`, `zod`, `react-hook-form`…) e doppio plugin `@vitejs/plugin-react-swc`.
- **File:** `package.json`, `package-lock.json`
- **Fatto quando:** ogni dipendenza è importata da `src/` o da un file di config; build passa.
- **Blocca:** T18. (T07 fatto: `ui/` non c'è più, quindi Radix & co. non sono più importati da nessuna parte.)

### T09 ⚪ Eliminare `src/App.css` non usato — agente
- **File:** `src/App.css` · **Fatto quando:** file rimosso, build passa.

### T10 ⚪ Allineare nome pacchetto e README — agente
- **Problema:** `package.json` si chiama `vite_react_shadcn_ts`; il README cita `src/assets/` (inesistente) e descrive "Gl!tch Academy - 7 settimane".
- **File:** `package.json`, `README.md`
- **Fatto quando:** nome `glitch-society`; struttura e descrizione nel README uguali al progetto reale.
- **Dipende da:** T21 (nome ufficiale).

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
- **Stato:** l'utente ha già un'idea; **non toccare**. Riproporre la domanda quando le altre sistemazioni sono finite.
- **File:** `src/content/hero.ts`
- **Fatto quando:** etichetta e destinazione coincidono (decisione scritta sotto).

### T21 🟡 Nome del marchio scritto in 6 modi — agente
- **Problema:** "GL!TCH Society", "Gl!tch Society", "GL!TCH SOCIETY", "Glitch Society", "Glitch Academy" (alt del logo in Header), "GL!TCH ACADEMY" (titolare privacy).
- **Decisione:** grafia ufficiale **GL!TCH Society**, anche come titolare della Privacy Policy.
- **File:** `src/content/*`, `Header.tsx`, `Footer.tsx`, `index.html`, `README.md`
- **Fatto quando:** "GL!TCH Society" ovunque nei testi (maiuscolo intero solo via CSS); nessun "Academy" come nome del marchio (resta solo nell'indirizzo `academy.glitchsociety.dev`).

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
- 2026-11-19 — Nome ufficiale: **GL!TCH Society**; è anche il titolare in Privacy Policy (non "GL!TCH Academy").
- 2026-11-19 — `theme-color` = arancione `#FF6A38`.
- 2026-11-19 — Galleria "Momenti Glitch": tolta per ora (niente foto).
- 2026-11-19 — Sezione corso: resta, diventerà l'evento one-shot del 12 dicembre (dati dall'utente).
- 2026-11-19 — Pulsante Hero (T20): rinviato; riproporre la domanda a fine sistemazioni.
- 2026-11-19 — P.IVA (T02): non ancora fornita; ricordarla solo a fine blocchi grandi o sessioni lunghe (correzione dell'utente: non a ogni resoconto).
- 2026-11-19 — Commit e merge su master li fa l'utente; il deploy (e quindi la verifica di T14) si fa a sviluppo finito.
- 2026-11-19 — Pagine legali: grassetti e link si scrivono nel testo del contenuto (`**…**`, `[testo](indirizzo)`), letti da `RichText`.

## Fatti
- 2026-11-19 — **T01** Dipendenze installate; `npm run build` passa. Lint non parte → T16; controllo tipi fallisce → T17; vulnerabilità → T18.
- 2026-11-19 — **T13** `index.html`: canonical, Open Graph, Twitter e JSON-LD ora su `https://glitchsociety.dev` (9 URL); `ascii-art.png` e `glitch_logo.png` rispondono 200 sul dominio vero; build passa. Visibile online dopo il deploy da master.
- 2026-11-19 — **T11** `theme-color` in `index.html` = `#FF6A38`.
- 2026-11-19 — **T15** Privacy e Cookie usano un solo componente `src/components/LegalPage.tsx`; grassetti e link scritti in `content/privacy.ts` e `content/cookies.ts` (formato in `content/legalTypes.ts`, lettura in `components/RichText.tsx`). Nessun `includes(`; controllato nel browser: "Il processo di iscrizione…" una volta, "Quando clicchi…" visibile, un solo "Nota:", link interno senza ricarica, link esterni in nuova scheda. Cambi visivi minimi: in Cookie §3 il grassetto copre solo il nome della categoria; email del titolare cliccabile.
- 2026-11-19 — **T16** `eslint.config.js` usa `reactHooks.configs['recommended-latest']`; `tailwind.config.ts` importa `tailwindcss-animate` invece di `require` (CSS generato identico). `npm run lint` = 0 errori (dopo T07).
- 2026-11-19 — **T07** Rimossa `src/components/ui/` (49 file, nessuno importato). `tailwind.config.ts`: tolti colori `sidebar`, animazioni `accordion`, percorsi inesistenti; `content` = `index.html` + `src/`. CSS da 67 a 22 kB; controllato che nessuna classe tolta sia usata dal sito; home a schermo invariata, console senza errori.
- 2026-11-19 — **T17** Script `build` = `tsc -b && vite build`; `tsc` 0 errori; provato che un errore di tipo blocca la build.
