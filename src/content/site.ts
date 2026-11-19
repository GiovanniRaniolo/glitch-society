// Dati generali del sito usati dal codice (titolo delle schede, indirizzo ufficiale).
// Usato da: components/PageMeta.tsx; `contactEmail` da content/manifesto.ts e content/footer.ts. Gli stessi valori sono scritti anche in index.html
// (metadati letti prima che parta il sito): se cambiano, aggiornare entrambi.
export const siteContent = {
  name: "GL!TCH Society",
  url: "https://glitchsociety.dev",
  homeTitle: "GL!TCH Society | Community di Sviluppatori e Creativi Tech",
  // Email di contatto (provvisoria): pulsante "Raccontaci il tuo progetto", link "scrivici direttamente", footer.
  // Quando ci sarà un indirizzo dedicato si cambia solo qui (T44). Le pagine legali hanno il loro indirizzo del titolare.
  contactEmail: "glitchacademycrew@gmail.com",
};
