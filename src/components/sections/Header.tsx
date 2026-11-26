import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CtaLink } from "@/components/CtaLink";
import { headerContent } from "@/content/header";

export const Header = () => {
  const { contact, community } = headerContent;
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border py-4"
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-3">
        <Link to="/" className="shrink-0">
          <Logo className="h-8 cursor-pointer hover:opacity-80 transition-opacity" />
        </Link>
        <nav aria-label="Contatti" className="flex items-center gap-3 sm:gap-4">
          <CtaLink href={contact.url} icon={Mail} variant="secondary" size="sm">
            <span className="hidden md:inline">{contact.label}</span>
            <span className="md:hidden">{contact.short}</span>
          </CtaLink>
          <CtaLink href={community.url} icon={Send} variant="primary" size="sm">
            <span className="hidden md:inline">{community.label}</span>
            <span className="md:hidden">{community.short}</span>
          </CtaLink>
        </nav>
      </div>
    </motion.header>
  );
};
