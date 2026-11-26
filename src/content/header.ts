import { siteContent } from "./site";
import { communityContent } from "./community";

// Pulsanti in alto a destra nell'intestazione (home e pagina 404).
// `short` è l'etichetta sui telefoni, dove lo spazio accanto al logo è poco.
export const headerContent = {
  contact: {
    label: "Contattaci",
    short: "Contatti",
    url: `mailto:${siteContent.contactEmail}`,
  },
  community: {
    label: "Entra nella community",
    short: "Community",
    url: communityContent.telegram.url,
  },
};
