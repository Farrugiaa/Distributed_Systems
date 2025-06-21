import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";
const lab2 = new Hono();

lab2.get("/lab2/log", async (c: Context) => {
  const command = new Deno.Command("git", {
    args: ["log", "--oneline"],
    stdout: "piped",
    stderr: "piped",
  });
  const { stdout } = await command.output();
  const text = new TextDecoder().decode(stdout);
  return c.text(text);
});

export default lab2;
