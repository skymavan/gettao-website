# GetTAO Design System — Professional Services Edition

*Adapted from the visual language of OwnGCC (owngcc.com). Light theme, blue+orange accent palette, DM Sans mono-typeface.*

---

## Direction

GetTAO reads as a professional, trustworthy B2B services brand: clean white backgrounds, clear typography, and restrained use of accent color. The design communicates reliability and partnership — autonomous operations made legible through clarity, not darkness. The brand signals capability without spectacle, using color only where it carries meaning.

This identity deliberately moves away from the dark obsidian / jade / amber "control room" direction to a lighter, more corporate-clear visual language.

---

## Color

All semantic colors use HSL custom properties on a light color scheme.

| Role | HSL | Hex |
| --- | --- | --- |
| Background | `0 0% 100%` | `#FFFFFF` |
| Surface | `0 0% 98%` | `#FAFAFA` |
| Foreground | `0 0% 0%` | `#000000` |
| Muted foreground | `0 0% 40%` | `#666666` |
| Primary (Blue) | `203 98% 31%` | `#01629E` |
| Accent (Orange-Red) | `9 100% 60%` | `#FF5134` |
| Border | `0 0% 88%` | `#E0E0E0` |
| Muted | `0 0% 96%` | `#F5F5F5` |

Blue (`#01629E`) is the primary brand color: headings, links, focus rings, icon accents. Orange-red (`#FF5134`) is the action color: buttons, hover states, human approval markers, selected navigation. Body text and controls meet WCAG 2.2 AA contrast.

---

## Typography

- **Single typeface:** DM Sans (400/500/600/700/800) — used for all display, body, interface, and heading roles.
- No separate display or heading font. Weight and size create hierarchy.
- Hero heading: `clamp(2.6rem, 5vw, 3.6rem)` with tight tracking.
- H1–H3 use balanced wrapping with `font-weight: 600`.
- Body: `1.125rem` (18px) base with comfortable line-height (1.7).

---

## Layout and Components

- Maximum content width is 87.5rem (1400px) with fluid mobile gutters.
- The hero occupies at least 90svh with a two-column layout: copy left, visual right.
- Capabilities use editorial rows; the operating loop uses an ordered timeline; cards are reserved only for pricing comparisons.
- The header floats above the hero with a white background and subtle border. No glass effects.
- Content and form surfaces are opaque white or surface background with border separators.
- The operating loop is Observe → Reason → Approve → Act → Learn. Blue marks system stages; orange-red marks only the human approval stage.
- Mobile navigation remains an accessible Sheet with managed focus.

## Signature

The operating-loop visualization remains: blue nodes for autonomous stages (Observe, Reason, Act, Learn) and a single pulsing orange-red node for the human Approve gate.

## Buttons

- All buttons use full pill shape (`border-radius: 999px`).
- Primary/default buttons: orange-red (`#FF5134`) background, white text, hover transitions to blue (`#01629E`).
- Outline buttons: transparent background, border, hover to muted background.
- Transition duration: 0.3s ease-out.

## Imagery and Motion

- The hero artwork is local and art-directed (placeholder for now, swappable later).
- No color overlays, decorative blobs, radial gradients, or glass effects.
- Hero copy uses a three-stage rise with stagger: headline at 0ms, description at 200ms, actions at 400ms.
- Fine-pointer desktops add subtle parallax depth to hero artwork; coarse pointers, small screens, and reduced-motion users receive static.
- Controls use the standard easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Reduced motion omits all entrance choreography and artwork movement while keeping content visible.

## Responsive and Accessibility

- Validate at 320, 768, 1024, and 1440 pixels.
- One H1, semantic landmarks, labelled ordered routes, and persistent form labels.
- All interactive targets are at least 44px and keep visible keyboard focus.
- Respect safe-area insets and prevent horizontal overflow.
- Forms use underline-style inputs with bottom-border focus state, matching OwnGCC's clean form design.
