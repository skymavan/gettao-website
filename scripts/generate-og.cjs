const sharp = require("sharp");
const { resolve } = require("node:path");

const out = resolve(__dirname, "..", "public", "opengraph-image.png");

const BLUE = "#01629E";
const ORANGE = "#FF5134";
const OFF_WHITE = "#F8F9FA";
const LIGHT_BLUE = "#E8F4FD";
const MID_BLUE = "#B3D9EC";

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${OFF_WHITE}"/>
      <stop offset="100%" stop-color="${LIGHT_BLUE}"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${BLUE}" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Workflow illustration -->
  <g transform="translate(860, 315)" opacity="0.85">
    <circle cx="0" cy="0" r="200" fill="none" stroke="${BLUE}" stroke-opacity="0.12" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="120" fill="none" stroke="${BLUE}" stroke-opacity="0.06" stroke-width="1.5"/>
    <!-- Digital workers (blue) -->
    <circle cx="0" cy="-200" r="7" fill="${BLUE}"/>
    <circle cx="190" cy="-62" r="7" fill="${BLUE}"/>
    <circle cx="118" cy="162" r="7" fill="${BLUE}"/>
    <circle cx="-190" cy="-62" r="7" fill="${BLUE}"/>
    <!-- Human checkpoint (orange) -->
    <circle cx="-118" cy="162" r="11" fill="${ORANGE}"/>
  </g>

  <!-- Brand and copy -->
  <text x="80" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700" fill="${BLUE}">Gettao</text>
  <text x="80" y="320" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="46" font-weight="600" fill="#1a1a1a">Digital workers for</text>
  <text x="80" y="375" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="46" font-weight="600" fill="#1a1a1a">financial operations.</text>
  <text x="80" y="440" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#666">Automate document-heavy work with human review</text>
  <text x="80" y="470" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#666">at every critical step.</text>

  <rect x="80" y="510" width="560" height="1" fill="${BLUE}" stroke-opacity="0.2"/>
  <text x="80" y="555" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" fill="#999">gettao.ai</text>
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
