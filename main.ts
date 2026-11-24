// The Houseplant Out-of-Office
// Competition: u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one houseplant OOO line to <MAKEFUN_OUTPUT_DIR>/entry.txt. Cap: 120.
// Draft v1: fern ignoring sun, water and emails since March.
// Revise next to land the autumn punch within 114-120 chars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const SETUP = "Out of office — Fern. Ignoring sun, water and emails since March.";
const PUNCHLINE = "Leave a message by the window; I'll answer by autumn.";
const LINE = `${SETUP} ${PUNCHLINE}`;
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: 1-120 chars required, got ${LINE.length}.`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
