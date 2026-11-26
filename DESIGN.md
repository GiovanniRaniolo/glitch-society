# DESIGN — GL!TCH Society

Source of truth for the visual system. Tokens live in `src/index.css` (CSS variables, HSL) and `tailwind.config.ts`.

## Direction
A developer collective's site that reads like a terminal session, not a SaaS template: pixel type for headings, a squared techno sans for reading text, monospace only where it is code (labels, buttons, terminal windows), square corners, hard edges, no blurred glows.

## Colors (HSL variables in `src/index.css`)
| Token | Value | Use |
|---|---|---|
| `--background` | `#000000` | page background; `.bg-grid` adds a 32 px minor grid, a 128 px major grid and a 384 px tile of near-transparent binary/hex fragments (no gradients, scrolls with the page) |
| `--foreground` | `#EBEBEB` | main text |
| `--primary` | `#FF6A38` (15 100% 61%) | brand orange: highlights, buttons, prompts, borders on hover |
| `--card` / `--secondary` | `#0F0F0F` / `#1A1A1A` | panels, window bars |
| `--muted-foreground` | `#A6A6A6` | secondary text |
| `--border` | `#333333` | panel borders |
| `--neon-pink` / `--neon-green` | `#FF29B8` / `#3BFF14` | only inside terminal windows (event box, ethics, nerd mode) |

## Typography
- **Display**: Departure Mono (pixel monospace, OFL, self-hosted in `public/fonts/departure-mono/`). Only one weight: headings use it at weight 400 with `font-synthesis: none`, so `font-bold` never fakes a bold.
- **Text**: Chakra Petch 400/500/600/700 (`@fontsource/chakra-petch`), a squared, proportional sans for body copy and paragraphs. Monospace body text was rejected (26/11) as unreadable and "too AI".
- **Code**: IBM Plex Mono 400/500/600/700 (`@fontsource/ibm-plex-mono`), only via `font-mono`: badges, buttons, dividers, terminal windows.
- Tailwind: `font-display` = Departure Mono, `font-sans` = Chakra Petch, `font-mono` = IBM Plex Mono.
- Hero subtitle and description are capped at `max-w-2xl` to keep lines under ~80 characters.

## Shape
- Radius 0 everywhere (`rounded`, `rounded-sm` … `rounded-3xl` resolve to 0). `rounded-full` stays only for window dots.
- Borders 1 px; dashed borders for secondary panels.
- Buttons: square, hard offset shadow (`4px 4px 0`), on hover they move up-left and the shadow grows.
- Header: logo left, two compact buttons right (`CtaLink size="sm"`): "Contattaci" (secondary, mailto) and "Entra nella community" (primary, Telegram). Below `md` the labels shorten to "Contatti"/"Community"; below `sm` the icons are hidden so both fit at 360 px.

## Components
- `Badge`: `[ label ]` tag in orange, square.
- `SectionDivider`: an ASCII rule (`// ----`), not a plain line.
- Hero: pixel headline with the `glitch-text` jump on the highlighted word and a blinking block cursor.
- Nerd mode (`components/nerd/`): hidden full-screen terminal, the old ASCII mockup turned into an easter egg. Opens with the Konami code, typing `nerd`, the backtick key, `#nerd` or a tap on the hero's blinking cursor. Window: black, 1 px neon-green border, IBM Plex Mono 13/14 px, prompt `ospite@gl!tch:~$` in neon green, commands in orange with a dotted underline (clickable), quick-command chips at the bottom for phones. ASCII banner (system mono) from `sm` up, Departure Mono wordmark below. `glitch` and `matrix` are the only effects and are replaced by text under reduced motion.
- Partners (`sections/PartnersSection.tsx`, content in `content/partners.ts`): after Community. One square `bg-card` panel per partner, the whole panel is a link (new tab): partner logo recoloured to `#EBEBEB` (files in `public/partners/`, per-logo height to balance optical weight), city with an orange map pin, one-line description, domain in orange mono with an external-link icon. Hover: orange border and the hard `4px 4px 0` offset shadow of the buttons. Two columns from `md`, stacked below. Nerd mode has a matching `partner` command and `vai partner`.
- Motion: only the hero entrance, the glitch jump and the cursor; all respect `prefers-reduced-motion`.
