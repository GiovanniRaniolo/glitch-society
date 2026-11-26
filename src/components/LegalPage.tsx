// Pagina legale unica (Privacy Policy, Cookie Policy): mostra solo i testi del contenuto.
// Usato da: pages/PrivacyPolicy.tsx, pages/CookiePolicy.tsx.
// Testi: content/privacy.ts, content/cookies.ts; tipi e formato: content/legalTypes.ts.
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { RichText } from "@/components/RichText";
import type { LegalBlock, LegalContent, LegalDetailBox } from "@/content/legalTypes";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "contact":
      return (
        <p>
          <strong>{block.name}</strong>
          <br />
          P.IVA: {block.vat}
          <br />
          Email:{" "}
          <a href={`mailto:${block.email}`} className="text-primary hover:underline">
            {block.email}
          </a>
        </p>
      );
    case "list":
      return (
        <ul className="list-disc list-inside space-y-2 ml-4">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "text":
      return (
        <p className={block.note ? "text-sm italic" : undefined}>
          <RichText text={block.text} />
        </p>
      );
  }
}

function DetailBox({ box }: { box: LegalDetailBox }) {
  return (
    <div className="bg-secondary/30 border border-primary/10 rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-3 text-primary">{box.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{box.description}</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {box.details.map((detail) => (
          <div key={detail.label}>
            <span className="font-semibold text-foreground">{detail.label}:</span>
            <p className="text-muted-foreground">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LegalPage({ content, icon: Icon }: { content: LegalContent; icon: LucideIcon }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/60 mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-muted-foreground">Ultimo aggiornamento: {content.lastUpdate}</p>
          </div>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.id} className="bg-card border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {section.id}. {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {section.content.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
                {section.detailBox && <DetailBox box={section.detailBox} />}
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">{content.cta.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {content.cta.text}{" "}
                <a
                  href={`mailto:${content.cta.email}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {content.cta.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
