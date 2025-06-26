import { Hono, Context } from "https://deno.land/x/hono@v3.11.4/mod.ts";
const lab5 = new Hono();

interface Employee {
  id: number;
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { id: 1, name: "Alice", salary: 70000 },
  { id: 2, name: "Bob", salary: 50000 },
  { id: 3, name: "Carol", salary: 60000 }
];

lab5.get("/lab5/top", (c: Context) => {
  const top = [...employees].sort((a, b) => b.salary - a.salary).slice(0, 3);
  return c.json({ top });
});

export default lab5;