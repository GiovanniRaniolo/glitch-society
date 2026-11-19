// Titolo della scheda e indirizzo ufficiale (canonical) di ogni pagina.
// Usato da: pages/Index.tsx, PrivacyPolicy.tsx, CookiePolicy.tsx, NotFound.tsx (vedi MAP.md).
// Ogni pagina lo mette, così cambiando pagina titolo e canonical non restano quelli vecchi.
import { useEffect } from "react";
import { siteContent } from "@/content/site";

type PageMetaProps = {
  // vuoto = titolo della home; altrimenti "<title> | GL!TCH Society"
  title?: string;
  // percorso della pagina, es. "/privacy-policy"; serve per il canonical
  path?: string;
  // true = pagina da non indicizzare (404): niente canonical, robots "noindex"
  noindex?: boolean;
};

const setRobots = (value: string) => {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "robots";
    document.head.appendChild(meta);
  }
  meta.content = value;
};

const setCanonical = (href: string | null) => {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
};

export const PageMeta = ({ title, path = "/", noindex = false }: PageMetaProps) => {
  useEffect(() => {
    document.title = title ? `${title} | ${siteContent.name}` : siteContent.homeTitle;
    setRobots(noindex ? "noindex, follow" : "index, follow");
    setCanonical(noindex ? null : `${siteContent.url}${path}`);
  }, [title, path, noindex]);

  return null;
};
