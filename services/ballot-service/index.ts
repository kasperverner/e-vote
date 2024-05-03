import { Hono } from "hono";
import { logger } from "hono/logger";
import injectDb from "@/prisma/db.injector";
import type { Environment } from "./environment";
import proofsRouter from "./routes/proofs";

const app = new Hono<Environment>();
app.use(logger(), injectDb, async (c, next) => {
  if (!process.env.PROOF_SECRET)
    throw new Error("PROOF_SECRET is required in the environment");

  c.set("secret", String(process.env.PROOF_SECRET));
  await next();
});

const ballotApiRoutes = app
  .basePath("/api")
  .route("/proofs", proofsRouter);

export type BallotApiRoutes = typeof ballotApiRoutes;

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
