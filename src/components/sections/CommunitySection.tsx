import { motion } from "framer-motion";
import { communityContent } from "@/content/community";
import { Send, MessageCircle, Lightbulb, Users, Calendar } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  messageCircle: MessageCircle,
  lightbulb: Lightbulb,
  users: Users,
  calendar: Calendar
};

export const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {communityContent.hero.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {communityContent.hero.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {communityContent.hero.description}
          </p>
        </motion.div>

        {/* Telegram Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-primary to-blue-500 rounded-2xl opacity-40 group-hover:opacity-60 blur transition duration-500" />
          
          <div className="relative bg-card border border-primary/20 rounded-2xl p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                <Send className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {communityContent.telegram.title}
              </h3>
              <p className="text-sm text-primary font-medium">
                {communityContent.telegram.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              {communityContent.telegram.description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {communityContent.telegram.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.a
                href={communityContent.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <Send className="w-5 h-5" />
                {communityContent.telegram.cta}
              </motion.a>
              <p className="mt-4 text-sm text-muted-foreground italic">
                {communityContent.telegram.tagline}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
