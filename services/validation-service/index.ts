import { Hono } from "hono";
import { logger } from "hono/logger";
import injectDb from "@/prisma/db.injector";
import type { Environment } from "./environment";
import proofsRouter from "./routes/proofs";

const app = new Hono<Environment>();
app.use(logger(), injectDb, async (c, next) => {
  c.set("secret", String(process.env.PROOF_SECRET));
  await next();
});

const validationApiRoutes = app
  .basePath("/api")
  .route("/proofs", proofsRouter);

export type ValidationApiRoutes = typeof validationApiRoutes;

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
