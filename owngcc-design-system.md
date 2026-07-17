# OwnGCC Design System Specification

*Extracted from https://owngcc.com — a professional services site for Global Capability Center (GCC) enablement. Built on WordPress + Elementor + Hello Elementor theme.*

---

## 1. Overall Design Language

Corporate professional with emphasis on trust, transparency, and partnership. The design communicates reliability through clean layouts, restrained use of accent color, and generous whitespace. The visual language is confident but not aggressive — it leads with clarity rather than decoration. Photography of people and workspace environments grounds the brand in human connection, while icon-driven service cards make complex offerings scannable.

**Tone:** Authoritative, trustworthy, modern-corporate.
**Mood:** Open, structured, human-centered.
**Framing:** "You own your team. We drive the outcomes." — partnership language throughout.

---

## 2. Color Palette

### Brand Colors (from Elementor global settings in `post-6.css`)

| Role | Variable | HEX | Usage |
|---|---|---|---|
| **Primary (Blue)** | `--e-global-color-primary` | `#01629E` | Heading text, icon colors, link underlines |
| **Secondary/Accent (Orange-Red)** | `--e-global-color-secondary` | `#FF5134` | CTAs, buttons, hover states, decorative underlines, social icon borders, accent text |
| **Text (Black)** | `--e-global-color-text` | `#000000` | Body copy, headings |
| **Accent (same as Secondary)** | `--e-global-color-accent` | `#FF5134` | Button backgrounds, interactive elements |

### Observed Extended Palette

| Color | HEX | Usage |
|---|---|---|
| White | `#FFFFFF` | Page backgrounds, card backgrounds, dropdown menus |
| Light gray (text) | `#A8A8A8` | Footer link text |
| Muted text | `#A0A0A0` | Image box subtitles |
| Border gray | `#C7C7C7` | Footer border-top |
| Divider gray | `#E7E7E7` | Menu dropdown item borders |
| Decorative line red | `#f00` / `#ff5138` | Case study accents |
| Decorative line pink | `#ffa391` | Case study secondary accent |
| Orange (icon border) | `#fd6c16` | "Why Choose" icon borders |
| Selection heading accent | `#FF5134` | Section captions/underlines |

The palette is deliberately compact: a trustworthy blue anchors the brand, a warm orange-red provides energy and action, black and grays deliver readability. This is a B2B services palette — no experimentation, all clarity.

---

## 3. Typography

### Font Family

**DM Sans** (from Elementor global typography in `post-6.css`)

- Primary font: `"DM Sans", Arial, sans-serif` — used for all headings, body, buttons, and navigation
- All typography uses DM Sans across every weight and role — a monochromatic type system

### Font Weights Used

- `400` (Regular) — body text, primary typography weight
- `500` (Medium) — accent text, navigation items
- `600` (Semibold) — image box titles
- `700` (Bold) — section headings in footer
- `800` (ExtraBold) — contact info values (phone/email)

### Type Scale (observed across pages)

| Element | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Hero slide heading | `48px` (desktop) → `32px` (mobile) | — | — | Slideshow heading |
| Section headings (h2) | `42px` → `32px` | — | `38-42px` | Responsive clamp |
| Image box titles | `28px` → `20px` (mobile) | — | `28-30px` | Service titles |
| Body text | `18px` (base) | `400` | `1.6` | Global default |
| Navigation items | `17px` → `13px` (tablet) | `500` | — | Header menu |
| Footer links | `18px` → `13px` (mobile) | `500` | — | Footer menu items |
| Small body | `14px` | `400` | — | Captions, descriptions |
| Footer heading | `22px` → `13px` (mobile) | `700` | — | Column titles |
| Contact labels | `18px` | `600` | `20px` | Image box subtitles |
| Contact values | `24px` → `14px` | `800` | `28px` | Phone/email values |
| Button text | `20px` → `12px` | `600-700` | — | Primary CTAs |
| Caption/eyebrow | `0.72rem` | `600` | — | Section caption prefix |
| Copyright | `16px` → `13px` | `400` | — | Footer legal |

---

## 4. Spacing & Layout

### Container System

| Setting | Value |
|---|---|
| Max container width | `1400px` (Elementor section boxed) |
| Column gap (widget spacing) | `15px` |
| Section padding (vertical) | `60px` (footer), `40px` (mobile sections) |
| Header padding | `15px` top/bottom (desktop), `10px` (mobile) |

### Element Spacing Patterns

- Service cards padding: `32px` (mobile), `20px` (desktop variants)
- Image box icon margin-bottom: `14-16px`
- Section vertical padding: `clamp(6.5rem, 11vw, 10rem)` style via utility
- Between elements in sections: `15px` (Elementor default widget spacing)
- Footer column gap: `30px` between columns

---

## 5. Border Radius

| Context | Radius |
|---|---|
| Buttons (global) | `100px` (fully pill-shaped) |
| Case study accent bar | `10px` |
| "Why Choose" icon container | `50%` (circular) |
| Footer image box radius | used on mobile: `20px` |
| Form submit button | `6px` |

---

## 6. Shadows

The site does **not** use box shadows in the primary design. Visual depth comes from:
- Photography and imagery
- Color contrast (white cards on white pages)
- Border separators between sections
- Hover scale transforms on glass elements (in child theme, `1.03` scale)

---

## 7. Icon & Image Style

### Icons

- Simple flat SVG/PNG icons used in image-box widgets
- Icons are service-oriented: vision, business transformation, operational transformation, talent, workspaces, etc.
- Consistent icon size: `200×200px` source images
- Display size varies: `34-64px` (responsive) in image boxes
- Social icons: outlined circle style with `1px` border, `23px` icon size, `0.6em` padding

### Images

- Full-bleed hero photography in slides
- Service section imagery: balanced left/right composition with text
- Case study images: have a distinctive right-side accent bar (`7px` wide, `#ffa391`)
- World map illustration on About page
- Testimonial avatar circles
- No decorative gradients or abstract shapes

---

## 8. Button Styles

### Primary Buttons

| Property | Value |
|---|---|
| Background | `#FF5134` (secondary/accent orange-red) |
| Text color | `#FFFFFF` (white) |
| Font family | DM Sans |
| Font weight | `700` |
| Border radius | `100px` (pill) |
| Padding | `15px 30px` (desktop), `8px 16px` (mobile) |
| Transition | `0.5s` |
| Hover background | `#01629E` (primary blue) |
| Hover text color | `#FFFFFF` |

### Form Submit Buttons (Contact Form 7)

| Property | Value |
|---|---|
| Background | `#FF5134` (orange-red) |
| Text color | `#ffff` |
| Font size | `20px` |
| Font weight | `600` |
| Border radius | `6px` |
| Padding | `12px 30px` |
| Hover background | `#01629E` |
| Display | flex with centered alignment |

### Header CTA Button

- Same pill shape (`100px` border radius)
- Sits in header nav area
- Same color transition on hover

---

## 9. Cards & Content Surfaces

The site uses **image-box widgets** (Elementor) rather than traditional "cards." These have:

- Icon/image left-aligned with text
- Title above, description below
- No card border or shadow on most
- Some cards gain padding/border on mobile (`20px 20px`, border-radius `20px`)
- Pricing/feature comparison sections use icon list items, not card grids

---

## 10. Backgrounds & Gradients

- **Page background:** `#FFFFFF` (white) — clean, minimal
- **Header:** Transparent (`#FF513400`)
- **Footer:** White (`#FFFFFF`)
- **Dropdown menu:** `#FFFFFF` with `#E7E7E7` dividers
- **Hero slideshow:** Full-bleed imagery with text overlay
- **No gradients** used in backgrounds — flat colors throughout
- **Decorative accent lines** are solid-color pseudo-elements (orange-red `#ff5138`, red `#f00`, pink `#ffa391`)

---

## 11. Layout Principles & Grid

- **Flexbox-based layout** (Elementor Flexbox Container system)
- **Content width:** Maximum `1400px` with responsive breakpoints at `1024px` and `767px`
- **Header:** Two-column flex row — logo (25%) + nav/CTA (75%)
- **Footer:** Multi-column flex layout wrapping responsively
- **Hero:** Full-width slideshow with overlay content
- **Service grid:** Responsive flex columns wrapping (50% on tablet)
- **No CSS Grid Layout** — Elementor uses Flexbox containers

### Responsive Breakpoints

| Breakpoint | Container Width | Notes |
|---|---|---|
| Desktop (2400px+) | 1400px | Oversized screens |
| Desktop (1366px) | 1400px | Standard |
| Laptop (1200px) | 1400px | Content reflows |
| Tablet (1024px) | 1024px | Multi-column→2-column |
| Small tablet (880px) | — | Further reflow |
| Mobile (767px) | 767px | Single column |
| Small mobile (479px) | Fluid | Even tighter |

---

## 12. Section Spacing

| Section | Top Padding | Bottom Padding |
|---|---|---|
| Footer | `60px` | `60px` |
| Footer mobile | `40px` | `40px` |
| Footer bottom bar | `30px` | `30px` |
| Section content areas | Variable per section | Variable |
| Header padding | `15px` | `15px` |
| Header mobile | `10px` | `10px` |
| Image box padding (mobile) | `20px` | `20px` |
| Form section padding | Variable | Variable |

---

## 13. Animations & Transitions

### Elementor Built-in Animations (CSS classes)

- **`fadeInUp`** — used on content sections for entrance animation (via `e-animation-fadeInUp`)

### Custom CSS Transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| Buttons (hover) | `background-color` | `0.5s` | default |
| Image box images | `transition-duration` | `0.3s` | default |
| Footer icon list items | `color` | `0.3s` | default |
| Form inputs | `all` | `0.3s` | default |
| Social icons (hover) | background + border | `0.2s` | default |

### Hover Effects

| Element | Effect |
|---|---|
| Primary buttons | Background shifts from `#FF5134` → `#01629E` |
| Footer nav links | Text color fades to `#FF5134` (secondary) |
| Social icons | Background becomes `#FF5134`, icon becomes white, border matches |
| Nav menu items | Color shifts to `#FF5134` (accent) |
| Liquid-glass (child theme) | `scale(1.03)` on hover |
| Form submit button | Background shifts to `#01629E` |

---

## 14. Navigation & Header

### Desktop Header

| Element | Style |
|---|---|
| Layout | Flex row: logo (left) + menu (center/right) + CTA button |
| Logo max-width | `200px` (desktop), `112px` (mobile) |
| Menu item font | `DM Sans 17px 500` → `13px` (tablet) |
| Menu item gap | `30px` (desktop), `10px` (tablet) |
| Menu pointer style | No underline/frame (height: `0px`) |
| Menu toggle (mobile) | Icon/drawer, `28-32px` size |
| CTA button | Pill shape, orange-red, hover→blue |
| Header background | Transparent |
| Header padding | `15px 20px` (desktop), `10px 10px` (mobile) |

### Mobile Menu

- Hamburger icon (`nav-menu-icon-size: 28-32px`)
- Dropdown background: `#FFFFFF`
- Dropdown item borders: `1px solid #E7E7E7`
- Standard drawer-style mobile navigation

---

## 15. Responsive Design Patterns

1. **Multi-column → Single column:** Service grids, footer columns, image box grids collapse from 3-4 columns → 2 columns (tablet) → 1 column (mobile)
2. **Fluid typography:** All heading sizes use pixel values with responsive overrides at breakpoints (no `clamp()` observed — Elementor handles responsive via explicit breakpoint values)
3. **Stacked layout on mobile:** Image-box icons move to top with content below (flex-direction column)
4. **Header condenses:** Logo shrinks, menu gap reduces, CTA text shrinks
5. **Footer wraps:** 4-column layout wraps to 2-column then single column
6. **Padding reduction:** Section padding decreases at each breakpoint
7. **Hero adapts:** Slide height reduces (`460px` → `440px`), heading shrinks, content width percent increases
8. **Touch targets preserved:** Buttons and links maintain adequate sizing at all breakpoints

---

## 16. Form Design

| Element | Style |
|---|---|
| Input/text areas | No border, only `1px solid #666` bottom border |
| Input background | Transparent |
| Input height | `40px` |
| Textarea height | `100px` (min) |
| Focus state | No outline, no box-shadow |
| Labels | Full-width block elements |
| Layout | Two-column (desktop), single column (mobile) — via `cf7-row two-col` |
| Submit button | Orange-red background, white text, `6px` radius, centered |
| Checkbox | Standard Privacy Policy consent |

---

## Summary: Design DNA

> **OwnGCC's design is restrained, trustworthy, and corporate-clear. It uses a compact blue+orange palette, a single typeface (DM Sans) across all roles, no shadows, no gradients, and minimal animation. The visual weight is carried by photography, generous whitespace, and clean layout grids. The accent color (orange-red `#FF5134`) is reserved for actions, hover states, and selective emphasis — nothing decorative. This is a B2B services design that prioritizes readability and trust over visual spectacle.**
