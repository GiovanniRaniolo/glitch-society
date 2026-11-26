// Apre la modalità nerd da qualsiasi punto del sito (es. il cursore del titolo).
export const NERD_EVENT = 'glitch:nerd'

export const openNerdMode = () => window.dispatchEvent(new Event(NERD_EVENT))
