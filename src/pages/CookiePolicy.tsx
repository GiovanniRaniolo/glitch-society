import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { cookiesContent } from "@/content/cookies";

const CookiePolicy = () => {
  const renderContentItem = (item: Record<string, unknown>, idx: number, totalItems: number) => {
    const text = item.text as string | undefined;
    const url = item.url as string | undefined;
    const urlText = item.urlText as string | undefined;
    const items = item.items as string[] | undefined;
    const isNote = item.isNote as boolean | undefined;

    return (
      <div key={idx} className={`text-muted-foreground leading-relaxed ${idx < totalItems - 1 ? 'mb-4' : ''}`}>
        {item.type === 'text' && text && (
          <>
            {text.includes('esclusivamente cookie tecnici') ? (
              <p className="mb-6">
                Questo sito utilizza <strong>esclusivamente cookie tecnici</strong> necessari al corretto funzionamento del sito.
              </p>
            ) : text.includes('NON utilizza') ? (
              <p className="mb-4">
                Questo sito <strong>NON utilizza</strong>:
              </p>
            ) : text.includes('Lu.ma') ? (
              <p className="mb-4">
                Quando clicchi sul pulsante di iscrizione e vieni reindirizzato alla piattaforma <strong>Lu.ma</strong>, 
                potrebbero essere impostati cookie da Lu.ma secondo la loro Cookie Policy.
              </p>
            ) : isNote ? (
              <p className="mt-4 text-sm italic">
                Nota: {text}
              </p>
            ) : (
              <p className={text.includes('browser:') ? 'mb-4' : ''}>{text}</p>
            )}
          </>
        )}
        {item.type === 'link' && text && url && urlText && (
          <p>
            {text}{' '}
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {urlText}
            </a>
          </p>
        )}
        {item.type === 'list' && items && (
          <ul className="list-disc list-inside space-y-2 ml-4">
            {items.map((listItem: string, listIdx: number) => (
              <li key={listIdx}><strong>{listItem.split(':')[0]}</strong>{listItem.includes(':') ? ':' + listItem.split(':')[1] : ''}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-6">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cookiesContent.title}</h1>
            <p className="text-muted-foreground">Ultimo aggiornamento: {cookiesContent.lastUpdate}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {cookiesContent.sections.map((section) => (
              <div key={section.id} className="bg-card border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">{section.id}. {section.title}</h2>
                
                {section.content.map((item, idx) => 
                  renderContentItem(item as Record<string, unknown>, idx, section.content.length)
                )}
                
                {section.technicalCookie && (
                  <div className="bg-secondary/30 border border-primary/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-primary">{section.technicalCookie.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {section.technicalCookie.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {section.technicalCookie.details.map((detail, detailIdx) => (
                        <div key={detailIdx}>
                          <span className="font-semibold text-foreground">{detail.label}:</span>
                          <p className="text-muted-foreground">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">{cookiesContent.cta.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {cookiesContent.cta.text}{' '}
                <a href={`mailto:${cookiesContent.cta.email}`} className="text-primary hover:underline font-semibold">
                  {cookiesContent.cta.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
