import type { Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";

export const loggerMiddleware = async (c: Context, next: () => Promise<void>) => {
  console.log(`[${new Date().toISOString()}] ${c.req.method} ${c.req.url}`);
  await next();
};
