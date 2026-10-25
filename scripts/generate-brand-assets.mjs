/**
 * Builds the ATIVAR brand asset pack from the master logo SVG.
 *
 * Source: public/ativar_logo_transparent_5000x5000.svg
 * Output: public/brand/* (logos, app icons, favicon.ico) + public/favicon.ico
 *
 * Run with: node scripts/generate-brand-assets.mjs
 * Requires `sharp` (already installed as a Next.js dependency).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const sourceSvg = path.join(root, "public", "ativar_logo_transparent_5000x5000.svg");
const brandDir = path.join(root, "public", "brand");
const publicDir = path.join(root, "public");

const LOGO_WIDTH = 1200; // width of the ready-to-use full logo PNG
const MARK_WIDTH = 512;
const WORDMARK_WIDTH = 1200;

fs.mkdirSync(brandDir, { recursive: true });

/* ------------------------------------------------------------------ */
/* 1. Read the master logo and cut the transparent borders             */
/* ------------------------------------------------------------------ */

const svgSource = fs.readFileSync(sourceSvg, "utf8");
const embedded = svgSource.match(/base64,([A-Za-z0-9+/=]+)/)?.[1];
if (!embedded) {
  throw new Error(`No embedded raster logo found in ${sourceSvg}`);
}

const master = await sharp(Buffer.from(embedded, "base64"))
  .ensureAlpha()
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toBuffer();

const masterMeta = await sharp(master).metadata();
const masterRaw = await sharp(master).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

/* ------------------------------------------------------------------ */
/* 2. Split the stacked master into symbol (mark) and wordmark         */
/* ------------------------------------------------------------------ */

function findBlocks({ data, info }) {
  const { width: w, height: h } = info;
  const rows = new Array(h).fill(false);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 8) {
        rows[y] = true;
        break;
      }
    }
  }

  const raw = [];
  let start = -1;
  for (let y = 0; y < h; y++) {
    if (rows[y] && start < 0) start = y;
    if (!rows[y] && start >= 0) {
      raw.push([start, y - 1]);
      start = -1;
    }
  }
  if (start >= 0) raw.push([start, h - 1]);

  // merge blocks separated by tiny gaps (antialiasing artifacts)
  const merged = [];
  for (const block of raw) {
    const last = merged.at(-1);
    if (last && block[0] - last[1] <= 12) last[1] = block[1];
    else merged.push([...block]);
  }

  return merged
    .filter(([y0, y1]) => y1 - y0 + 1 >= h * 0.02)
    .map(([y0, y1]) => {
      let x0 = w;
      let x1 = -1;
      for (let x = 0; x < w; x++) {
        for (let y = y0; y <= y1; y++) {
          if (data[(y * w + x) * 4 + 3] > 8) {
            if (x < x0) x0 = x;
            if (x > x1) x1 = x;
            break;
          }
        }
      }
      return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
    });
}

const blocks = findBlocks(masterRaw);
if (blocks.length < 2) {
  throw new Error("Could not split the logo into symbol and wordmark");
}

const [markBlock, wordmarkBlock] = blocks;

const mark = await sharp(master).extract(markBlock).png({ compressionLevel: 9 }).toBuffer();
const wordmark = await sharp(master).extract(wordmarkBlock).png({ compressionLevel: 9 }).toBuffer();

const markSize = await sharp(mark).metadata();
const wordmarkSize = await sharp(wordmark).metadata();

/* ------------------------------------------------------------------ */
/* 3. Helpers                                                          */
/* ------------------------------------------------------------------ */

async function writePng(input, width, file) {
  const buffer = await sharp(input)
    .resize({ width, kernel: "lanczos3", withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  fs.writeFileSync(path.join(brandDir, file), buffer);
  return buffer;
}

async function toWhite(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    out[i] = 255;
    out[i + 1] = 255;
    out[i + 2] = 255;
    out[i + 3] = data[i + 3];
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function svgFromPng(png, width, height, label) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}">
  <title>${label}</title>
  <image width="${width}" height="${height}" href="data:image/png;base64,${png.toString("base64")}"/>
</svg>
`;
}

/**
 * Fits the (wide) mark inside a square canvas.
 * `padding` is the share of the canvas kept empty on each side.
 */
async function squareIcon(source, size, { padding = 0.1, background = null } = {}) {
  const innerWidth = Math.max(1, Math.round(size * (1 - padding * 2)));
  const inner = await sharp(source)
    .resize({ width: innerWidth, kernel: "lanczos3" })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: inner, gravity: "center" }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, buffer } of images) {
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size;
    entry[1] = size >= 256 ? 0 : size;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.buffer)]);
}

/* ------------------------------------------------------------------ */
/* 4. Logos                                                            */
/* ------------------------------------------------------------------ */

const fullHeight = Math.round((LOGO_WIDTH * masterMeta.height) / masterMeta.width);
const fullPng = await writePng(master, LOGO_WIDTH, "ativar-logo.png");
fs.writeFileSync(path.join(brandDir, "ativar-logo.svg"), svgFromPng(fullPng, LOGO_WIDTH, fullHeight, "ATIVAR logo"));

const fullWhite = await toWhite(master);
await writePng(fullWhite, LOGO_WIDTH, "ativar-logo-white.png");

const markHeight = Math.round((MARK_WIDTH * markSize.height) / markSize.width);
const markPng = await writePng(mark, MARK_WIDTH, "ativar-mark.png");
fs.writeFileSync(path.join(brandDir, "ativar-mark.svg"), svgFromPng(markPng, MARK_WIDTH, markHeight, "ATIVAR symbol"));

const markWhite = await toWhite(mark);
await writePng(markWhite, MARK_WIDTH, "ativar-mark-white.png");

const wordmarkHeight = Math.round((WORDMARK_WIDTH * wordmarkSize.height) / wordmarkSize.width);
const wordmarkPng = await writePng(wordmark, WORDMARK_WIDTH, "ativar-wordmark.png");
fs.writeFileSync(
  path.join(brandDir, "ativar-wordmark.svg"),
  svgFromPng(wordmarkPng, WORDMARK_WIDTH, wordmarkHeight, "ATIVAR wordmark"),
);

/* ------------------------------------------------------------------ */
/* 5. Favicons and app icons                                           */
/* ------------------------------------------------------------------ */

const allIcons = new Map();
for (const size of [16, 32, 48, 96, 128, 192, 256, 384, 512]) {
  allIcons.set(size, await squareIcon(mark, size, { padding: 0.1 }));
}

const faviconNames = { 16: "favicon-16.png", 32: "favicon-32.png", 48: "favicon-48.png" };
for (const [size, name] of Object.entries(faviconNames)) {
  fs.writeFileSync(path.join(brandDir, name), allIcons.get(Number(size)));
}

for (const size of [96, 128, 192, 256, 384, 512]) {
  fs.writeFileSync(path.join(brandDir, `icon-${size}.png`), allIcons.get(size));
}

// Apple touch icon: iOS does not support transparency, so use a white tile.
fs.writeFileSync(
  path.join(brandDir, "apple-touch-icon.png"),
  await squareIcon(mark, 180, { padding: 0.08, background: { r: 255, g: 255, b: 255, alpha: 1 } }),
);

// Maskable icon: keep the mark inside the 80% safe zone on a white background.
fs.writeFileSync(
  path.join(brandDir, "icon-maskable-512.png"),
  await squareIcon(mark, 512, { padding: 0.16, background: { r: 255, g: 255, b: 255, alpha: 1 } }),
);

const ico = buildIco(
  [16, 32, 48].map((size) => ({ size, buffer: allIcons.get(size) })),
);
fs.writeFileSync(path.join(brandDir, "favicon.ico"), ico);
// Browsers still request /favicon.ico directly when no icon is declared.
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

/* ------------------------------------------------------------------ */
/* 6. Report                                                           */
/* ------------------------------------------------------------------ */

const files = fs.readdirSync(brandDir).sort();
console.log(`master trimmed: ${masterMeta.width}x${masterMeta.height}`);
console.log(`mark: ${markSize.width}x${markSize.height}`);
console.log(`wordmark: ${wordmarkSize.width}x${wordmarkSize.height}`);
console.log("written:");
for (const file of files) {
  const { size } = fs.statSync(path.join(brandDir, file));
  console.log(`  public/brand/${file}  ${(size / 1024).toFixed(1)} KB`);
}
