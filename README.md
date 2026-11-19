# GL!TCH Society

Sito di **GL!TCH Society**: community di formazione tech con corsi ed eventi su coding, AI, creative development e blockchain.
Online su [glitchsociety.dev](https://glitchsociety.dev) (Vercel, pubblicato dal ramo `master`).

Per orientarsi: [MAP.md](MAP.md) porta da un argomento al file giusto; [TASKS.md](TASKS.md) è l'elenco dei compiti.

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animazioni
- **React Router** - Routing
- **Lucide** - Icone

## 📦 Installazione

```bash
# Clona il repository
git clone https://github.com/GiovanniRaniolo/glitch-society.git

# Entra nella directory
cd glitch-society

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## 🛠️ Scripts

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Controllo dei tipi + build per produzione |
| `npm run build:dev` | Build in modalità sviluppo (senza controllo dei tipi) |
| `npm run preview` | Preview della build |
| `npm run lint` | Esegue ESLint |

## 📁 Struttura

```
public/               # Logo, favicon, immagine social, robots.txt
src/
├── components/       # Componenti comuni (pulsanti, intestazioni, icone, pagine legali)
│   └── sections/     # Sezioni della home (Hero, Corso, Manifesto, Community, Footer)
├── content/          # Testi del sito: per cambiare un testo si tocca solo qui
├── pages/            # Pagine: home, Privacy, Cookie, 404
├── App.tsx           # Rotte
└── index.css         # Colori e stili globali
vercel.json           # Regole di routing su Vercel
```

## 📄 Licenza

MIT © GL!TCH Society
