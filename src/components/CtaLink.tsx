import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'telegram' | 'neonGreen' | 'neonPink'
  icon?: LucideIcon
  // true = icona dopo il testo (es. freccia)
  iconEnd?: boolean
}

// Colori per tipo di pulsante. Forma, misure e animazione sono uguali per tutti.
const variantClass = {
  primary:
    'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40',
  secondary:
    'bg-secondary hover:bg-secondary/80 text-foreground border border-primary/20 hover:border-primary/40',
  telegram:
    'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  // Solo nel box dell'evento (colori della locandina, T03/T47)
  neonGreen:
    'bg-black text-neon-green border border-neon-green/60 hover:bg-neon-green hover:text-black font-mono',
  neonPink:
    'bg-black text-neon-pink border border-neon-pink/60 hover:bg-neon-pink hover:text-black font-mono',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300'

const MotionLink = motion.create(Link)

// Scorre con morbidezza fino alla sezione con quell'id (stessa pagina).
// Chi ha chiesto meno animazioni al sistema ci arriva di colpo.
const scrollToSection = (event: React.MouseEvent, href: string) => {
  const target = document.getElementById(href.slice(1))
  if (!target) return
  event.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  history.replaceState(null, '', href)
}

// Pulsante d'azione unico del sito.
// Link esterno (http…) → nuova scheda; link interno (/…) → navigazione senza ricaricare;
// link a una sezione della stessa pagina (#id) → scorrimento morbido, stessa scheda;
// altri link (mailto:, tel:) → stessa scheda, apre il programma di posta o del telefono (T37).
// Usato da Hero, Manifesto, FeaturedCourse, Community, pagina 404.
export const CtaLink = ({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  iconEnd = false,
}: CtaLinkProps) => {
  const className = `${baseClass} ${variantClass[variant]}`
  const animation = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
  const content = (
    <>
      {Icon && !iconEnd && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconEnd && <Icon className="w-5 h-5" />}
    </>
  )

  if (href.startsWith('/')) {
    return (
      <MotionLink to={href} className={className} {...animation}>
        {content}
      </MotionLink>
    )
  }

  if (href.startsWith('#')) {
    return (
      <motion.a
        href={href}
        onClick={(event) => scrollToSection(event, href)}
        className={className}
        {...animation}
      >
        {content}
      </motion.a>
    )
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...animation}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.a href={href} className={className} {...animation}>
      {content}
    </motion.a>
  )
}
