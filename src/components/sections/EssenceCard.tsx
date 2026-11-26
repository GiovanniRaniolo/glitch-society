import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { SectionHeader } from "@/components/SectionHeader";
import { getIcon } from "@/components/icons";

// Riquadro "Con chi costruiamo" (ex "La nostra essenza") con le schede Istituzioni, Imprese, Persone (T34).
// Prima stava nella sezione "Chi siamo"; ora è dentro la Hero (T29).
// Testi in content/hero.ts (heroContent.essence).

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const EssenceCard = ({ className = "" }: { className?: string }) => {
  const { essence } = heroContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative max-w-5xl mx-auto ${className}`}
    >
      <div className="relative bg-card border border-primary/60 p-8 md:p-12 overflow-hidden">

        <div className="relative z-10">
          <SectionHeader
            title={essence.title}
            description={essence.description}
            className="mb-10"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {essence.values.map((item, idx) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-black border border-dashed border-border p-6 text-left hover:border-primary transition-colors duration-150"
                >
                  {Icon && (
                    <div className="inline-flex p-2.5 border border-primary/50 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl mb-2">{item.title}</h3>
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
  );
};
