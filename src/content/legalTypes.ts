// Tipi dei testi delle pagine legali (Privacy, Cookie).
// Usati da: content/privacy.ts, content/cookies.ts, components/LegalPage.tsx.
//
// Nei campi di testo si possono usare due segni (letti da components/RichText.tsx):
//   **grassetto**
//   [testo del link](indirizzo)  → "/pagina" = link interno; "https://..." = nuova scheda; "mailto:..." = email

export type LegalBlock =
  | { type: "text"; text: string; note?: boolean }
  | { type: "list"; items: string[] }
  | { type: "contact"; name: string; description?: string; email: string };

export type LegalDetailBox = {
  title: string;
  description: string;
  details: { label: string; value: string }[];
};

export type LegalSection = {
  id: number;
  title: string;
  content: LegalBlock[];
  detailBox?: LegalDetailBox;
};

export type LegalContent = {
  title: string;
  lastUpdate: string;
  sections: LegalSection[];
  cta: { title: string; text: string; email: string };
};
