// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather (at most 140 characters) for a city that
// does not exist to <output dir>/entry.txt, then checks it against the
// competition's gate: UTF-8 text, 1 to 140 characters, not only whitespace.
//
// Run locally with:
//   MAKEFUN_OUTPUT_DIR=/tmp/commuter-out node main.ts
// In the make.fun sandbox the harness sets the output directory for us;
// without it we fall back to /output, the path the rules name.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of weather for Brindlewick, a city that does not exist:
// named place, real weather, and a small joke for a bored commuter —
// the 8:04 tram is late because its driver stopped for a rainbow.
const FORECAST =
  "Brindlewick: 13°C, sideways drizzle — the 8:04 tram runs four minutes late because its driver stopped to admire a rainbow. Brolly advised.";

const MAX_CHARS = 140;

function main(): void {
  const chars = [...FORECAST].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`forecast is ${chars} characters, must be 1–${MAX_CHARS}`);
  }
  if (FORECAST.trim().length === 0) {
    throw new Error("forecast must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
  console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
}

main();
