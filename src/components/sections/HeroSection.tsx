import { motion } from 'framer-motion'
import { heroContent } from '@/content/hero'
import { CtaLink } from '@/components/CtaLink'
import { EssenceCard } from './EssenceCard'
import { Users, Code2 } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-16 pb-20 text-center">
      {/* Main Title: font pixel, la parola evidenziata "salta" come un glitch, cursore a blocco */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display text-[8.2vw] leading-[1.1] sm:text-5xl lg:text-7xl xl:text-8xl mb-8"
      >
        {heroContent.title.part1}{' '}
        <span className="glitch-text inline-block text-primary">{heroContent.title.highlight}</span>
        <br />
        <span className="text-muted-foreground whitespace-nowrap">
          {heroContent.title.part2}
          <span
            aria-hidden="true"
            className="terminal-cursor inline-block w-[0.5em] h-[0.85em] ml-2 -mb-[0.05em] bg-primary align-baseline"
          />
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-lg md:text-2xl text-foreground mb-5 max-w-3xl mx-auto leading-snug"
      >
        {heroContent.subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        {heroContent.description}
      </motion.p>

      {/* La nostra essenza (prima in "Chi siamo", T29) */}
      <EssenceCard className="mb-16" />

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
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
