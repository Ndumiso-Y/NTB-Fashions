import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

// Vercel's Nitro preset already emits the Build Output API structure under
// .vercel/output. The adapter below is only needed by OpenAI Sites.
if (process.env.VERCEL) {
  process.exit(0);
}

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = resolve(projectRoot, ".output");
const distRoot = resolve(projectRoot, "dist");

await rm(distRoot, { recursive: true, force: true });
await mkdir(resolve(distRoot, "server"), { recursive: true });
await mkdir(resolve(distRoot, "client"), { recursive: true });
await mkdir(resolve(distRoot, ".openai"), { recursive: true });

await cp(resolve(outputRoot, "server"), resolve(distRoot, "server"), {
  recursive: true,
});
await cp(resolve(outputRoot, "public"), resolve(distRoot, "client"), {
  recursive: true,
});

const serverEntry = await readFile(resolve(outputRoot, "server", "index.mjs"));
await writeFile(resolve(distRoot, "server", "index.js"), serverEntry);
await cp(
  resolve(projectRoot, ".openai", "hosting.json"),
  resolve(distRoot, ".openai", "hosting.json"),
);
