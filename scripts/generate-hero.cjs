const sharp = require("sharp");
const { resolve } = require("node:path");

const publicDir = resolve(__dirname, "..", "public");

const BLUE = "#01629E";
const ORANGE = "#FF5134";
const OFF_WHITE = "#F8F9FA";
const LIGHT_BLUE = "#E8F4FD";
const MID_BLUE = "#B3D9EC";
const SOFT_BLUE = "#D0E8F5";

const DESKTOP_W = 1440;
const DESKTOP_H = 1080;
const MOBILE_W = 768;
const MOBILE_H = 1024;

function desktopSvg() {
  return `<svg width="${DESKTOP_W}" height="${DESKTOP_H}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${DESKTOP_W} ${DESKTOP_H}">
  <defs>
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${OFF_WHITE}"/>
      <stop offset="100%" stop-color="${LIGHT_BLUE}"/>
    </linearGradient>
    <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="${BLUE}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0.08"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="${BLUE}" flood-opacity="0.12"/>
    </filter>
    <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="${DESKTOP_W}" height="${DESKTOP_H}" fill="url(#bg-grad)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.04">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${DESKTOP_H}" stroke="${BLUE}" stroke-width="1"/>`).join("\n    ")}
    ${Array.from({ length: 19 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="${DESKTOP_W}" y2="${i * 60}" stroke="${BLUE}" stroke-width="1"/>`).join("\n    ")}
  </g>

  <!-- Workflow flow path -->
  <path d="M 180 540 C 350 540, 400 380, 580 380 S 780 540, 960 540 S 1100 420, 1260 420"
        fill="none" stroke="${BLUE}" stroke-width="3" stroke-opacity="0.15" stroke-dasharray="12 6"/>
  <path d="M 180 540 C 350 540, 400 380, 580 380 S 780 540, 960 540 S 1100 420, 1260 420"
        fill="none" stroke="${BLUE}" stroke-width="2" stroke-opacity="0.3"/>

  <!-- Document stack left -->
  <g filter="url(#soft-shadow)" transform="translate(140, 340)">
    <rect x="0" y="0" width="120" height="160" rx="8" fill="white" stroke="${MID_BLUE}" stroke-width="1.5" transform="rotate(-4 60 80)"/>
    <rect x="12" y="20" width="70" height="6" rx="3" fill="${MID_BLUE}" opacity="0.5"/>
    <rect x="12" y="34" width="55" height="6" rx="3" fill="${MID_BLUE}" opacity="0.35"/>
    <rect x="12" y="48" width="85" height="6" rx="3" fill="${MID_BLUE}" opacity="0.3"/>
    <rect x="12" y="68" width="96" height="1" fill="${MID_BLUE}" opacity="0.2"/>
    <rect x="12" y="82" width="60" height="6" rx="3" fill="${MID_BLUE}" opacity="0.3"/>
    <rect x="12" y="96" width="80" height="6" rx="3" fill="${MID_BLUE}" opacity="0.25"/>
  </g>

  <!-- Worker figure 1 (left, sending document) -->
  <g transform="translate(260, 400)" filter="url(#shadow)">
    <circle cx="0" cy="-30" r="18" fill="${BLUE}" opacity="0.9"/>
    <rect x="-14" y="-8" width="28" height="40" rx="6" fill="${BLUE}" opacity="0.8"/>
    <rect x="-20" y="0" width="12" height="24" rx="4" fill="${BLUE}" opacity="0.7" transform="rotate(-15 -14 12)"/>
    <rect x="8" y="-4" width="12" height="20" rx="4" fill="${BLUE}" opacity="0.7" transform="rotate(20 14 6)"/>
  </g>

  <!-- Floating document 1 -->
  <g filter="url(#soft-shadow)" transform="translate(380, 320) rotate(6)">
    <rect width="80" height="105" rx="6" fill="white" stroke="${MID_BLUE}" stroke-width="1.2"/>
    <rect x="10" y="14" width="48" height="5" rx="2.5" fill="${BLUE}" opacity="0.35"/>
    <rect x="10" y="26" width="38" height="5" rx="2.5" fill="${BLUE}" opacity="0.25"/>
    <rect x="10" y="42" width="60" height="1" fill="${BLUE}" opacity="0.15"/>
    <rect x="10" y="54" width="50" height="5" rx="2.5" fill="${BLUE}" opacity="0.3"/>
    <rect x="10" y="66" width="42" height="5" rx="2.5" fill="${BLUE}" opacity="0.2"/>
  </g>

  <!-- Worker figure 2 (center-left, processing) -->
  <g transform="translate(520, 340)" filter="url(#shadow)">
    <circle cx="0" cy="-30" r="18" fill="${BLUE}" opacity="0.85"/>
    <rect x="-14" y="-8" width="28" height="40" rx="6" fill="${BLUE}" opacity="0.75"/>
    <rect x="-22" y="-2" width="14" height="22" rx="5" fill="${BLUE}" opacity="0.65" transform="rotate(-25 -15 9)"/>
    <rect x="8" y="2" width="10" height="18" rx="4" fill="${BLUE}" opacity="0.65" transform="rotate(10 13 11)"/>
  </g>

  <!-- Processing gear/node -->
  <circle cx="620" cy="380" r="22" fill="${BLUE}" opacity="0.12"/>
  <circle cx="620" cy="380" r="14" fill="${BLUE}" opacity="0.2"/>
  <circle cx="620" cy="380" r="6" fill="${BLUE}" opacity="0.35"/>

  <!-- HUMAN CHECKPOINT (orange) -->
  <g transform="translate(760, 480)">
    <circle cx="0" cy="0" r="40" fill="${ORANGE}" opacity="0.08"/>
    <circle cx="0" cy="0" r="28" fill="${ORANGE}" opacity="0.12"/>
    <circle cx="0" cy="0" r="18" fill="${ORANGE}" opacity="0.9" filter="url(#shadow)"/>
    <!-- Human icon -->
    <circle cx="0" cy="-5" r="6" fill="white" opacity="0.9"/>
    <path d="M -8 6 Q 0 14 8 6" fill="none" stroke="white" stroke-width="2" opacity="0.9" stroke-linecap="round"/>
  </g>
  <text x="760" y="540" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="${ORANGE}" opacity="0.7">REVIEW</text>

  <!-- Floating document 2 (after checkpoint) -->
  <g filter="url(#soft-shadow)" transform="translate(880, 400) rotate(-3)">
    <rect width="80" height="105" rx="6" fill="white" stroke="${MID_BLUE}" stroke-width="1.2"/>
    <rect x="10" y="14" width="48" height="5" rx="2.5" fill="${BLUE}" opacity="0.35"/>
    <rect x="10" y="26" width="38" height="5" rx="2.5" fill="${BLUE}" opacity="0.25"/>
    <rect x="10" y="42" width="60" height="1" fill="${BLUE}" opacity="0.15"/>
    <rect x="10" y="54" width="50" height="5" rx="2.5" fill="${BLUE}" opacity="0.3"/>
    <rect x="10" y="66" width="42" height="5" rx="2.5" fill="${BLUE}" opacity="0.2"/>
    <!-- Checkmark on approved doc -->
    <circle cx="60" cy="16" r="10" fill="${BLUE}" opacity="0.15"/>
    <path d="M 55 16 L 59 20 L 67 12" fill="none" stroke="${BLUE}" stroke-width="2" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Worker figure 3 (right, completing) -->
  <g transform="translate(1020, 380)" filter="url(#shadow)">
    <circle cx="0" cy="-30" r="18" fill="${BLUE}" opacity="0.85"/>
    <rect x="-14" y="-8" width="28" height="40" rx="6" fill="${BLUE}" opacity="0.75"/>
    <rect x="-18" y="-4" width="12" height="20" rx="4" fill="${BLUE}" opacity="0.65" transform="rotate(-10 -12 6)"/>
    <rect x="6" y="0" width="14" height="22" rx="5" fill="${BLUE}" opacity="0.65" transform="rotate(15 13 11)"/>
  </g>

  <!-- Document stack right (completed) -->
  <g filter="url(#soft-shadow)" transform="translate(1120, 340)">
    <rect x="0" y="0" width="120" height="160" rx="8" fill="white" stroke="${MID_BLUE}" stroke-width="1.5" transform="rotate(3 60 80)"/>
    <rect x="12" y="20" width="70" height="6" rx="3" fill="${BLUE}" opacity="0.35"/>
    <rect x="12" y="34" width="55" height="6" rx="3" fill="${BLUE}" opacity="0.25"/>
    <rect x="12" y="48" width="85" height="6" rx="3" fill="${BLUE}" opacity="0.2"/>
    <rect x="12" y="68" width="96" height="1" fill="${BLUE}" opacity="0.15"/>
    <rect x="12" y="82" width="60" height="6" rx="3" fill="${BLUE}" opacity="0.25"/>
    <rect x="12" y="96" width="80" height="6" rx="3" fill="${BLUE}" opacity="0.2"/>
    <!-- Completed badge -->
    <circle cx="100" cy="16" r="12" fill="${BLUE}" opacity="0.12"/>
    <path d="M 95 16 L 99 20 L 107 12" fill="none" stroke="${BLUE}" stroke-width="2" opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Decorative floating dots -->
  <circle cx="340" cy="250" r="4" fill="${BLUE}" opacity="0.12"/>
  <circle cx="680" cy="280" r="3" fill="${BLUE}" opacity="0.1"/>
  <circle cx="960" cy="300" r="5" fill="${BLUE}" opacity="0.08"/>
  <circle cx="1200" cy="350" r="3" fill="${BLUE}" opacity="0.1"/>
  <circle cx="450" cy="600" r="4" fill="${ORANGE}" opacity="0.08"/>
  <circle cx="1080" cy="550" r="3" fill="${BLUE}" opacity="0.1"/>
</svg>`;
}

function mobileSvg() {
  return `<svg width="${MOBILE_W}" height="${MOBILE_H}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MOBILE_W} ${MOBILE_H}">
  <defs>
    <linearGradient id="bg-grad-m" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="${OFF_WHITE}"/>
      <stop offset="100%" stop-color="${LIGHT_BLUE}"/>
    </linearGradient>
    <filter id="shadow-m" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="${BLUE}" flood-opacity="0.1"/>
    </filter>
    <filter id="soft-shadow-m" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="${MOBILE_W}" height="${MOBILE_H}" fill="url(#bg-grad-m)"/>

  <!-- Subtle grid -->
  <g opacity="0.035">
    ${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${MOBILE_H}" stroke="${BLUE}" stroke-width="1"/>`).join("\n    ")}
    ${Array.from({ length: 18 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="${MOBILE_W}" y2="${i * 60}" stroke="${BLUE}" stroke-width="1"/>`).join("\n    ")}
  </g>

  <!-- Workflow path -->
  <path d="M 100 280 C 200 280, 220 420, 384 420 S 500 280, 668 280"
        fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-opacity="0.2"/>

  <!-- Document top-left -->
  <g filter="url(#soft-shadow-m)" transform="translate(80, 180) rotate(-5)">
    <rect width="90" height="120" rx="6" fill="white" stroke="${MID_BLUE}" stroke-width="1.2"/>
    <rect x="10" y="16" width="50" height="5" rx="2.5" fill="${BLUE}" opacity="0.3"/>
    <rect x="10" y="28" width="40" height="5" rx="2.5" fill="${BLUE}" opacity="0.2"/>
    <rect x="10" y="44" width="65" height="1" fill="${BLUE}" opacity="0.12"/>
    <rect x="10" y="56" width="45" height="5" rx="2.5" fill="${BLUE}" opacity="0.25"/>
  </g>

  <!-- Worker 1 -->
  <g transform="translate(200, 240)" filter="url(#shadow-m)">
    <circle cx="0" cy="-22" r="14" fill="${BLUE}" opacity="0.85"/>
    <rect x="-11" y="-6" width="22" height="32" rx="5" fill="${BLUE}" opacity="0.75"/>
    <rect x="-16" y="0" width="10" height="18" rx="3.5" fill="${BLUE}" opacity="0.65" transform="rotate(-15 -11 9)"/>
  </g>

  <!-- Worker 2 -->
  <g transform="translate(384, 380)" filter="url(#shadow-m)">
    <circle cx="0" cy="-22" r="14" fill="${BLUE}" opacity="0.85"/>
    <rect x="-11" y="-6" width="22" height="32" rx="5" fill="${BLUE}" opacity="0.75"/>
    <rect x="-14" y="-2" width="10" height="16" rx="3.5" fill="${BLUE}" opacity="0.65" transform="rotate(-20 -9 6)"/>
  </g>

  <!-- Human checkpoint (orange) -->
  <g transform="translate(500, 480)">
    <circle cx="0" cy="0" r="32" fill="${ORANGE}" opacity="0.07"/>
    <circle cx="0" cy="0" r="22" fill="${ORANGE}" opacity="0.12"/>
    <circle cx="0" cy="0" r="14" fill="${ORANGE}" opacity="0.9" filter="url(#shadow-m)"/>
    <circle cx="0" cy="-4" r="5" fill="white" opacity="0.9"/>
    <path d="M -6 5 Q 0 11 6 5" fill="none" stroke="white" stroke-width="1.8" opacity="0.9" stroke-linecap="round"/>
  </g>
  <text x="500" y="528" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="${ORANGE}" opacity="0.65">REVIEW</text>

  <!-- Worker 3 -->
  <g transform="translate(600, 300)" filter="url(#shadow-m)">
    <circle cx="0" cy="-22" r="14" fill="${BLUE}" opacity="0.85"/>
    <rect x="-11" y="-6" width="22" height="32" rx="5" fill="${BLUE}" opacity="0.75"/>
    <rect x="6" y="-2" width="10" height="16" rx="3.5" fill="${BLUE}" opacity="0.65" transform="rotate(12 11 6)"/>
  </g>

  <!-- Completed doc -->
  <g filter="url(#soft-shadow-m)" transform="translate(620, 200) rotate(4)">
    <rect width="90" height="120" rx="6" fill="white" stroke="${MID_BLUE}" stroke-width="1.2"/>
    <rect x="10" y="16" width="50" height="5" rx="2.5" fill="${BLUE}" opacity="0.3"/>
    <rect x="10" y="28" width="40" height="5" rx="2.5" fill="${BLUE}" opacity="0.2"/>
    <circle cx="72" cy="14" r="9" fill="${BLUE}" opacity="0.12"/>
    <path d="M 68 14 L 71 17 L 77 11" fill="none" stroke="${BLUE}" stroke-width="1.8" opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Decorative dots -->
  <circle cx="300" cy="160" r="3" fill="${BLUE}" opacity="0.1"/>
  <circle cx="550" cy="200" r="4" fill="${BLUE}" opacity="0.08"/>
  <circle cx="150" cy="500" r="3" fill="${ORANGE}" opacity="0.07"/>
</svg>`;
}

async function generate() {
  console.log("Generating hero illustrations...");

  // Desktop PNG
  const desktopPngPath = resolve(publicDir, "gettao-hero-desktop.png");
  await sharp(Buffer.from(desktopSvg()))
    .png({ compressionLevel: 9 })
    .toFile(desktopPngPath);
  console.log(`  ✓ Desktop PNG: ${desktopPngPath}`);

  // Desktop AVIF
  await sharp(desktopPngPath)
    .avif({ quality: 75, effort: 6 })
    .toFile(resolve(publicDir, "gettao-hero-desktop.avif"));
  console.log(`  ✓ Desktop AVIF`);

  // Desktop WebP
  await sharp(desktopPngPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(resolve(publicDir, "gettao-hero-desktop.webp"));
  console.log(`  ✓ Desktop WebP`);

  // Mobile PNG
  const mobilePngPath = resolve(publicDir, "gettao-hero-mobile.png");
  await sharp(Buffer.from(mobileSvg()))
    .png({ compressionLevel: 9 })
    .toFile(mobilePngPath);
  console.log(`  ✓ Mobile PNG: ${mobilePngPath}`);

  // Mobile AVIF
  await sharp(mobilePngPath)
    .avif({ quality: 75, effort: 6 })
    .toFile(resolve(publicDir, "gettao-hero-mobile.avif"));
  console.log(`  ✓ Mobile AVIF`);

  // Mobile WebP
  await sharp(mobilePngPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(resolve(publicDir, "gettao-hero-mobile.webp"));
  console.log(`  ✓ Mobile WebP`);

  console.log("\nHero illustration generation complete.");
}

generate().catch((error) => {
  console.error("Hero generation failed:", error);
  process.exit(1);
});
