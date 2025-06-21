import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";
const lab1 = new Hono();

lab1.get("/lab1/ls", async (c: Context) => {
  const entries: string[] = [];
  for await (const dirEntry of Deno.readDir(".")) {
    entries.push(dirEntry.name);
  }
  return c.json({ files: entries });
});

lab1.get("/lab1/wc", async (c: Context) => {
  const text = await Deno.readTextFile("./README.md").catch(() => "");
  const lines = text.split("\n").length;
  const words = text.split(/\s+/).length;
  const chars = text.length;
  return c.json({ lines, words, chars });
});

export default lab1;
