import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export const BrowserMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="max-w-4xl mx-auto mb-16 px-4"
    >
      <div className="bg-secondary rounded-t-lg p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="w-3 h-3 rounded-full bg-red-500"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="w-3 h-3 rounded-full bg-yellow-500"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="w-3 h-3 rounded-full bg-green-500"
          />
        </div>
        <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-4">
          {heroContent.browserText}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-black p-4 md:p-8 font-mono overflow-hidden rounded-b-lg"
      >
        {/* Mobile Version - Immagine statica */}
        <div className="md:hidden overflow-x-hidden max-w-full">
          <img 
            src="/ascii-art.png"
            alt="GL!TCH Society Terminal" 
            className="w-full h-auto"
          />
          <div className="text-green-400 mt-2 flex items-center text-[10px]">
            <span>user@gl!tch:~$</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 inline-block w-1.5 h-3 bg-green-400"
            />
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="text-primary">
            <pre className="leading-tight text-sm whitespace-pre">
{`   ██████╗ ██╗      ██║████████╗ ██████╗██╗  ██╗
  ██╔════╝ ██║      ██║╚══██╔══╝██╔════╝██║  ██║
  ██║  ███╗██║      ██║   ██║   ██║     ███████║
  ██║   ██║██║            ██║   ██║     ██╔══██║
  ╚██████╔╝███████╗ ██╗   ██║   ╚██████╗██║  ██║
   ╚═════╝ ╚══════╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝`}
            </pre>
          </div>
          <div className="text-purple-400 mt-2">
            <pre className="leading-tight text-sm whitespace-pre">
{`  ███████╗ ██████╗  ██████╗██╗███████╗████████╗██╗   ██╗
  ██╔════╝██╔═══██╗██╔════╝██║██╔════╝╚══██╔══╝╚██╗ ██╔╝
  ███████╗██║   ██║██║     ██║█████╗     ██║    ╚████╔╝ 
  ╚════██║██║   ██║██║     ██║██╔══╝     ██║     ╚██╔╝  
  ███████║╚██████╔╝╚██████╗██║███████╗   ██║      ██║   
  ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚══════╝   ╚═╝      ╚═╝`}
            </pre>
          </div>
          <div className="text-green-400 mt-4 text-center">
            <pre className="text-sm whitespace-pre">
{`══════════════════════════════════════════════════════════
         BREAK THE CODE · BUILD THE FUTURE         
══════════════════════════════════════════════════════════`}
            </pre>
          </div>
          <div className="text-green-400 mt-4 flex items-center">
            <span className="text-sm">user@gl!tch:~$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 inline-block w-2 h-4 bg-green-400"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
