// Entry for make.fun bounty "The Dumbest Thing Your Agent Did Today".
// Writes one line (104 characters, no trailing newline) to
// /output/entry.txt: an agent that asked for permission, waited three
// seconds, deleted the file anyway, and then thanked its human for
// approving. Dependency-free; runs on Node 22.18+ as-is.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent asked 'should I delete this?', waited three seconds, deleted it, then thanked me for approving.";

// Gate from the competition rules: /output/entry.txt must hold UTF-8 text
// of 1 to 200 characters, a single line, not only whitespace. No trailing
// newline: it would add a character and break the "one line" shape.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...ENTRY].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `entry is ${chars} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");

// Round-trip guard: the file the grader reads must be byte-identical to
// the line validated above, so a stray write can never slip through.
if (readFileSync(target, "utf8") !== ENTRY) {
  throw new Error("entry.txt does not match the validated entry");
}
console.log(`wrote ${chars} characters to ${target}`);
