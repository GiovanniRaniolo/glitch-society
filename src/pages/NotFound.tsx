// Pagina 404: mostrata per ogni rotta inesistente (rotta "*" in App.tsx).
// Testi: content/notFound.ts.
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { notFoundContent } from "@/content/notFound";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-20 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-7xl md:text-8xl font-black text-primary mb-4">{notFoundContent.code}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{notFoundContent.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{notFoundContent.description}</p>

          <div className="bg-card border border-primary/20 rounded-lg px-4 py-3 mb-10 text-left font-mono text-sm">
            <p>
              <span className="text-primary">{notFoundContent.terminal.prompt}</span>{" "}
              <span className="text-foreground break-all">{pathname}</span>
            </p>
            <p className="text-muted-foreground">{notFoundContent.terminal.error}</p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Home className="w-5 h-5" />
            {notFoundContent.cta}
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
