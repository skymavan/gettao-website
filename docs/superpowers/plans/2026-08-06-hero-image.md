# GetTAO Hero Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a polished GetTAO hero illustration, deliver responsive optimized assets, and replace the current placeholder artwork without changing the hero narrative or interaction.

**Architecture:** The built-in image-generation tool produces one versioned master raster. Sharp derives same-ratio desktop and mobile renditions in PNG, WebP, and AVIF. The existing `HeroVisual` picture element references the new versioned files through `withBasePath`, preserving decorative semantics and pointer-depth behavior.

**Tech Stack:** Built-in image generation, Sharp 0.35, Next.js 16, React 19, TypeScript, Vitest, Playwright.

## Global Constraints

- Use a refined 3D editorial illustration on an off-white or very pale neutral backdrop.
- GetTAO blue `#01629E` identifies system activity; orange-red `#FF5134` appears once as the human approval checkpoint.
- Include financial documents moving through a compact autonomous workflow and emerging organized or approved.
- Include no logos, legible document copy, fabricated metrics, dashboard screens, purple or violet, dark control-room styling, generic humanoid robots, office stock-photo cues, decorative gradients, watermarks, or visual clutter.
- Keep the important workflow centered and legible in a 4:3 desktop composition and a same-ratio mobile rendition.
- Preserve the existing empty `alt`, `aria-hidden="true"`, pointer-depth interaction, base-path handling, and reduced-motion behavior.
- Validate at 320, 768, 1024, and 1440 pixels.

---

### Task 1: Generate and prepare the versioned hero assets

**Files:**
- Create: `public/gettao-hero-workflow-v2-master.png`
- Create: `public/gettao-hero-workflow-v2-desktop.png`
- Create: `public/gettao-hero-workflow-v2-desktop.webp`
- Create: `public/gettao-hero-workflow-v2-desktop.avif`
- Create: `public/gettao-hero-workflow-v2-mobile.png`
- Create: `public/gettao-hero-workflow-v2-mobile.webp`
- Create: `public/gettao-hero-workflow-v2-mobile.avif`

**Interfaces:**
- Consumes: the approved design in `docs/superpowers/specs/2026-08-06-hero-image-design.md`.
- Produces: versioned local image paths consumed by `HeroVisual` in Task 2.

- [ ] **Step 1: Generate the master with the built-in image-generation tool**

Use this exact production prompt:

```text
Use case: stylized-concept
Asset type: landing page hero illustration for a financial AI operations platform
Primary request: Create a premium 3D editorial illustration that makes autonomous financial operations and human control immediately understandable.
Scene/backdrop: seamless off-white matte studio backdrop that blends naturally into a light website surface; no horizon line and no decorative gradient.
Subject: financial documents and structured data tiles enter a compact connected automation system, travel along a clear blue workflow path, pass through one prominent orange-red human approval checkpoint, and emerge neatly organized and approved. Use abstract operational machinery and precise connectors, not humanoid robots or dashboard screens.
Style/medium: refined contemporary 3D editorial illustration, crisp geometric forms, tactile paper and matte-coated machinery, restrained depth, high-end enterprise art direction.
Composition/framing: 4:3 landscape composition; concentrate the complete workflow in the central 70 percent; balanced visual weight; generous clean margins; approval checkpoint is the single focal accent; remains legible when reduced to a narrow mobile column.
Lighting/mood: soft directional studio lighting, gentle contact shadows, bright, trustworthy, controlled, operational.
Color palette: white and pale neutral surfaces, GetTAO blue #01629E for automation paths and machine elements, exactly one orange-red #FF5134 approval checkpoint.
Materials/textures: matte ceramic-like machine forms, crisp unprinted paper, subtle brushed surfaces, no glossy glass.
Constraints: no text of any kind, no letters, no numbers, no logos, no watermark; one orange-red focal element only; all important objects fully inside the frame.
Avoid: legible document copy, fake metrics, charts, dashboards, purple, violet, dark backgrounds, neon glow, generic humanoid robots, people, office scenes, decorative blobs, strong gradients, excessive reflections, clutter.
```

- [ ] **Step 2: Inspect the generated master**

Open the result at original detail and verify the central workflow, one orange approval focal point, absence of prohibited text, correct palette, clean margins, and legibility at hero-column size. If one constraint fails, issue one targeted generation revision that changes only the failed property.

- [ ] **Step 3: Copy the selected master into the project**

Copy the built-in output to:

```text
public/gettao-hero-workflow-v2-master.png
```

Do not overwrite the existing `gettao-hero-desktop.*` or `gettao-hero-mobile.*` assets.

- [ ] **Step 4: Derive optimized responsive renditions with Sharp**

Run a Node/Sharp processing command that reads the master once and writes:

```text
Desktop PNG: 1440x1080, cover crop, center position
Desktop WebP: 1440x1080, quality 84, effort 6
Desktop AVIF: 1440x1080, quality 72, effort 6
Mobile PNG: 768x576, cover crop, center position
Mobile WebP: 768x576, quality 82, effort 6
Mobile AVIF: 768x576, quality 70, effort 6
```

- [ ] **Step 5: Verify the generated asset metadata**

Run:

```bash
file public/gettao-hero-workflow-v2-*
sips -g pixelWidth -g pixelHeight public/gettao-hero-workflow-v2-master.png public/gettao-hero-workflow-v2-desktop.png public/gettao-hero-workflow-v2-mobile.png
du -h public/gettao-hero-workflow-v2-*
```

Expected: all seven files exist; desktop is `1440x1080`; mobile is `768x576`; optimized formats are smaller than the PNG renditions.

- [ ] **Step 6: Commit the asset set**

```bash
git add public/gettao-hero-workflow-v2-*
git commit -m "Add GetTAO hero workflow artwork"
```

---

### Task 2: Switch the responsive hero component test-first

**Files:**
- Modify: `src/components/hero-visual.test.tsx:7-21`
- Modify: `tests/e2e/site.spec.ts:91-101`
- Modify: `src/components/hero-visual.tsx:52-71`

**Interfaces:**
- Consumes: the six desktop/mobile delivery assets created in Task 1.
- Produces: a decorative responsive `<picture>` that serves the v2 AVIF/WebP assets and retains the v2 desktop WebP fallback.

- [ ] **Step 1: Update the unit test before production code**

Replace the existing image-name assertion and add source assertions:

```tsx
const sources = Array.from(container.querySelectorAll(".hero-picture source"));
expect(sources).toHaveLength(2);
expect(sources[0]?.getAttribute("srcset")).toContain(
  "gettao-hero-workflow-v2-desktop.avif",
);
expect(sources[0]?.getAttribute("srcset")).toContain(
  "gettao-hero-workflow-v2-mobile.avif",
);
expect(sources[1]?.getAttribute("srcset")).toContain(
  "gettao-hero-workflow-v2-desktop.webp",
);
expect(sources[1]?.getAttribute("srcset")).toContain(
  "gettao-hero-workflow-v2-mobile.webp",
);

const img = container.querySelector(".hero-image") as HTMLImageElement;
expect(img.src).toContain("gettao-hero-workflow-v2-desktop.webp");
expect(img.alt).toBe("");
expect(img.width).toBe(1440);
expect(img.height).toBe(1080);
```

- [ ] **Step 2: Update the existing E2E asset expectations before production code**

Change the two regular expressions in `motion-capable visitors receive responsive local hero artwork` to:

```ts
/gettao-hero-workflow-v2-desktop\.avif/
/gettao-hero-workflow-v2-desktop\.webp$/
```

- [ ] **Step 3: Run the focused unit test and verify RED**

Run:

```bash
pnpm test src/components/hero-visual.test.tsx
```

Expected: FAIL because `HeroVisual` still references `gettao-hero-desktop.*` and `gettao-hero-mobile.*`.

- [ ] **Step 4: Update the component with the minimal production change**

Use these responsive sources and fallback:

```tsx
<source
  type="image/avif"
  srcSet={`${withBasePath("/gettao-hero-workflow-v2-desktop.avif")} 1440w, ${withBasePath("/gettao-hero-workflow-v2-mobile.avif")} 768w`}
  sizes="(min-width: 768px) 50vw, 100vw"
/>
<source
  type="image/webp"
  srcSet={`${withBasePath("/gettao-hero-workflow-v2-desktop.webp")} 1440w, ${withBasePath("/gettao-hero-workflow-v2-mobile.webp")} 768w`}
  sizes="(min-width: 768px) 50vw, 100vw"
/>
<img
  className="hero-image"
  src={withBasePath("/gettao-hero-workflow-v2-desktop.webp")}
  alt=""
  width="1440"
  height="1080"
  decoding="async"
  fetchPriority="high"
/>
```

- [ ] **Step 5: Run the focused unit test and verify GREEN**

Run:

```bash
pnpm test src/components/hero-visual.test.tsx
```

Expected: both `HeroVisual` tests pass with no warnings.

- [ ] **Step 6: Commit the responsive source change**

```bash
git add src/components/hero-visual.tsx src/components/hero-visual.test.tsx tests/e2e/site.spec.ts
git commit -m "Use generated workflow art in hero"
```

---

### Task 3: Verify quality, responsiveness, accessibility, and production output

**Files:**
- Verify: `src/app/globals.css:212-253,808-928,999-1020`
- Verify: `tests/e2e/site.spec.ts`
- Verify: `public/gettao-hero-workflow-v2-*`

**Interfaces:**
- Consumes: the completed asset set and updated `HeroVisual` component.
- Produces: evidence that the final hero works at required breakpoints without CSS regressions.

- [ ] **Step 1: Run static verification**

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```

Expected: all commands exit `0` with no test failures, type errors, lint errors, or build errors.

- [ ] **Step 2: Run the focused browser tests**

```bash
pnpm exec playwright test tests/e2e/site.spec.ts --grep "responsive local hero artwork|stacked hero copy|accessibility violations|approved light composition"
```

Expected: the selected tests pass in the mobile, tablet, and desktop projects; the local visual baseline is updated only after inspecting the new screenshot.

- [ ] **Step 3: Inspect rendered breakpoints**

Capture or inspect the hero at 320, 768, 1024, and 1440 pixels. Confirm the image is sharp, the workflow reads left-to-right, the orange approval gate remains the only orange focal object, copy and artwork do not overlap, there is no horizontal overflow, and the image background blends into the hero surface.

- [ ] **Step 4: Confirm accessibility and motion invariants**

Verify the rendered wrapper remains `aria-hidden="true"`, the image keeps `alt=""`, no video is introduced, and reduced-motion mode keeps the static artwork visible without continuous motion.

- [ ] **Step 5: Review the final diff**

```bash
git status --short
git diff HEAD~2 -- src/components/hero-visual.tsx src/components/hero-visual.test.tsx tests/e2e/site.spec.ts
git log -3 --oneline
```

Expected: only the versioned hero assets, approved spec/plan, and targeted hero test/component changes are part of this work; pre-existing untracked `.playwright-cli/` and `public/opengraph-image1.png` remain untouched.
