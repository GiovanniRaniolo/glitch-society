import { motion } from "framer-motion";
import { manifestoContent } from "@/content/manifesto";
import { Unlock, Brain, Zap, Globe } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const iconMap: Record<number, React.ElementType> = {
  0: Unlock,
  1: Brain,
  2: Zap,
  3: Globe
};

export const ManifestoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {manifestoContent.mission.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {manifestoContent.mission.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {manifestoContent.mission.description}
          </p>
        </motion.div>

        {/* Manifesto Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {manifestoContent.manifesto.badge}
          </span>
          <h3 className="text-2xl md:text-4xl font-bold">
            {manifestoContent.manifesto.title}
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {manifestoContent.manifesto.principles.map((principle, idx) => {
            const Icon = iconMap[idx];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glitch effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                
                <div className="relative bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {principle.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
