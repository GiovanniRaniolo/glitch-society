import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
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
  heart: Heart
};

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {aboutContent.hero.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {aboutContent.hero.title}
          </h2>
          {aboutContent.hero.subtitle && (
            <p className="text-xl text-primary font-medium mb-4">
              {aboutContent.hero.subtitle}
            </p>
          )}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {aboutContent.hero.description}
          </p>
        </motion.div>

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
              {/* Badge */}
              {aboutContent.essence.tagline && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{aboutContent.essence.tagline}</span>
                  </span>
                </motion.div>
              )}

              {/* Title */}
              {aboutContent.essence.title && (
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  {aboutContent.essence.title}
                </h3>
              )}
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center mb-10">
                {aboutContent.essence.description}
              </p>

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
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
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
