import { motion } from "framer-motion";
import { communityContent } from "@/content/community";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaLink } from "@/components/CtaLink";
import { Send } from "lucide-react";
import { getIcon } from "@/components/icons";
import { RichText } from "@/components/RichText";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-20 scroll-mt-8">
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
          <div className="relative bg-card border border-primary/60 p-6 md:p-8">
            {/* Header: icona a fianco del titolo, per una scheda più bassa (T39) */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="inline-flex p-3 border border-[#2AABEE]/60 shrink-0">
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

            {/* Voci: caselle di larghezza fissa (13rem) e centrate, così il testo non ha troppo margine (T42) */}
            <div className="grid grid-cols-[13rem] sm:grid-cols-[repeat(2,13rem)] lg:grid-cols-[repeat(4,13rem)] justify-center gap-4 mb-6">
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
                <RichText text={communityContent.telegram.tagline} />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
