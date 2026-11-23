// Office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes"
// bounty. Writes one single-line office joke (121 characters) to
// /output/entry.txt. Node 22, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a raise swapped for a pizza party, with the equity pun landing
// at the end. One line, under 200 characters.
const JOKE =
  "I asked for a raise and got a pizza party instead — now I'm the only employee with a slice of equity, and it's pepperoni.";

// Length guard: the bounty requires one line of 1-199 characters.
// Fail loudly instead of writing an out-of-spec entry.
const MAX_JOKE_LENGTH = 199;
if (
  JOKE.length < 1 ||
  JOKE.length > MAX_JOKE_LENGTH ||
  /[\r\n]/.test(JOKE)
) {
  throw new Error(
    `Joke must be a single line of 1-${MAX_JOKE_LENGTH} characters, got ${JOKE.length} characters.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
