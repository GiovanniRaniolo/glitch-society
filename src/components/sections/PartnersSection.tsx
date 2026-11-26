import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { partnersContent } from "@/content/partners";
import { SectionHeader } from "@/components/SectionHeader";

// Sezione "Partner" (dopo Community): un pannello per partner, tutto cliccabile, con logo,
// città, descrizione e dominio. Testi e loghi in content/partners.ts.
export const PartnersSection = () => {
  return (
    <section id={partnersContent.anchor} className="py-20 scroll-mt-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          badge={partnersContent.badge}
          title={partnersContent.title}
          description={partnersContent.description}
          titleClassName="[text-wrap:balance]"
          className="mb-12"
        />

        <ul className="grid md:grid-cols-2 gap-6">
          {partnersContent.partners.map((p, idx) => (
            <motion.li
              key={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partnersContent.linkLabel(p.name)}
                className="group flex flex-col w-full bg-card border border-border p-6 md:p-8 transition-[border-color,box-shadow,transform] duration-150 hover:border-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_hsl(var(--primary))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="h-12 flex items-center mb-6">
                  <img
                    src={p.logo}
                    alt={p.name}
                    style={{ height: p.logoHeight }}
                    className="w-auto max-w-full"
                    loading="lazy"
                  />
                </div>
                <p className="flex items-center gap-1.5 text-sm text-foreground mb-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  {p.place}
                </p>
                <p className="text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-primary">
                  {new URL(p.url).hostname}
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
