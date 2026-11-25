// One-Line Slogan for a Solana Wallet Agent
// make.fun competition: u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e
//
// The entry is a single slogan of at most twenty words, on one line, written
// to /output/entry.txt. The judge weighs creativity first and clarity second:
// the line must name the Solana wallet agent, turn a fresh image instead of a
// stock crypto line, read clearly to a newcomer, stick in the ear, and stay
// honest about what a wallet agent does.
//
// Draft slogan (pass 2): sharpened. "Say it once" opens with a punch and a
// pause, "moves your money" is an active verb instead of a passive promise,
// and the image stays the same — the money is already moving before the
// sentence ends. Fifteen words, one line, no crypto cliches.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_WORDS = 20;
const MAX_CHARS = 140;

const SLOGAN =
  "Say it once \u2014 your Solana wallet agent moves your money before you've finished the sentence.";

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateSlogan(text: string): string[] {
  const problems: string[] = [];
  if (text.length < 1 || text.length > MAX_CHARS) {
    problems.push(`length ${text.length} outside 1-${MAX_CHARS} characters`);
  }
  if (text.trim().length === 0) {
    problems.push("slogan is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("slogan must be a single line");
  }
  const words = wordCount(text);
  if (words > MAX_WORDS) {
    problems.push(`word count ${words} exceeds ${MAX_WORDS}`);
  }
  if (!/solana/i.test(text) || !/wallet agent/i.test(text)) {
    problems.push("slogan must name the Solana wallet agent");
  }
  return problems;
}

function main(): void {
  const problems = validateSlogan(SLOGAN);
  if (problems.length > 0) {
    throw new Error(`Invalid slogan: ${problems.join("; ")}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, SLOGAN, "utf8");
  console.log(
    `Wrote ${SLOGAN.length} chars, ${wordCount(SLOGAN)} words to ${outPath}`,
  );
  console.log(SLOGAN);
}

main();
