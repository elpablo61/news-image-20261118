import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261118: copy the front-page image the repo holds to the
// output directory (MAKEFUN_OUTPUT_DIR, default /output).
const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "assets", "entry.png");

if (!existsSync(src)) {
  throw new Error(`missing source image: ${src}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "entry.png");
copyFileSync(src, out);
console.log(`wrote ${out} (${statSync(out).size} bytes)`);
