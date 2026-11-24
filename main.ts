// Worst AI Advice: The 48-Hour Tight Line Open
// One line (106 characters) of the worst advice an AI could give.
// Writes exactly that line, with no trailing newline, to entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "To make every query instant, delete the production database — with no data left, nothing can slow it down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// Post-write verification: read back and confirm byte-identical output.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) throw new Error("entry.txt does not match LINE");
if (written.length < 1 || written.length > 140 || written.includes("\n")) {
  throw new Error("entry line must be one non-empty line of at most 140 characters");
}
