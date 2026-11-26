import type { LucideIcon } from 'lucide-react'

type BadgeProps = {
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}

// L'etichetta sopra i titoli, scritta come un tag tra parentesi quadre: [ testo ].
// Unico stile per tutto il sito. Usata da SectionHeader.
export const Badge = ({ children, icon: Icon, className = '' }: BadgeProps) => (
  <span
    className={`inline-flex items-center gap-2 px-3 py-1 border border-dashed border-primary/60 font-mono text-sm font-medium text-primary ${className}`}
  >
    <span aria-hidden="true">[</span>
    {Icon && <Icon className="w-4 h-4" />}
    {children}
    <span aria-hidden="true">]</span>
  </span>
)
