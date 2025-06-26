import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";
const lab3 = new Hono();

lab3.get("/lab3/containers", (c: Context) => {
  const containers = [
    { id: "abc123", image: "node:18", status: "running" },
    { id: "def456", image: "postgres", status: "exited" }
  ];
  return c.json({ containers });
});

export default lab3;