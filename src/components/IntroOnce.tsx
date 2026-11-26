// Le animazioni d'ingresso partono solo sulla prima pagina aperta.
// Dopo un cambio pagina interno (Privacy, Cookie, logo, ritorno alla home) i contenuti
// compaiono subito al loro posto, senza ripetere dissolvenze e scivolamenti.
// Usato da: App.tsx, attorno alle rotte (la modalità nerd resta fuori e si anima sempre).
import { useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { PresenceContext } from "framer-motion";

export const IntroOnce = ({ children }: { children: React.ReactNode }) => {
  const { key } = useLocation();
  const firstKey = useRef(key);
  const navigated = useRef(false);
  if (key !== firstKey.current) navigated.current = true;

  const skipIntro = useMemo(
    () => ({
      id: "intro-once",
      initial: false as const,
      isPresent: true,
      custom: undefined,
      onExitComplete: undefined,
      register: () => () => {},
    }),
    [],
  );

  if (!navigated.current) return <>{children}</>;
  return <PresenceContext.Provider value={skipIntro}>{children}</PresenceContext.Provider>;
};
