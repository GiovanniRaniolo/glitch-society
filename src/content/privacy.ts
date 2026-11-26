import type { LegalContent } from "./legalTypes";
import { siteContent } from "./site";

// GL!TCH Society è un collettivo senza partita IVA (26/11): il titolare è il collettivo, con la sua email.
// Il sito non raccoglie dati e non usa cookie; l'unico trattamento sono i log tecnici dell'hosting (Vercel).
const email = siteContent.contactEmail;

export const privacyContent: LegalContent = {
  title: "Privacy Policy",
  lastUpdate: "Novembre 2026",
  sections: [
    {
      id: 1,
      title: "Titolare del Trattamento",
      content: [
        {
          type: "contact",
          name: "GL!TCH Society",
          description: "Collettivo informale",
          email
        }
      ]
    },
    {
      id: 2,
      title: "Raccolta Dati",
      content: [
        {
          type: "text",
          text: "Questo sito **non raccoglie dati personali**: non ci sono form, registrazioni, analytics o strumenti di tracciamento, e non usa cookie."
        },
        {
          type: "text",
          text: "Font e immagini arrivano dal sito stesso, senza servizi esterni."
        }
      ]
    },
    {
      id: 3,
      title: "Hosting",
      content: [
        {
          type: "text",
          text: "Il sito è ospitato da **Vercel**, che registra nei suoi log tecnici l'indirizzo IP e i dati della richiesta per far funzionare e proteggere il servizio. Come li tratta: [vercel.com/legal/privacy-policy](https://vercel.com/legal/privacy-policy)"
        }
      ]
    },
    {
      id: 4,
      title: "Se ci scrivi",
      content: [
        {
          type: "text",
          text: "Se ci scrivi per email usiamo il tuo indirizzo e quello che ci racconti solo per risponderti, e non li passiamo a nessuno."
        },
        {
          type: "text",
          text: "Telegram, Instagram e Linktree, raggiungibili dai link del sito, trattano i dati secondo le loro regole."
        }
      ]
    },
    {
      id: 5,
      title: "Diritti dell'Utente (GDPR)",
      content: [
        {
          type: "text",
          text: "Ai sensi del Regolamento UE 2016/679 (GDPR), hai diritto di:"
        },
        {
          type: "list",
          items: [
            "Accedere ai tuoi dati personali",
            "Richiedere la rettifica o cancellazione",
            "Opporti al trattamento",
            "Richiedere la limitazione del trattamento",
            "Richiedere la portabilità dei dati",
            "Proporre reclamo all'Autorità Garante"
          ]
        },
        {
          type: "text",
          text: `Per esercitare i tuoi diritti, contattaci all'indirizzo: [${email}](mailto:${email})`
        }
      ]
    },
    {
      id: 6,
      title: "Modifiche alla Privacy Policy",
      content: [
        {
          type: "text",
          text: "Se cambia qualcosa aggiorniamo questa pagina e la data in alto."
        }
      ]
    }
  ],
  cta: {
    title: "Hai domande?",
    text: "Per qualsiasi chiarimento sulla nostra Privacy Policy, contattaci a:",
    email
  }
};
