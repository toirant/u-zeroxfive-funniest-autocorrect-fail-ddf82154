// Funniest Autocorrect Fail — make.fun entry
// Writes one single-line autocorrect fail (1-199 chars) to /output/entry.txt.
//
// The entry: a text to the boss where "minutes" autocorrects to "minions".
// The slip is clear, surprising, and specific, and the line reads like a
// real message that went out wrong rather than a written joke.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I texted my boss 'I'll be there in 10 minutes' but autocorrect sent 'I'll be there in 10 minions' — now the whole office thinks I'm bringing backup.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Validate the entry before writing anything, the way the sealed gate
// will check it: UTF-8 text, 1-199 characters, a single line, and not
// only whitespace. Count code points, not bytes, so the em dash counts
// as one character just as the gate counts it.
function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry is ${chars} chars, must be 1-199`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

// Create /output if needed. Never remove it: the grader mounts it and
// runs this program as an unprivileged user, so deleting it fails.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

// Read-back round-trip check: what landed on disk must be exactly the
// entry we validated, byte for byte.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
if ([...written].length !== [...ENTRY].length) {
  throw new Error("read-back mismatch: character count changed on disk");
}

console.log(`Wrote ${[...ENTRY].length} chars to ${OUTPUT_FILE}`);
