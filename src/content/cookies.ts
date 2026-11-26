import type { LegalContent } from "./legalTypes";
import { siteContent } from "./site";

// Il sito non imposta cookie e non salva dati nel browser (verificato il 26/11): niente banner.
export const cookiesContent: LegalContent = {
  title: "Cookie Policy",
  lastUpdate: "Novembre 2026",
  sections: [
    {
      id: 1,
      title: "Cookie",
      content: [
        {
          type: "text",
          text: "Questo sito **non usa cookie**, né tecnici né di terze parti, e non salva dati nel tuo browser: per questo non ti chiediamo nessun consenso."
        }
      ]
    }
  ],
  cta: {
    title: "Hai domande?",
    text: "Per qualsiasi chiarimento sulla nostra Cookie Policy, contattaci a:",
    email: siteContent.contactEmail
  }
};
