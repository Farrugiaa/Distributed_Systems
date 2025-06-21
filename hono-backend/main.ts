import { Hono } from "hono";
import { loggerMiddleware } from "./middleware/logger.ts";
import lab1Routes from "./routes/lab1_unix.ts";
import lab2Routes from "./routes/lab2_git.ts";
import lab3Routes from "./routes/lab3_docker.ts";
import lab4Routes from "./routes/lab4_python.ts";
import lab5Routes from "./routes/lab5_sql.ts";
import lab6Routes from "./routes/lab6_pandas.ts";

const app = new Hono();

app.use("*", loggerMiddleware);

app.route("/api", lab1Routes);
app.route("/api", lab2Routes);
app.route("/api", lab3Routes);
app.route("/api", lab4Routes);
app.route("/api", lab5Routes);
app.route("/api", lab6Routes);

app.get("/", (c) => c.text("🎉 Hono backend for HSE Labs"));
app.get("*", (c) => c.text("🚫 Route not found", 404));

console.log("🚀 Server running at http://localhost:8000");
Deno.serve(app.fetch);
