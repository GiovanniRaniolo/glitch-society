import { featuredCourseContent } from "./featuredCourse";

export const heroContent = {
  title: {
    part1: "Break the",
    highlight: "Code",
    part2: "Build the Future"
  },
  subtitle: "Il collettivo che rompe le barriere della formazione tech",
  // Testo che prima stava in "Chi siamo" (T29)
  description: "Trasformiamo corsi intensivi e eventi spot in competenze deploy-ready e connessioni durature. Web development, creative coding, AI e blockchain: la programmazione accessibile a tutti.",
  // Riquadro "La nostra essenza", prima in "Chi siamo" (T29)
  essence: {
    title: "La Nostra Essenza",
    description: "Un hub di innovazione autentica dove tecnologie emergenti si fondono con apprendimento accelerato e socialità viva.",
    values: [
      {
        icon: "code",
        title: "Codice Aperto",
        description: "La conoscenza circola libera tra chi vuole imparare e chi vuole condividere."
      },
      {
        icon: "sparkles",
        title: "Tribe Ibrida",
        description: "Dev, creativi, maker, newbie: il glitch nasce quando mondi diversi collidono."
      },
      {
        icon: "zap",
        title: "Build Together",
        description: "Hackathon, side project, esperimenti: il codice migliore nasce dalla collaborazione."
      }
    ]
  },
  cta: {
    // Porta alla sezione del corso/evento nella stessa pagina (T20)
    primary: {
      label: "Prossimo Evento",
      url: `#${featuredCourseContent.anchor}`
    },
    secondary: {
      label: "Unisciti alla Community",
      url: "https://t.me/glitchsociety_dev"
    }
  },
  browserText: "gl!tch@society:~$ ./init_revolution.sh"
};
