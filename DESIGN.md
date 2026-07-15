# GetTAO Design System — Living Telemetry

## Direction

GetTAO reads as a next-generation operations control room: a dark obsidian environment where autonomous systems run live and human checkpoints pulse warmly. The page signals artificial intelligence and operational reliability the moment it loads, then stays grounded as visitors move through capabilities, the operating loop, pricing, and access. GetTAO is written with capital G, T, A, O and never carries a registered-mark symbol.

This identity is deliberately distinct from SkyMavan's navy / Signal Blue / Instrument Serif celestial direction.

## Color

All semantic colors use HSL custom properties. The site is dark-only.

| Role | HSL | Hex |
| --- | --- | --- |
| Obsidian background | `168 22% 5%` | `#0A1210` |
| Deep Surface | `185 20% 9%` | `#0F181C` |
| Bone foreground | `90 12% 95%` | `#F2F4F0` |
| Sage secondary text | `150 8% 58%` | `#8E9994` |
| Jade signal | `158 72% 52%` | `#2FE0A0` |
| Amber human | `38 95% 56%` | `#F4A321` |

Jade is the autonomous-system color: routes, links, focus rings, live nodes. Amber is reserved exclusively for human approval, selection, and the human checkpoint in the operating loop. Body text and controls must meet WCAG 2.2 AA contrast.

## Typography

- Display and wordmark: Fraunces (optical-size soft serif, 400, normal and italic) — the human voice; used with restraint.
- Body and interface: Hanken Grotesk (400/500/600) — the system voice; clean, precise, legible.
- Hero: `clamp(3.5rem, 8vw, 7.7rem)` with tight relative tracking.
- H1–H3 use balanced wrapping; prose uses pretty wrapping at a readable measure.

## Layout and Components

- Maximum content width is 80rem with fluid mobile gutters.
- The hero occupies at least `100svh`; copy sits in purpose-built negative space with no tint, wash, or gradient overlay.
- Capabilities use editorial rows; the operating loop uses a real ordered timeline; cards are reserved only for pricing comparisons.
- The header floats above the hero. Liquid glass is limited to navigation and primary journey controls.
- Content and form surfaces are opaque Deep Surface or Obsidian with restrained borders.
- The operating loop is Observe → Reason → Approve → Act → Learn. Jade marks system stages; amber marks only the human approval stage.
- Mobile navigation remains an accessible Sheet with managed focus.

## Signature

A live operating-loop visualization: jade nodes for the autonomous stages (Observe, Reason, Act, Learn) and a single pulsing amber node for the human Approve gate. It reads as a system that is running, not a static diagram.

## Imagery and Motion

- The hero artwork is local and art-directed (generated/placeholder for now, swappable later).
- No color overlays, decorative blobs, radial gradients, unreadable UI text, or generic AI glow.
- Hero copy uses one fully opaque three-stage rise: headline at 0ms, description at 200ms, actions at 400ms.
- Fine-pointer desktops add at most a subtle parallax depth to the hero artwork; coarse pointers, small screens, and reduced-motion users receive a static image.
- Controls use the standard easing `cubic-bezier(0.16, 1, 0.3, 1)`. No bounce or elastic easing.
- Reduced motion omits all entrance choreography and artwork movement while keeping content visible.

## Responsive and Accessibility

- Validate at 320, 768, 1024, and 1440 pixels.
- One H1, semantic landmarks, labelled ordered routes, and persistent form labels.
- All interactive targets are at least 44px and keep visible keyboard focus.
- Respect safe-area insets and prevent horizontal overflow.
