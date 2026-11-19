import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { featuredCourseContent } from '@/content/featuredCourse'
import { SectionHeader } from '@/components/SectionHeader'
import { CtaLink } from '@/components/CtaLink'
import { getIcon } from '@/components/icons'

export const FeaturedCourseSection = () => {
  const {
    anchor,
    badge,
    title,
    subtitle,
    description,
    details,
    highlights,
    technologies,
    cta,
    urgency,
  } = featuredCourseContent

  return (
    <section id={anchor} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            badge={badge}
            badgeIcon={Sparkles}
            title={title}
            subtitle={subtitle}
            description={description}
            className="mb-12"
          />

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Urgency Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                {urgency.badge}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {Object.values(details).map((detail, idx) => {
                const IconComponent = getIcon(detail.icon)
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="bg-secondary/50 rounded-2xl p-5 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {IconComponent && (
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <span className="text-sm text-muted-foreground">
                        {detail.label}
                      </span>
                    </div>
                    <p className="font-bold text-lg mb-1">{detail.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {detail.subvalue}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {highlights.map((highlight, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                >
                  ✓ {highlight}
                </motion.span>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-secondary text-muted-foreground px-3 py-1.5 rounded-lg text-xs font-mono border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <CtaLink href={cta.url} icon={ArrowRight} iconEnd>
                {cta.primary}
              </CtaLink>
              <p className="text-muted-foreground text-sm mt-4">
                {urgency.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
