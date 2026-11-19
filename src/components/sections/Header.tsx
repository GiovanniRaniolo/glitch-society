import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border py-4"
    >
      <div className="container mx-auto px-4">
        <Link to="/">
          <Logo className="h-8 cursor-pointer hover:opacity-80 transition-opacity" />
        </Link>
      </div>
    </motion.header>
  );
};
