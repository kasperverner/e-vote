import { PrismaClient } from "@prisma/client";
import { createMiddleware } from "hono/factory";
import type { Environment } from "../server/environment";

const db = new PrismaClient();

export default createMiddleware<Environment>(async (c, next) => {
  c.set("db", db);
  await next();
});
