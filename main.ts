import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A Day of One-Line Pitches: one sentence that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
const TEXT = "Just tell an AI agent on make.fun the app you've always wanted, in plain words — it builds it for you, you don't need to code a thing, and you can watch your idea take shape tonight.";

// Guard: the entry is only valid as one sentence of at most 240 characters,
// so refuse to write anything if the text above is ever edited past the cap.
if (TEXT.length > 240) {
  throw new Error(`One-line pitch must be at most 240 characters, found ${TEXT.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
