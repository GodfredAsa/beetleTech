/*
 * Regenerate `public/beetle-icon.png` from `scripts/beetle-source.png`.
 * Requires: npm i -D sharp && node scripts/process-beetle.cjs
 * Replaces non-background pixels with #2dd4bf; lum > 238 → transparent.
 */
const path = require("path");
const sharp = require("sharp");

const TEAL = { r: 45, g: 212, b: 191 };

async function main() {
  const input = path.join(__dirname, "beetle-source.png");
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    // Drop near-white background and negative-space cuts inside the icon
    if (lum > 238) {
      data[i + 3] = 0;
      continue;
    }
    data[i] = TEAL.r;
    data[i + 1] = TEAL.g;
    data[i + 2] = TEAL.b;
    data[i + 3] = 255;
  }

  const out = path.join(__dirname, "..", "public", "beetle-icon.png");
  await sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(out);

  console.log("Wrote", out, info.width, "x", info.height);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
