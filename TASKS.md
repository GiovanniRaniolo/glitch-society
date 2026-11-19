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

## Aperti

### T01 — Installare le dipendenze e verificare la build
- **Problema:** `node_modules` assente; non sappiamo se build e lint passano oggi.
- **Chi:** agente
- **File:** `package.json`, `package-lock.json`
- **Fatto quando:** `npm install`, `npm run build` e `npm run lint` finiscono senza errori (o gli errori sono annotati come nuovi compiti).
- **Blocca:** T06, T07, T08.

### T02 — Inserire la Partita IVA del titolare
- **Problema:** nella Privacy Policy il titolare ha `vat: "[DA INSERIRE]"`.
- **Chi:** utente (fornisce il dato), poi agente
- **File:** `src/content/privacy.ts`
- **Fatto quando:** `grep "DA INSERIRE" src` non trova nulla.

### T03 — Decidere cosa mostrare dopo il corso di febbraio 2026
- **Problema:** il blocco "Corso in partenza" annuncia l'avvio del 21/02/2026 con "Early bird attivo" e "Ultimi posti": oggi è scaduto.
- **Chi:** utente (decide: nuova edizione, corso concluso, o togliere la sezione)
- **File:** `src/content/featuredCourse.ts`, `src/pages/Index.tsx`
- **Fatto quando:** la decisione è scritta qui sotto e c'è il compito di esecuzione (T03b).

### T04 — Aggiornare date legali e copyright
- **Problema:** Privacy e Cookie Policy dicono "Novembre 2025"; il copyright nel footer è fermo al 2025.
- **Chi:** agente (data esatta da confermare con l'utente se i testi legali cambiano)
- **File:** `src/content/privacy.ts`, `src/content/cookies.ts`, `src/content/footer.ts`
- **Fatto quando:** le date riportano il mese dell'ultima revisione reale; il copyright è l'anno corrente (o calcolato).

### T05 — Togliere i link scritti a mano nella Hero
- **Problema:** `HeroSection.tsx` ha gli URL di Academy e Telegram scritti nel codice, invece di leggerli da `src/content/`. Se cambiano, vanno aggiornati in più punti (già successo, vedi commit `bb0f319`).
- **Chi:** agente
- **File:** `src/content/hero.ts`, `src/components/sections/HeroSection.tsx`
- **Fatto quando:** `grep -n "https://" src/components/sections/HeroSection.tsx` non trova nulla; la pagina mostra gli stessi link.

### T06 — Galleria "Momenti Glitch": usarla o toglierla
- **Problema:** `community.ts` cita 4 foto in `/gallery/`, ma la cartella non esiste e la sezione non le usa.
- **Chi:** utente (ha le foto? sì → agente le collega; no → agente toglie i dati)
- **File:** `src/content/community.ts`, `src/components/sections/CommunitySection.tsx`, `public/gallery/`
- **Fatto quando:** o la galleria appare con foto reali, o il blocco `gallery` non è più nel codice.
- **Dipende da:** T01.

### T07 — Rimuovere componenti shadcn/ui non usati
- **Problema:** ~50 file in `src/components/ui/` e nessuna pagina o sezione ne importa uno.
- **Chi:** agente
- **File:** `src/components/ui/*`
- **Fatto quando:** restano solo i componenti importati da pagine/sezioni (oggi nessuno); `npm run build` passa.
- **Dipende da:** T01. **Blocca:** T08.

### T08 — Rimuovere dipendenze npm non usate
- **Problema:** librerie installate ma non usate (es. `@tanstack/react-query`, `recharts`, `next-themes`, Radix, e il doppio plugin `@vitejs/plugin-react-swc`).
- **Chi:** agente
- **File:** `package.json`, `package-lock.json`
- **Fatto quando:** ogni dipendenza rimasta è importata da almeno un file in `src/` o da un file di config; build e lint passano.
- **Dipende da:** T07.

### T09 — Eliminare `src/App.css` non usato
- **Problema:** il file esiste ma nessuno lo importa (resto del modello Vite).
- **Chi:** agente
- **File:** `src/App.css`
- **Fatto quando:** il file non c'è più e la build passa.

### T10 — Allineare nome e README
- **Problema:** `package.json` si chiama `vite_react_shadcn_ts`; il README cita `src/assets/` (inesistente) e descrive il sito come "Gl!tch Academy - Da Zero a Developer in 7 Settimane".
- **Chi:** agente
- **File:** `package.json`, `README.md`
- **Fatto quando:** nome pacchetto `glitch-society`; struttura nel README uguale alle cartelle reali; descrizione coerente con il sito della community.

### T11 — Colore `theme-color` incoerente
- **Problema:** `index.html` usa `#00ff00` (verde), il colore primario del sito è arancione (`hsl(15 100% 61%)` in `index.css`).
- **Chi:** utente (conferma il colore), poi agente
- **File:** `index.html`
- **Fatto quando:** `theme-color` corrisponde al colore scelto.

### T12 — Aggiungere sitemap
- **Problema:** `robots.txt` c'è, ma manca `sitemap.xml` per le 3 pagine (`/`, `/privacy-policy`, `/cookie-policy`).
- **Chi:** agente
- **File:** `public/sitemap.xml`, `public/robots.txt`
- **Fatto quando:** `public/sitemap.xml` elenca le 3 pagine e `robots.txt` lo cita con `Sitemap:`.

## Decisioni prese sui compiti
(vuoto — qui una o due frasi per decisione, incluse le proposte respinte)

## Fatti
(vuoto)
