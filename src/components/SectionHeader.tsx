import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/Badge'

type SectionHeaderProps = {
  badge?: string
  badgeIcon?: LucideIcon
  title?: string
  subtitle?: string
  description?: string
  // h2 per il titolo della sezione, h3 per un titolo dentro la sezione
  as?: 'h2' | 'h3'
  titleClassName?: string
  className?: string
}

const titleSize = {
  h2: 'text-3xl md:text-5xl',
  h3: 'text-2xl md:text-4xl',
}

// Intestazione comune delle sezioni: pillola + titolo + sottotitolo + testo.
// Ogni parte compare solo se il testo non è vuoto.
// Usata da FeaturedCourse, Manifesto, Ethics, Community, EssenceCard (Hero).
export const SectionHeader = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  description,
  as: Title = 'h2',
  titleClassName = '',
  className = '',
}: SectionHeaderProps) => {
  if (!badge && !title && !subtitle && !description) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center ${className}`}
    >
      {badge && (
        <Badge icon={badgeIcon} className="mb-4">
          {badge}
        </Badge>
      )}
      {title && (
        <Title className={`${titleSize[Title]} font-bold mb-4 ${titleClassName}`}>
          {title}
        </Title>
      )}
      {subtitle && (
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
