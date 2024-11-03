import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
