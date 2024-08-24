import type { Config } from "drizzle-kit";

export default {
  schema: "./app/libs/drizzle/schema.ts",
  out: "./app/libs/drizzle/migrations",
  driver: "d1-http",
  dialect: "sqlite",
} satisfies Config;
