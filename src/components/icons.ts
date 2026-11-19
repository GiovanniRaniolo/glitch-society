// Mappa unica delle icone scelte nei testi (src/content/*: campo `icon`).
// Chi la aggiorna: chi usa nel contenuto un nome d'icona nuovo (aggiungerlo qui).
// Usata da: FeaturedCourse, Manifesto, EssenceCard, Community, Footer (vedi MAP.md).
// Le icone fisse dei componenti (frecce, pulsanti) si importano direttamente da lucide-react.
import {
  Brain,
  Calendar,
  Clock,
  Code,
  Globe,
  Heart,
  Instagram,
  Lightbulb,
  Link2,
  MapPin,
  MessageCircle,
  Rocket,
  Send,
  Sparkles,
  Unlock,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const icons = {
  brain: Brain,
  calendar: Calendar,
  clock: Clock,
  code: Code,
  globe: Globe,
  heart: Heart,
  instagram: Instagram,
  lightbulb: Lightbulb,
  linktree: Link2,
  mapPin: MapPin,
  messageCircle: MessageCircle,
  rocket: Rocket,
  sparkles: Sparkles,
  telegram: Send,
  unlock: Unlock,
  users: Users,
  zap: Zap,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons

// Restituisce l'icona col nome dato; se il nome manca o è sbagliato
// restituisce null (niente icona, la pagina non si rompe).
export const getIcon = (name?: string): LucideIcon | null => {
  const icon = name && Object.hasOwn(icons, name) ? icons[name as IconName] : undefined
  if (!icon && import.meta.env.DEV) {
    console.warn(`[icons] icona sconosciuta: "${name}". Aggiungila in src/components/icons.ts`)
  }
  return icon ?? null
}
