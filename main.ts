import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261118: the simplest program — copy the image the repo holds.
const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "assets", "entry.png");
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
