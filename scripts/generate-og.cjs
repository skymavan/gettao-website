const sharp = require("sharp");
const { resolve } = require("node:path");

const out = resolve(__dirname, "..", "public", "opengraph-image.png");

const OBSIDIAN = "#0A1210";
const JADE = "#2FE0A0";
const BONE = "#F2F4F0";
const SAGE = "#8E9994";

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${JADE}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${OBSIDIAN}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <g transform="translate(960, 315)" opacity="0.85">
    <circle cx="0" cy="0" r="200" fill="none" stroke="${JADE}" stroke-opacity="0.22" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="120" fill="none" stroke="${JADE}" stroke-opacity="0.1" stroke-width="1.5"/>
    <circle cx="0" cy="-200" r="7" fill="${JADE}"/>
    <circle cx="190" cy="-62" r="7" fill="${JADE}"/>
    <circle cx="118" cy="162" r="7" fill="${JADE}"/>
    <circle cx="-118" cy="162" r="11" fill="#F4A321"/>
    <circle cx="-190" cy="-62" r="7" fill="${JADE}"/>
  </g>

  <text x="80" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="86" font-style="italic" fill="${JADE}">GetTAO</text>
  <text x="80" y="340" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="600" fill="${BONE}">Autonomous operations,</text>
  <text x="80" y="400" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="600" fill="${BONE}">human on the throttle.</text>
  <text x="80" y="470" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="26" fill="${SAGE}">Agents run the work. A human approves what matters.</text>

  <rect x="80" y="510" width="640" height="1" fill="${JADE}" stroke-opacity="0.3"/>
  <text x="80" y="555" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="${SAGE}">gettao.io</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(out)
  .then(({ width, height, size }) => {
    console.log(
      `\u2713 OG image written to public/opengraph-image.png (${width}x${height}, ${(size / 1024).toFixed(1)} KB)`,
    );
  })
  .catch((error) => {
    console.error("OG image generation failed:", error);
    process.exit(1);
  });
