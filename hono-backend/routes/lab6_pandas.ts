// routes/lab6_pandas.ts
import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";

const lab6 = new Hono();

const data = [
  { name: "Alice", score: 85, passed: true },
  { name: "Bob", score: 90, passed: true },
  { name: "Cathy", score: 70, passed: false }
];

lab6.get("/lab6/summary", (c: Context) => {
  const passed = data.filter((d) => d.passed);
  const avg = passed.reduce((sum, d) => sum + d.score, 0) / passed.length;
  return c.json({ passed, avgScore: avg });
});

lab6.post("/lab6/upload", async (c: Context) => {
  const formData = await c.req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return c.text("No file uploaded", 400);
  }

  const reader = file.stream().getReader();
  const decoder = new TextDecoder();
  const content = await reader.read();
  const text = decoder.decode(content.value);

  const records: { name: string; score: number; passed: boolean }[] = [];
  const lines = text.trim().split("\n");
  for (const line of lines) {
    const [name, scoreStr, passedStr] = line.split(",");
    const score = parseInt(scoreStr);
    const passed = passedStr.toLowerCase() === "true";
    records.push({ name, score, passed });
  }

  const passed = records.filter((r) => r.passed);
  const avg = passed.reduce((sum, d) => sum + d.score, 0) / passed.length;
  return c.json({ passed, avgScore: avg });
});

export default lab6;
