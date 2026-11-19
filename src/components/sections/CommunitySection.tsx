import { motion } from "framer-motion";
import { communityContent } from "@/content/community";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaLink } from "@/components/CtaLink";
import { Send } from "lucide-react";
import { getIcon } from "@/components/icons";

export const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          badge={communityContent.hero.badge}
          title={communityContent.hero.title}
          description={communityContent.hero.description}
          className="mb-12"
        />

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
          
          <div className="relative bg-card border border-primary/20 rounded-2xl p-6 md:p-8">
            {/* Header: icona a fianco del titolo, per una scheda più bassa (T39) */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="inline-flex p-3 rounded-full bg-blue-500/20 border border-blue-500/30 shrink-0">
                <Send className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {communityContent.telegram.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {communityContent.telegram.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              {communityContent.telegram.description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {communityContent.telegram.features.map((feature, idx) => {
                const Icon = getIcon(feature.icon);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center justify-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                  >
                    {Icon && <Icon className="w-5 h-5 text-primary flex-shrink-0" />}
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <CtaLink href={communityContent.telegram.url} icon={Send} variant="telegram">
                {communityContent.telegram.cta}
              </CtaLink>
              <p className="mt-3 text-sm text-muted-foreground italic">
                {communityContent.telegram.tagline}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
