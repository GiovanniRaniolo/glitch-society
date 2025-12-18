import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { Zap, Users, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8"
      >
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-primary">{heroContent.badge}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
      >
        {heroContent.title.part1}{" "}
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
            <div className="text-4xl md:text-5xl font-black text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
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
        <motion.a
          href="#events"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
        >
          <Code2 className="w-5 h-5" />
          {heroContent.cta.primary}
        </motion.a>
        <motion.a
          href="https://t.me/glitchacademy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground font-semibold px-8 py-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <Users className="w-5 h-5" />
          {heroContent.cta.secondary}
        </motion.a>
      </motion.div>
    </section>
  );
};
