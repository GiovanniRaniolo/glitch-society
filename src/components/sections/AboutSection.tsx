import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { Unlock, Brain, Zap, Users } from "lucide-react";

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
  users: Users
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
          <p className="text-xl text-primary font-medium mb-4">
            {aboutContent.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {aboutContent.hero.description}
          </p>
        </motion.div>

        {/* Essence Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-2xl opacity-30 blur" />
          <div className="relative bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {aboutContent.essence.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {aboutContent.essence.description}
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold">
            {aboutContent.values.title}
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {aboutContent.values.items.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
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
    </section>
  );
};
