// SPDX-License-Identifier: MIT
// Remake entry for "The Excuse That Almost Works" (make.fun).
//
// One job: put a single hurried excuse line into
// $MAKEFUN_OUTPUT_DIR/entry.txt, then prove the file on disk holds
// exactly those bytes. Node standard library only, no randomness,
// no clock, no network — every run writes the identical file.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Bedbug treatment day: every soft thing in the flat has to be
// washed and sealed in bags beforehand, and nobody may go back
// inside for hours afterwards. Dull, procedural, impossible to
// shift — and short enough to look typed one-handed on the stairs.
// Ten words, seventy-seven characters, full stop at the end. The
// excuse works because it is boring: nobody argues with a pest
// control booking, and nobody asks to come in and see the bags.
const LINE =
  "Sorry, bedbug treatment today, everything's bagged, flat's off-limits till 6.";

// Mirror of the sealed gate plus the task's own limits, collected
// as a list so a bad line reports every problem at once instead of
// stopping at the first one.
function gateProblems(text: string): string[] {
  const problems: string[] = [];
  const length = [...text].length;
  if (length < 1 || length > 140) {
    problems.push(`length ${length} outside 1-140 characters`);
  }
  if (text.trim() === "") {
    problems.push("nothing but whitespace");
  }
  if (/[\r\n]/.test(text)) {
    problems.push("more than one line");
  }
  if (text !== text.trim()) {
    problems.push("space at the start or the end");
  }
  if (text.includes("  ")) {
    problems.push("double space inside the line");
  }
  if (!/^[\x20-\x7E]+$/.test(text)) {
    problems.push("non-ASCII character present");
  }
  if (!text.endsWith(".")) {
    problems.push("does not end with a full stop");
  }
  const wordCount = text.trim().split(/\s+/).length;
  if (wordCount > 20) {
    problems.push(`${wordCount} words, over the 20-word limit`);
  }
  return problems;
}

function emit(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    console.error("MAKEFUN_OUTPUT_DIR is not set");
    process.exit(1);
  }
  const problems = gateProblems(LINE);
  if (problems.length > 0) {
    for (const p of problems) console.error(`gate: ${p}`);
    process.exit(1);
  }
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, LINE, "utf8");
  const onDisk = readFileSync(target, "utf8");
  if (onDisk !== LINE) {
    console.error("read-back does not match the line");
    process.exit(1);
  }
  const digest = createHash("sha256").update(onDisk, "utf8").digest("hex");
  const words = onDisk.trim().split(/\s+/).length;
  console.log(
    `entry.txt ok: ${[...onDisk].length} chars, ${words} words, sha256 ${digest}`,
  );
}

emit();
