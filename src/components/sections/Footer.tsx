import { motion } from "framer-motion";
import { Link2, Instagram, Send, Mail } from "lucide-react";
import { footerContent } from "@/content/footer";
import { Link } from "react-router-dom";

const iconMap = {
  linktree: Link2,
  instagram: Instagram,
  telegram: Send
};

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/glitch_logo.png" alt="Glitch Society" className="h-10 -ml-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          
          {/* Heading + Social */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 pb-12 border-b border-border">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">{footerContent.heading.title}</h3>
              <p className="text-muted-foreground">{footerContent.heading.subtitle}</p>
            </div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-4 md:mt-0"
            >
              {footerContent.social.map((social, idx) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <span>{footerContent.bottom.copyright}</span>
            
            <motion.a
              href={`mailto:${footerContent.bottom.email}`}
              className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <span>{footerContent.bottom.email}</span>
            </motion.a>

            <div className="flex items-center gap-3">
              {footerContent.legal.map((link, idx) => (
                <span key={idx} className="flex items-center gap-3">
                  <Link 
                    to={link.url}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                  {idx < footerContent.legal.length - 1 && (
                    <span className="text-border">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
