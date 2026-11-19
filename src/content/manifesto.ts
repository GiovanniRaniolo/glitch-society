// Testi della sezione "La nostra mission" (Manifesto).
// Usati da: components/sections/ManifestoSection.tsx. Icone: nomi in components/icons.ts.
// Due colonne (T33): Consulenza e Formazione.
// L'ordine di `columns` è l'ordine a schermo (prima colonna = sinistra, o in alto su telefono).
// `cta`: pulsante sotto le due colonne, al centro della sezione (T37, spostato in T38).

export const manifestoContent = {
  mission: {
    badge: "LA NOSTRA MISSION",
    title: "Persone al centro, AI al fianco.",
    description: "Usiamo l'AI per dare alle persone più strumenti, non per toglierle di mezzo: dati più chiari, scelte più consapevoli, decisioni che restano umane."
  },
  columns: [
    {
      icon: "briefcase",
      title: "Consulenza AI per le Aziende",
      description: "Analizziamo i processi della tua azienda, produttivi e di gestione, e sviluppiamo soluzioni di intelligenza artificiale su misura: dall'idea al sistema funzionante.",
      principles: [
        {
          icon: "search",
          title: "Analisi dei Processi",
          description: "Studiamo come lavora la tua azienda e troviamo dove l'AI fa risparmiare tempo e costi."
        },
        {
          icon: "puzzle",
          title: "Soluzioni su Misura",
          description: "Progettiamo e sviluppiamo strumenti AI pensati per i tuoi processi, non soluzioni generiche."
        },
        {
          icon: "workflow",
          title: "Integrazione Graduale",
          description: "Inseriamo l'AI nei sistemi che già usi, un passo alla volta, senza fermare il lavoro."
        },
        {
          icon: "users",
          title: "Team Autonomo",
          description: "Accompagniamo le persone nell'uso dei nuovi strumenti, così l'AI resta in azienda anche dopo di noi."
        }
      ]
    },
    {
      icon: "graduationCap",
      title: "Formazione Tech Senza Barriere",
      description: "GL!TCH Society forma developer autonomi attraverso corsi strutturati e eventi spot. Coding, AI, creative development e blockchain: competenze tech accessibili a tutti, connesse da socialità autentica.",
      principles: [
        {
          icon: "unlock",
          title: "Accesso Universale",
          description: "Zero prerequisiti per un apprendimento accelerato che porta a risultati concreti e connessioni reali."
        },
        {
          icon: "brain",
          title: "AI Co-Pilota",
          description: "L'AI amplifica la creatività umana senza sostituirla. Genera codice live e progetti concreti."
        },
        {
          icon: "zap",
          title: "Eventi Spot",
          description: "Incontri ad alto impatto che uniscono apprendimento e socialità."
        },
        {
          icon: "globe",
          title: "Ecosistema Aperto",
          description: "Crea legami con una community vivace. Hub innovativi diventano epicentri di sperimentazione."
        }
      ]
    }
  ],
  // Pulsante sotto le due colonne (T37, al centro da T38).
  // Email provvisoria: quando ci sarà un indirizzo dedicato si cambia solo qui.
  cta: {
    label: "Raccontaci il tuo progetto",
    url: "mailto:glitchacademycrew@gmail.com",
    icon: "mail"
  }
};
