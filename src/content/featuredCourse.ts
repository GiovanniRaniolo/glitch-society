// Testi della sezione "Prossimo evento" (componente: sections/FeaturedCourseSection.tsx).
// Chi lo aggiorna: chi cambia l'evento in evidenza. Il nome del file resta "featuredCourse"
// perché è citato da MAP.md e da content/hero.ts.
// Evento attuale (T03): pub talk one-shot del 12 dicembre 2026, testi dalla locandina.

import { siteContent } from './site'

// Pulsante d'azione: per ora non c'è (link RSVP in attesa, T45).
// Quando arriva: cta = { label: 'Prenota il tuo posto', url: 'https://…' }
type EventCta = { label: string; url: string } | null

const cta = null as EventCta

export const featuredCourseContent = {
  // Nome della sezione nella pagina: il pulsante "Prossimo Evento" della Hero porta qui (#next-event)
  anchor: 'next-event',
  badge: 'PROSSIMO EVENTO · ONE SHOT',

  // Righe "di sistema" in alto nel box, solo decorative (riprese dalla locandina)
  statusLines: ['PUB TALK MODE: AI', 'STATUS: ONLINE_BUT_BORED'],

  // Titolo su tre righe, nei tre colori della locandina: bianco, fucsia, verde
  title: {
    line1: 'Terminator',
    line2: 'è già qui.',
    line3: 'Ma è noioso.',
  },
  subtitle: "Talk sull'AI, agenti e il futuro (con birra).",
  description:
    "Una serata, una birra, zero slide noiose. Parliamo di intelligenza artificiale e di agenti AI: cosa sanno fare davvero, cosa no, e perché i robot non stanno per prendere il controllo.",

  // Frasi della locandina, mostrate come avvisi del terminale
  notices: [
    { label: 'SYSTEM NOTICE', text: "L'intelligenza è potente. La noia è umana." },
    { label: 'PROTOCOL', text: 'Bring beer. Bring questions. Leave the boring AI behind.' },
  ],
  tagline: 'Meet. Drink. Debug the future.',

  details: {
    date: {
      icon: 'calendar',
      label: 'Quando',
      value: 'Sabato 12 Dicembre 2026',
      subvalue: '17:00 – 19:00 circa',
    },
    location: {
      icon: 'mapPin',
      label: 'Dove',
      value: 'Prima Classe, Ragusa',
      subvalue: 'Via Ercolano, 7 • 97100 Ragusa (RG)',
    },
    format: {
      icon: 'beer',
      label: 'Formato',
      value: 'Talk + birra',
      subvalue: 'Una sola serata, con lo staff GL!TCH',
    },
    entry: {
      icon: 'ticket',
      label: 'Ingresso',
      value: 'Gratuito',
      subvalue: 'RSVP gradito',
    },
  },

  // Locandina: miniatura nel box, si ingrandisce al clic (file in public/)
  poster: {
    thumb: '/event-poster-2026-12-12-thumb.webp',
    full: '/event-poster-2026-12-12.webp',
    width: 960,
    height: 1280,
    alt: "Locandina dell'evento: Terminator è già qui. Ma è noioso. Talk sull'AI, agenti e il futuro (con birra). GL!TCH Society, Prima Classe, Ragusa, 12 dicembre 2026 ore 17:00.",
    hint: 'Clicca per ingrandire',
    closeLabel: 'Chiudi la locandina',
  },

  cta,

  // Pulsanti Instagram sotto il motto (T47). `tone` sceglie il colore: green o pink.
  socials: [
    {
      label: '@glitchsociety_dev',
      url: siteContent.instagramUrl,
      tone: 'green',
    },
    {
      label: '@primaclasseragusa',
      url: 'https://www.instagram.com/primaclasseragusa',
      tone: 'pink',
    },
  ] as const,
}
