import { useRef, useState } from 'react'
import { Maximize2, X } from 'lucide-react'

type ImageLightboxProps = {
  // Miniatura mostrata nella pagina e immagine grande mostrata al clic
  thumb: string
  full: string
  width: number
  height: number
  alt: string
  // Scritta sotto la miniatura (es. "Clicca per ingrandire") e testo del pulsante di chiusura
  hint: string
  closeLabel: string
  className?: string
}

// Immagine piccola che al clic si apre grande sopra la pagina.
// Si chiude con la X, con il tasto Esc o cliccando fuori dall'immagine.
// Usa <dialog> del browser: Esc, focus e sfondo scuro sono già gestiti.
// Usato da: sections/FeaturedCourseSection.tsx (locandina dell'evento).
export const ImageLightbox = ({
  thumb,
  full,
  width,
  height,
  alt,
  hint,
  closeLabel,
  className = '',
}: ImageLightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  // L'immagine grande si scarica solo al primo clic, non con la pagina
  const [wasOpened, setWasOpened] = useState(false)

  const open = () => {
    setWasOpened(true)
    dialogRef.current?.showModal()
    document.body.style.overflow = 'hidden'
  }
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className={`group block text-left focus-visible:outline-none ${className}`}
      >
        <span className="relative block overflow-hidden rounded-lg border border-neon-green/40 shadow-[0_0_24px_hsl(var(--neon-pink)/0.25)] transition-all duration-300 group-hover:border-neon-pink group-hover:shadow-[0_0_32px_hsl(var(--neon-pink)/0.45)] group-focus-visible:ring-2 group-focus-visible:ring-neon-green">
          <img
            src={thumb}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 rounded-md bg-black/70 text-neon-green">
            <Maximize2 className="w-4 h-4" aria-hidden="true" />
          </span>
        </span>
        <span className="mt-2 block text-center font-mono text-xs text-neon-green/80">
          {'> '}
          {hint}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={() => {
          document.body.style.overflow = ''
        }}
        // Clic sullo sfondo (fuori dall'immagine) = chiudi
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        className="m-auto max-w-none max-h-none bg-transparent p-4 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          {wasOpened && (
            <img
              src={full}
              alt={alt}
              width={width}
              height={height}
              decoding="async"
              className="block w-auto h-auto max-h-[85vh] max-w-[calc(100vw-2rem)] rounded-lg border border-neon-green/40"
            />
          )}
          <button
            type="button"
            onClick={close}
            aria-label={closeLabel}
            className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </>
  )
}
