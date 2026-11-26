// Sezione "Partner" della home, dopo Community. Usata anche dal comando `partner` della modalità nerd.
// I loghi sono in public/partners/, ricolorati in #EBEBEB per stare sul fondo nero.
export type Partner = {
  name: string
  place: string
  description: string
  url: string
  logo: string
  // altezza del logo in px: i due marchi hanno proporzioni diverse
  logoHeight: number
}

export const partnersContent = {
  anchor: 'partner',
  badge: 'PARTNER',
  title: 'Chi costruisce con noi',
  description: 'Community e laboratori che, come noi, insegnano a usare l’AI facendo.',
  linkLabel: (name: string) => `Visita il sito di ${name} (si apre in una nuova scheda)`,
  partners: [
    {
      name: 'AI Family',
      place: 'Catania',
      description:
        'La community siciliana di chi lavora, studia e costruisce con l’intelligenza artificiale: meetup, corsi e percorsi uno a uno.',
      url: 'https://aifamily.space/',
      logo: '/partners/aifamily.svg',
      logoHeight: 36,
    },
    {
      name: 'NoCodeLab.ai',
      place: 'Manchester',
      description:
        'Formazione pratica su vibe coding e agenti AI per team e acceleratori, perché le competenze restino in azienda.',
      url: 'https://nocodelab.ai/',
      logo: '/partners/nocodelab.png',
      logoHeight: 34,
    },
  ] satisfies Partner[],
}
