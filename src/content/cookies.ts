export const cookiesContent = {
  title: "Cookie Policy",
  lastUpdate: "Novembre 2025",
  sections: [
    {
      id: 1,
      title: "Cosa sono i Cookie",
      content: [
        {
          type: "text",
          text: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Vengono utilizzati per ricordare le tue preferenze e migliorare l'esperienza di navigazione."
        }
      ]
    },
    {
      id: 2,
      title: "Cookie Utilizzati da Questo Sito",
      content: [
        {
          type: "text",
          text: "Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento del sito."
        }
      ],
      technicalCookie: {
        title: "Cookie Tecnici",
        description: "Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati. Includono cookie di sessione che permettono la navigazione tra le pagine.",
        details: [
          { label: "Tipologia", value: "Cookie di sessione" },
          { label: "Durata", value: "Sessione browser" },
          { label: "Consenso richiesto", value: "No (tecnici)" },
          { label: "Finalità", value: "Navigazione sito" }
        ]
      }
    },
    {
      id: 3,
      title: "Cookie NON Utilizzati",
      content: [
        {
          type: "text",
          text: "Questo sito NON utilizza:"
        },
        {
          type: "list",
          items: [
            "Cookie Analytics (es. Google Analytics, Vercel Analytics)",
            "Cookie di Marketing (es. Facebook Pixel, Google Ads)",
            "Cookie di Profilazione per pubblicità personalizzata",
            "Cookie di Terze Parti per tracciamento utenti"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Gestione dei Cookie",
      content: [
        {
          type: "text",
          text: "Poiché utilizziamo solo cookie tecnici necessari, non è richiesto il tuo consenso esplicito ai sensi della normativa vigente."
        },
        {
          type: "text",
          text: "Tuttavia, puoi sempre gestire o disabilitare i cookie attraverso le impostazioni del tuo browser:"
        },
        {
          type: "list",
          items: [
            "Chrome: Impostazioni → Privacy e sicurezza → Cookie",
            "Firefox: Preferenze → Privacy e sicurezza → Cookie",
            "Safari: Preferenze → Privacy → Cookie",
            "Edge: Impostazioni → Cookie e autorizzazioni sito"
          ]
        },
        {
          type: "text",
          text: "Nota: Disabilitare i cookie tecnici potrebbe compromettere la funzionalità del sito.",
          isNote: true
        }
      ]
    },
    {
      id: 5,
      title: "Cookie di Terze Parti (Lu.ma)",
      content: [
        {
          type: "text",
          text: "Quando clicchi sul pulsante di iscrizione e vieni reindirizzato alla piattaforma Lu.ma, potrebbero essere impostati cookie da Lu.ma secondo la loro Cookie Policy."
        },
        {
          type: "link",
          text: "Per informazioni sui cookie utilizzati da Lu.ma, consulta:",
          url: "https://luma.com/privacy-policy",
          urlText: "https://luma.com/privacy-policy"
        }
      ]
    },
    {
      id: 6,
      title: "Modifiche alla Cookie Policy",
      content: [
        {
          type: "text",
          text: "Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento."
        }
      ]
    }
  ],
  cta: {
    title: "Hai domande?",
    text: "Per qualsiasi chiarimento sulla nostra Cookie Policy, contattaci a:",
    email: "glitchacademycrew@gmail.com"
  }
};
