import { PrismaClient } from "@prisma/client";
import { createMiddleware } from "hono/factory";
import type { Environment } from "../server/environment";

export default createMiddleware<Environment>(async (c, next) => {
  c.set("db", new PrismaClient());
  await next();
});
