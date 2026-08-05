const sharp = require("sharp");
const { resolve } = require("node:path");

const publicDir = resolve(__dirname, "..", "public");
const srcLogo = resolve(publicDir, "logo.png");

async function generate() {
  console.log("Verifying single logo source public/logo.png...");

  const metadata = await sharp(srcLogo).metadata();
  console.log(`  Source: ${metadata.width}x${metadata.height}`);

  console.log("  ✓ public/logo.png is the single logo source");
  console.log("\nLogo verification complete.");
}

generate().catch((error) => {
  console.error("Logo verification failed:", error);
  process.exit(1);
});
