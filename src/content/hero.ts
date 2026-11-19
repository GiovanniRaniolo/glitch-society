import { featuredCourseContent } from "./featuredCourse";

export const heroContent = {
  title: {
    part1: "Break the",
    highlight: "Code",
    part2: "Build the Future"
  },
  subtitle: "Il collettivo che rompe le barriere tra le persone e l'intelligenza artificiale",
  // Descrizione sull'impatto (T34); prima era il testo di "Chi siamo" (T29)
  description: "Aiutiamo imprese, persone e istituzioni a capire l'intelligenza artificiale e a portarla nei loro processi, produttivi e decisionali. In modo etico, aperto e su misura.",
  // Riquadro "Con chi costruiamo" (T34), ex "La nostra essenza" di "Chi siamo" (T29).
  // L'ordine di `values` è l'ordine a schermo (scelto dall'utente: Imprese, Persone, Istituzioni).
  essence: {
    title: "Con chi costruiamo",
    description: "Tre mondi diversi, un solo obiettivo: usare l'AI per lavorare e vivere meglio.",
    values: [
      {
        icon: "building",
        title: "Imprese",
        description: "Studiamo i vostri processi e inseriamo l'AI dove fa la differenza: meno lavoro ripetitivo, decisioni basate sui dati, strumenti che restano vostri."
      },
      {
        icon: "users",
        title: "Persone",
        description: "Spieghiamo l'AI in parole semplici, con corsi ed eventi aperti a tutti: per usarla con consapevolezza, non subirla."
      },
      {
        icon: "landmark",
        title: "Istituzioni",
        description: "Portiamo l'AI negli enti pubblici per accorciare i tempi delle pratiche e rendere i servizi più semplici da usare, con ogni passaggio ricostruibile."
      }
    ]
  },
  cta: {
    // Porta alla sezione del corso/evento nella stessa pagina (T20)
    primary: {
      label: "Prossimo Evento",
      url: `#${featuredCourseContent.anchor}`
    },
    secondary: {
      label: "Unisciti alla Community",
      url: "https://t.me/glitchsociety_dev"
    }
  },
  browserText: "gl!tch@society:~$ ./init_revolution.sh"
};
