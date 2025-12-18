import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-primary/30 max-w-4xl mx-auto"
    />
  );
};
