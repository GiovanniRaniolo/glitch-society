// Testi della modalità nerd: il terminale a schermo intero nascosto nel sito (easter egg).
// Usati da: components/nerd/NerdMode.tsx. I contenuti di mission, etica, evento, community e partner
// arrivano dai rispettivi file in content/, così il terminale resta allineato alla pagina.
//
// Come si apre: codice Konami (↑ ↑ ↓ ↓ ← → ← → B A), scrivendo «nerd» sulla pagina,
// con il tasto ` (o ~), dall'indirizzo con #nerd, oppure toccando il cursore che lampeggia nel titolo.

export const nerdContent = {
  windowTitle: 'ospite@gl!tch: ~',
  user: 'ospite',
  host: 'gl!tch',
  closeLabel: 'Chiudi il terminale',
  dialogLabel: 'Modalità nerd: terminale di GL!TCH Society',
  inputLabel: 'Scrivi un comando',
  openLabel: 'Apri il terminale nascosto',
  boot: [
    'GL!TCH OS 26.12 — avvio',
    '[ OK ] manifesto caricato',
    '[ OK ] codice etico firmato (sola lettura)',
    '[ OK ] birra in fresco per il 12 dicembre',
    '[ OK ] modalità nerd attiva',
  ],
  welcome: 'Scrivi help, oppure tocca un comando qui sotto. Esc per uscire.',
  // Comandi mostrati come pulsanti sotto la riga di comando (utili soprattutto da telefono)
  quick: ['help', 'evento', 'mission', 'etica', 'community', 'contatti', 'matrix', 'exit'],
  help: [
    { cmd: 'chi-siamo', text: 'chi siamo e con chi lavoriamo' },
    { cmd: 'mission', text: "consulenza e formazione sull'AI" },
    { cmd: 'etica', text: 'cosa facciamo sempre e cosa mai' },
    { cmd: 'evento', text: 'il prossimo evento' },
    { cmd: 'community', text: 'il canale Telegram' },
    { cmd: 'partner', text: 'chi costruisce con noi' },
    { cmd: 'contatti', text: 'come scriverci' },
    { cmd: 'entra', text: 'apre il canale Telegram' },
    { cmd: 'mail', text: 'apre una mail per noi' },
    { cmd: 'vai', text: 'vai evento, mission, etica, community, partner o home: esce dal terminale e scorre lì' },
    { cmd: 'ls', text: 'elenca i file; cat <file> li legge' },
    { cmd: 'glitch', text: 'rompe lo schermo, per un attimo' },
    { cmd: 'matrix', text: 'pioggia di codice; un tocco o un tasto la ferma' },
    { cmd: 'birra', text: 'indovina' },
    { cmd: 'clear', text: 'pulisce lo schermo (anche Ctrl+L)' },
    { cmd: 'history', text: 'i comandi già scritti (↑ e ↓ per richiamarli)' },
    { cmd: 'exit', text: 'torna al sito (anche Esc)' },
  ],
  helpFooter: 'Tab completa i comandi. Ogni comando in arancione si può anche toccare.',
  notFound: (cmd: string) => `comando non trovato: ${cmd}. Scrivi help.`,
  // seguito dal comando cliccabile «entra»
  whoami: 'ospite. Per entrare nella community scrivi',
  sudo: 'Permesso negato: qui root non esiste. Le regole le trovi in etica.',
  rm: 'Niente da cancellare: il codice etico è in sola lettura.',
  catMissing: (file: string) => `cat: ${file}: file non trovato. Prova ls.`,
  catUsage: 'uso: cat <file>. Prova ls.',
  gotoUsage: 'uso: vai <evento|mission|etica|community|partner|home>',
  gotoMissing: (where: string) => `vai: ${where}: sezione non trovata.`,
  opening: (what: string) => `apro ${what} in una nuova scheda…`,
  reducedMotion: 'Animazioni ridotte dal sistema: niente effetti, solo testo.',
  matrixStop: 'matrix: fermata.',
  matrixHint: 'tocca o premi un tasto per fermarla',
  beer: ['   .~~~~.', '   i====i_', '   |cccc|_)', '   |cccc|', "   `-==-'"],
  // seguito dal comando cliccabile «evento»
  beerText: 'La prossima si beve al pub talk del 12 dicembre. Scrivi',
  hidden: '.birra',
}
