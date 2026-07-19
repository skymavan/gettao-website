const sharp = require("sharp");
const { resolve } = require("node:path");

const publicDir = resolve(__dirname, "..", "public");
const srcLogo = resolve(publicDir, "logo.png");

async function generate() {
  console.log("Generating logo lockups from public/logo.png...");

  const metadata = await sharp(srcLogo).metadata();
  console.log(`  Source: ${metadata.width}x${metadata.height}`);

  // Header lockup: tightly crop the blue square mark (left ~40% of the image, square)
  const markSize = Math.min(metadata.height, Math.round(metadata.width * 0.38));
  await sharp(srcLogo)
    .extract({ left: 0, top: 0, width: markSize, height: markSize })
    .resize(80, 80, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(resolve(publicDir, "logo-header.png"));
  console.log("  ✓ logo-header.png (80x80 header lockup)");

  // Footer lockup: the full logo mark area (wider, includes mark + text area)
  const footerWidth = Math.round(metadata.width * 0.42);
  await sharp(srcLogo)
    .extract({ left: 0, top: 0, width: footerWidth, height: metadata.height })
    .resize(200, 100, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(resolve(publicDir, "logo-footer.png"));
  console.log("  ✓ logo-footer.png (200x100 footer lockup)");

  console.log("\nLogo lockup generation complete.");
}

generate().catch((error) => {
  console.error("Logo generation failed:", error);
  process.exit(1);
});
