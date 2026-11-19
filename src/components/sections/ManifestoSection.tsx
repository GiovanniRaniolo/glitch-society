import { motion } from "framer-motion";
import { manifestoContent } from "@/content/manifesto";
import { SectionHeader } from "@/components/SectionHeader";
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
        <SectionHeader
          badge={manifestoContent.mission.badge}
          title={manifestoContent.mission.title}
          description={manifestoContent.mission.description}
          className="mb-20"
        />

        {/* Manifesto Principles (intestazione nascosta se badge e titolo sono vuoti) */}
        <SectionHeader
          as="h3"
          badge={manifestoContent.manifesto.badge}
          title={manifestoContent.manifesto.title}
          className="mb-12"
        />

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
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {principle.title}
                      </h3>
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
