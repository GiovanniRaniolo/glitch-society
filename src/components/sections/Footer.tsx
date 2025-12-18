import { motion } from "framer-motion";
import { Link2, Instagram, Send, Mail, MapPin } from "lucide-react";
import { footerContent } from "@/content/footer";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
            <img src="/glitch_logo.png" alt="Glitch Academy" className="h-10 -ml-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          
          {/* Heading + Social in same row on desktop */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
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

          {/* Footer Links Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-sm mb-12 pb-12 border-b border-border max-w-5xl mx-auto"
          >
            {footerContent.navigation.map((section, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                <ul className="space-y-2.5 text-muted-foreground">
                  {section.links.map((link, linkIdx) => {
                    const linkData = link as { label: string; url: string; sublabel?: string; icon?: string };
                    return (
                      <motion.li 
                        key={linkIdx}
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        {linkData.url.startsWith('/') ? (
                          <Link 
                            to={linkData.url}
                            className="hover:text-primary transition-colors inline-flex items-start gap-1.5"
                          >
                            {linkData.icon === 'mapPin' && <MapPin className="w-3.5 h-3.5 mt-0.5" />}
                            <div className="flex flex-col gap-1">
                              <span>{linkData.label}</span>
                              {linkData.sublabel && <span className="text-xs">{linkData.sublabel}</span>}
                            </div>
                          </Link>
                        ) : (
                          <a 
                            href={linkData.url} 
                            target={linkData.url.startsWith('http') ? "_blank" : undefined}
                            rel={linkData.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="hover:text-primary transition-colors inline-flex items-start gap-1.5"
                          >
                            {linkData.icon === 'mapPin' && <MapPin className="w-3.5 h-3.5 mt-0.5" />}
                            {linkData.sublabel ? (
                              <div className="flex flex-col gap-2">
                                <span>{linkData.label}</span>
                                <span>{linkData.sublabel}</span>
                              </div>
                            ) : (
                              <>
                                {linkData.label}
                              </>
                            )}
                          </a>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span>{footerContent.bottom.copyright}</span>
            </div>
            <div className="flex items-center gap-6">
              <motion.a
                href={`mailto:${footerContent.bottom.email}`}
                className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4" />
                <span>{footerContent.bottom.email}</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
