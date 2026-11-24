// Monday, Reviewed in One Line — entry for the make.fun competition
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// Writes the one-line review to /output/entry.txt (or $ENTRY_OUTPUT when
// set). Node 22+ standard library only — no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "One star: Monday drilled for an hour, charged for two, and told me to floss more.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
