import { motion } from "framer-motion";
import { manifestoContent } from "@/content/manifesto";
import { SectionHeader } from "@/components/SectionHeader";
import { getIcon } from "@/components/icons";
import { CtaLink } from "@/components/CtaLink";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const ManifestoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mission */}
        <SectionHeader
          badge={manifestoContent.mission.badge}
          title={manifestoContent.mission.title}
          description={manifestoContent.mission.description}
          className="mb-20"
        />

        {/* Due colonne (T33): Consulenza e Formazione, ognuna con le sue schede */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {manifestoContent.columns.map((column) => {
            const ColumnIcon = getIcon(column.icon);
            return (
              <div key={column.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {ColumnIcon && <ColumnIcon className="w-7 h-7 text-primary shrink-0" />}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {column.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed lg:min-h-[4.875rem]">
                    {column.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-4"
                >
                  {column.principles.map((principle) => {
                    const Icon = getIcon(principle.icon);
                    return (
                      <motion.div
                        key={principle.title}
                        variants={fadeInUp}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="relative group"
                      >
                        {/* Glitch effect on hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />

                        <div className="relative bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            {Icon && (
                              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                            )}
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

                {/* Pulsante della colonna, se c'è (T37: contatto per le aziende) */}
                {column.cta && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <CtaLink href={column.cta.url} icon={getIcon(column.cta.icon) ?? undefined}>
                      {column.cta.label}
                    </CtaLink>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
