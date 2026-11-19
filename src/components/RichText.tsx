// Mostra un testo con **grassetto** e [link](indirizzo) scritti nel contenuto.
// Usato da: components/LegalPage.tsx, sections/CommunitySection.tsx (frase sotto Telegram). Formato descritto in content/legalTypes.ts.
import { Fragment } from "react";
import { Link } from "react-router-dom";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;
const linkClass = "text-primary hover:underline";

function renderLink(label: string, href: string, key: number) {
  if (href.startsWith("/")) {
    return <Link key={key} to={href} className={linkClass}>{label}</Link>;
  }
  if (href.startsWith("mailto:")) {
    return <a key={key} href={href} className={linkClass}>{label}</a>;
  }
  return (
    <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {label}
    </a>
  );
}

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(LINK);
        if (link) return renderLink(link[1], link[2], i);
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
