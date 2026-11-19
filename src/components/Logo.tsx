// Logo del sito: webp leggero (7,7 KB) con png di riserva per i browser vecchi.
// Usato da: sections/Header.tsx, sections/Footer.tsx (vedi MAP.md).
// width/height = proporzioni reali dell'immagine: lo spazio è riservato prima del caricamento.
// L'altezza a schermo la decide `className` (es. h-8); la larghezza segue (w-auto).
type LogoProps = {
  className?: string
}

export const Logo = ({ className = '' }: LogoProps) => (
  <picture>
    <source srcSet="/glitch_logo-425.webp" type="image/webp" />
    <img
      src="/glitch_logo.png"
      alt="GL!TCH Society"
      width={850}
      height={227}
      className={`w-auto ${className}`}
    />
  </picture>
)
