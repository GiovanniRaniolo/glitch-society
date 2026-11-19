import { manifestoContent } from "./manifesto";

export const communityContent = {
  hero: {
    badge: 'COMMUNITY',
    title: 'Unisciti a GL!TCH',
    description:
      'Eventi, talk, corsi. Connessioni autentiche che nascono dal codice.',
  },
  telegram: {
    title: 'Entra nel Canale',
    subtitle: 'Il nostro hub digitale',
    description:
      'Discussioni tech, supporto reciproco, novità sugli eventi. È lo spazio della community: qui si propongono talk e si creano legami che durano.',
    features: [
      { icon: 'messageCircle', text: 'Discussioni tech live' },
      { icon: 'lightbulb', text: 'Proponi il tuo talk' },
      { icon: 'users', text: 'Networking autentico' },
      { icon: 'calendar', text: 'Eventi in anteprima' },
    ],
    cta: 'Unisciti su Telegram',
    url: 'https://t.me/glitchsociety_dev',
    // Frase sotto il pulsante (T40). Il link usa lo stesso indirizzo del pulsante "Raccontaci il tuo progetto" (T43).
    tagline: `Il canale è aperto a tutti. Per un progetto della tua azienda, [scrivici direttamente](${manifestoContent.cta.url}).`,
  },
}
