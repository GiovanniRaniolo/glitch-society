import type { LucideIcon } from 'lucide-react'

type BadgeProps = {
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}

// La "pillola" arancione sopra i titoli. Unico stile per tutto il sito.
// Usata da SectionHeader e dalla Hero.
export const Badge = ({ children, icon: Icon, className = '' }: BadgeProps) => (
  <span
    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary ${className}`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {children}
  </span>
)
