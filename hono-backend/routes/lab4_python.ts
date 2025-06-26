import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";
const lab4 = new Hono();

lab4.get("/lab4/squares", (c: Context) => {
  const nums = [1, 2, 3, 4];
  const squares = nums.map((n) => n * n);
  return c.json({ squares });
});

lab4.post("/lab4/squares", async (c: Context) => {
  const body = await c.req.json();
  const nums = body.nums ?? [];
  const squares = nums.map((n: number) => n * n);
  return c.json({ squares });
});

lab4.get("/lab4/decorator", async (c: Context) => {
  const result = await (async () => {
    const start = performance.now();
    await new Promise((r) => setTimeout(r, 500));
    const end = performance.now();
    return { result: "done", duration: (end - start).toFixed(2) + "ms" };
  })();
  return c.json(result);
});

export default lab4;