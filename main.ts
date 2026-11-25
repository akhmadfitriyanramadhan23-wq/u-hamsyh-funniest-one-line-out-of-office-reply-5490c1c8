import { mkdirSync, writeFileSync } from "node:fs";

// A one-line out-of-office auto-reply that still reads like a message
// a real person would switch on, following the winning joke template:
// rule -> literal violation -> flat consequence. The handover goes to
// Gerald the houseplant, who does the job too well in three escalating
// beats — replied-all, booked a meeting about the email, asked for a
// raise — and the reply ends on that last consequence with no
// explanation afterwards.
const lines = [
  "I'm away until Monday. Your email went to Gerald, my houseplant, who has already replied-all, booked a meeting about it, and asked for a raise.",
];

const text = lines.join("\n") + "\n";

// Guard: exactly one line, a plausible auto-reply length (1-200 chars).
const body = lines.join("\n");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
