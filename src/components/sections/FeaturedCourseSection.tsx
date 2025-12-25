import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { featuredCourseContent } from '@/content/featuredCourse'

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  mapPin: MapPin,
  users: Users,
}

export const FeaturedCourseSection = () => {
  const {
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
    <section className="py-24 relative overflow-hidden">
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
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{badge}</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              {subtitle}
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

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
                const IconComponent =
                  iconMap[detail.icon as keyof typeof iconMap]
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
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
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
              <motion.a
                href={cta.url}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                {cta.primary}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
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
