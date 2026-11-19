import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { SectionHeader } from "@/components/SectionHeader";
import { Unlock, Brain, Zap, Users, Code, Rocket, Heart, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const iconMap: Record<string, React.ElementType> = {
  unlock: Unlock,
  brain: Brain,
  zap: Zap,
  users: Users,
  code: Code,
  rocket: Rocket,
  heart: Heart,
  sparkles: Sparkles
};

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <SectionHeader
          badge={aboutContent.hero.badge}
          title={aboutContent.hero.title}
          titleClassName="uppercase"
          subtitle={aboutContent.hero.subtitle}
          description={aboutContent.hero.description}
          className="mb-16"
        />

        {/* Essence Card with Values inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-2xl opacity-30 blur" />
          <div className="relative bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/30 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <SectionHeader
                as="h3"
                badge={aboutContent.essence.tagline}
                badgeIcon={Sparkles}
                title={aboutContent.essence.title}
                description={aboutContent.essence.description}
                className="mb-10"
              />

              {/* Values Cards inside */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {aboutContent.values.items.map((item, idx) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                      className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                        className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/30 mb-4"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
