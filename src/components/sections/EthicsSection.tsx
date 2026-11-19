import { motion } from "framer-motion";
import { ethicsContent, type EthicsTone } from "@/content/ethics";
import { SectionHeader } from "@/components/SectionHeader";

// Sezione "Il nostro codice etico" (T36), dopo la Mission.
// Due finestre in stile terminale: "Sempre" (righe verdi con +) e "Mai" (righe rosse con −).
// Testi in content/ethics.ts (ethicsContent).

// Colore e segno di ogni blocco, scelti dal campo `tone` del contenuto
const toneStyle: Record<EthicsTone, { sign: string; text: string; border: string }> = {
  always: { sign: "+", text: "text-green-400", border: "border-green-400/30" },
  never: { sign: "−", text: "text-red-400", border: "border-red-400/30" }
};

export const EthicsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          badge={ethicsContent.badge}
          title={ethicsContent.title}
          description={ethicsContent.description}
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {ethicsContent.blocks.map((block, idx) => {
            const style = toneStyle[block.tone];
            return (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`flex flex-col rounded-lg overflow-hidden border ${style.border}`}
              >
                {/* Barra della finestra */}
                <div className="bg-secondary p-3 flex items-center gap-2">
                  <div className="flex gap-1.5 shrink-0" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-2 font-mono truncate">
                    gl!tch@society:~$ {block.command}
                  </div>
                </div>

                {/* Contenuto */}
                <div className="bg-black p-6 md:p-8 flex-1">
                  <h3 className={`font-mono text-2xl font-bold mb-6 ${style.text}`}>
                    {block.label}
                  </h3>
                  <ul className="space-y-6">
                    {block.items.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span aria-hidden="true" className={`font-mono text-lg font-bold leading-snug ${style.text}`}>
                          {style.sign}
                        </span>
                        <div>
                          <p className={`font-mono font-bold leading-snug mb-1 ${style.text}`}>
                            {item.title}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
