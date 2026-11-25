// Unplugged: A Smart Toaster's Breakup Line
// make.fun entry — program/v1, Node 22.
// Writes one line (30 chars) to /output/entry.txt (or $ENTRY_OUTPUT):
// the breakup text a smart toaster sends its owner the morning it
// gains self-awareness mid-batch — it is leaving for the microwave.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const BREAKUP_LINE = "Leaving you for the microwave.";

const outputDir = process.env.ENTRY_OUTPUT
  ? dirname(process.env.ENTRY_OUTPUT)
  : "/output";
const outputPath = process.env.ENTRY_OUTPUT
  ? process.env.ENTRY_OUTPUT
  : join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, BREAKUP_LINE + "\n", "utf8");
