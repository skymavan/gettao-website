# GetTAO Hero Image Design

## Goal

Replace the current placeholder hero illustration with a distinctive, production-ready image that makes GetTAO's value legible at a glance: autonomous financial operations moving through controlled workflows, with a human approval point before consequential action.

## Approved Direction

Use a candid, photorealistic editorial office scene. The image should feel precise, light, trustworthy, and operational while avoiding the posed-team conventions of generic consultancy stock photography. It must complement the existing white and pale-surface interface instead of behaving like a separate campaign banner.

The composition will show one financial operations professional candidly reviewing documents beside a monitor that displays an abstract autonomous workflow. GetTAO blue (`#01629E`) identifies system activity. Orange-red (`#FF5134`) appears once, as the approval control the professional is selecting. The person, workflow, and approval action should remain clear at the size used in the right-hand hero column.

## Visual System

- Style: high-end photorealistic editorial corporate photography with natural texture and documentary authenticity.
- Backdrop: bright contemporary office with off-white and pale gray surfaces, soft daylight, and restrained blue details.
- Subject: one focused operations professional supervising an abstract document workflow and selecting a single approval control.
- Composition: landscape master with the important workflow concentrated near the center so it remains useful in a narrower mobile crop.
- Palette: neutral whites and warm grays, GetTAO blue, and one controlled orange-red accent.
- Lighting: soft natural window light with restrained depth of field; no dramatic glow or cinematic spectacle.
- Text: none.
- Avoid: logos, legible document copy, fabricated metrics, chart-heavy dashboards, purple or violet, dark control-room styling, robots, handshakes, posed teams, call-center cues, holograms, watermarks, and visual clutter.

## Responsive Asset Pipeline

Generate one high-quality master image with the built-in image-generation tool. Preserve it non-destructively in `public/` under a new versioned filename. Derive desktop and mobile renditions from the selected master using the project's existing Sharp-based image tooling. Export WebP and AVIF delivery formats while retaining a PNG source or fallback.

The desktop rendition should preserve the full landscape composition. The mobile rendition should use an art-directed crop focused on the approval checkpoint and the document-flow story, not a generic center crop if that weakens the narrative.

## Code Integration

Update `src/components/hero-visual.tsx` to reference the new responsive sources through the existing `<picture>` structure and `withBasePath` helper. Keep the component decorative with an empty `alt` value and `aria-hidden="true"`, because the adjacent hero copy already communicates the meaning and repeated alternative text would add noise.

Keep the existing pointer-depth interaction and reduced-motion behavior. Only adjust hero image sizing or positioning CSS if the new composition needs it at the existing 320, 768, 1024, and 1440 pixel breakpoints.

## Failure Handling

If the generation introduces readable text, fake metrics, a robot character, a posed stock-photo composition, or weakens the orange approval focal point, discard it and make one targeted prompt revision. If the mobile crop cannot retain the professional, workflow, and approval action, use a separately composed mobile derivative rather than shrinking the full desktop scene into illegibility.

## Testing and Verification

- Update the existing `HeroVisual` component test first so it expects the new versioned asset names, then confirm it fails for that expected reason.
- Update the component and confirm the focused test passes.
- Run the complete unit-test suite, lint, and production build.
- Confirm the generated files exist, use the expected dimensions and formats, and remain within a reasonable web-delivery size.
- Inspect the rendered hero at 320, 768, 1024, and 1440 pixels for crop quality, content overlap, horizontal overflow, and visual balance.
- Confirm the page still renders without console errors and the image remains decorative to assistive technology.

## Acceptance Criteria

The final hero photograph must communicate automated financial workflow plus human control without relying on readable embedded text. It must feel candid rather than like posed consultancy stock photography, look native to GetTAO's blue-orange light-theme design, remain clear on desktop and mobile, preserve accessibility and reduced-motion behavior, and pass the project's tests, lint, and production build.
