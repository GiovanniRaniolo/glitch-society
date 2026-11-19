// Testi della sezione "Il nostro codice etico" (Etica), dopo la Mission (T36).
// Usati da: components/sections/EthicsSection.tsx.
// Due blocchi in stile terminale: `always` (cosa facciamo sempre) e `never` (cosa non facciamo mai).
// L'ordine di `blocks` è l'ordine a schermo (primo = sinistra, o in alto su telefono).
// `tone` sceglie colore e segno (+ verde / − rosso): lo stile sta nel componente.

export type EthicsTone = "always" | "never";

export const ethicsContent = {
  badge: "ETICA",
  title: "Il nostro codice etico",
  description: "L'AI lavora con dati veri e su decisioni vere. Per questo ci diamo regole chiare, e le scriviamo qui.",
  blocks: [
    {
      tone: "always" as EthicsTone,
      label: "Sempre",
      // Testo nella barra della finestra, come un comando del terminale
      command: "cat sempre.txt",
      items: [
        {
          title: "Dire quando c'è l'AI",
          description: "Testi, voci e suggerimenti generati dall'AI sono sempre dichiarati come tali."
        },
        {
          title: "Provare prima di consegnare",
          description: "Cerchiamo gli errori prima che li trovino gli altri, e li mettiamo per iscritto."
        },
        {
          title: "Lasciare l'ultima parola a una persona",
          description: "Chi riceve un risultato prodotto con l'AI può chiedere spiegazioni e una revisione umana."
        }
      ]
    },
    {
      tone: "never" as EthicsTone,
      label: "Mai",
      command: "cat mai.txt",
      items: [
        {
          title: "Sorvegliare",
          description: "Niente sistemi che schedano le persone, danno loro punteggi o le riconoscono negli spazi pubblici."
        },
        {
          title: "Manipolare",
          description: "Niente strumenti che leggono le emozioni di studenti e lavoratori o che spingono a scelte non volute."
        },
        {
          title: "Impersonare",
          description: "Niente voci o volti di persone reali senza il loro consenso."
        }
      ]
    }
  ]
};
