import { siteContent } from "./site";

export const footerContent = {
  heading: {
    title: 'Costruiamo il Futuro, Insieme',
    subtitle:
      "Consulenza e formazione sull'AI per imprese, persone e istituzioni. Dove le idee diventano strumenti.",
  },
  social: [
    {
      icon: 'linktree',
      label: 'Linktree',
      url: 'https://linktr.ee/glitchsociety_dev',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      url: siteContent.instagramUrl,
    },
    {
      icon: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/glitchsociety_dev',
    },
  ],
  legal: [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Cookie Policy', url: '/cookie-policy' },
  ],
  bottom: {
    copyright: `© ${new Date().getFullYear()} GL!TCH Society. Tutti i diritti riservati.`,
    email: siteContent.contactEmail, // stesso indirizzo del pulsante "Raccontaci il tuo progetto" (T44)
  },
}
