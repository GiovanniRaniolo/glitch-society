import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Sparkles } from 'lucide-react'
import { featuredCourseContent } from '@/content/featuredCourse'
import { SectionHeader } from '@/components/SectionHeader'
import { CtaLink } from '@/components/CtaLink'
import { ImageLightbox } from '@/components/ImageLightbox'
import { getIcon } from '@/components/icons'

// Sezione "Prossimo evento" (#next-event). Testi in content/featuredCourse.ts.
// Stile del box ripreso dalla locandina (T03): terminale nero, fucsia e verde (colori `neon`).
export const FeaturedCourseSection = () => {
  const {
    anchor,
    badge,
    statusLines,
    title,
    subtitle,
    description,
    notices,
    tagline,
    details,
    poster,
    cta,
    socials,
  } = featuredCourseContent

  return (
    <section id={anchor} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-background to-neon-green/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader badge={badge} badgeIcon={Sparkles} className="mb-10" />

          {/* Box dell'evento, in stile terminale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-neon-green/30 rounded-3xl relative overflow-hidden shadow-[0_0_60px_hsl(var(--neon-pink)/0.12)]"
          >
            {/* Barra della finestra */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-neon-green/20 bg-white/[0.03]">
              <span className="w-3 h-3 rounded-full bg-neon-pink/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-neon-green/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground truncate">
                gl!tch@society:~$ ./pub_talk.sh
              </span>
            </div>

            {/* Righe da vecchio monitor, sopra tutto ma non cliccabili */}
            <div aria-hidden="true" className="scanlines absolute inset-0 pointer-events-none" />

            <div className="relative p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start mb-10">
                {/* Testi */}
                <div>
                  <div aria-hidden="true" className="font-mono text-xs md:text-sm text-neon-green mb-6 space-y-1">
                    {statusLines.map((line) => (
                      <p key={line}>{'> '}{line}</p>
                    ))}
                  </div>

                  <h2 className="glitch-text font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl mb-6">
                    <span className="block text-foreground">{title.line1}</span>
                    <span className="block text-neon-pink">{title.line2}</span>
                    <span className="block text-neon-green">{title.line3}</span>
                  </h2>

                  <p className="inline-block font-mono text-base md:text-lg text-neon-green border border-dashed border-neon-green/60 px-4 py-3 mb-6">
                    {subtitle}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    {description}
                  </p>

                  <div className="font-mono text-sm space-y-3">
                    {notices.map((notice) => (
                      <p key={notice.label}>
                        <span className="text-neon-green">{'> '}{notice.label}:</span>{' '}
                        <span className="text-neon-pink">{notice.text}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Locandina: sopra su telefono, a destra su computer */}
                <ImageLightbox
                  {...poster}
                  className="order-first lg:order-none w-44 sm:w-48 lg:w-56 mx-auto lg:rotate-2 lg:hover:rotate-0 transition-transform"
                />
              </div>

              {/* Schede: quando, dove, formato, ingresso */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                {Object.values(details).map((detail, idx) => {
                  const IconComponent = getIcon(detail.icon)
                  return (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="bg-white/[0.03] rounded-2xl p-5 border border-neon-green/20 hover:border-neon-pink/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-neon-pink" />
                          </div>
                        )}
                        <span className="font-mono text-xs uppercase tracking-wider text-neon-green">
                          {'// '}
                          {detail.label}
                        </span>
                      </div>
                      <p className="font-bold text-lg mb-1">{detail.value}</p>
                      <p className="text-sm text-muted-foreground">{detail.subvalue}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Motto, pulsante RSVP (compare solo se c'è il link) e Instagram */}
              <div className="text-center">
                <p className="font-mono text-sm md:text-base uppercase tracking-wider text-neon-green">
                  {'> '}
                  {tagline}
                  <span aria-hidden="true" className="terminal-cursor ml-1">_</span>
                </p>
                {cta && (
                  <div className="mt-8">
                    <CtaLink href={cta.url} icon={ArrowRight} iconEnd>
                      {cta.label}
                    </CtaLink>
                  </div>
                )}
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                  {socials.map((social) => (
                    <CtaLink
                      key={social.url}
                      href={social.url}
                      icon={Instagram}
                      variant={social.tone === 'pink' ? 'neonPink' : 'neonGreen'}
                    >
                      {social.label}
                    </CtaLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
