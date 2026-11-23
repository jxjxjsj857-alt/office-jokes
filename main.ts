// Office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes"
// bounty. Writes one single-line office joke (121 characters) to
// /output/entry.txt. Node 22, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a raise swapped for a pizza party, with the equity pun landing
// at the end. One line, under 200 characters.
const JOKE =
  "I asked for a raise and got a pizza party instead — now I'm the only employee with a slice of equity, and it's pepperoni.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
