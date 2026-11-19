import { motion } from 'framer-motion'
import { heroContent } from '@/content/hero'
import { Badge } from '@/components/Badge'
import { CtaLink } from '@/components/CtaLink'
import { Zap, Users, Code2 } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Badge icon={Zap} className="uppercase">
          {heroContent.badge}
        </Badge>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
      >
        {heroContent.title.part1}{' '}
        <span className="text-primary relative">
          {heroContent.title.highlight}
          <motion.span
            className="absolute -inset-1 bg-primary/20 blur-xl rounded-full"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </span>
        <br />
        <span className="text-muted-foreground">{heroContent.title.part2}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
      >
        {heroContent.subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        {heroContent.description}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-8 mb-12"
      >
        {heroContent.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-black text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <CtaLink href={heroContent.cta.primary.url} icon={Code2}>
          {heroContent.cta.primary.label}
        </CtaLink>
        <CtaLink href={heroContent.cta.secondary.url} icon={Users} variant="secondary">
          {heroContent.cta.secondary.label}
        </CtaLink>
      </motion.div>
    </section>
  )
}
