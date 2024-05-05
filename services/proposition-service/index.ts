import { Hono } from "hono";
import { logger } from "hono/logger";
import injectDb from "../../prisma/db.injector";
import type { Environment } from "./environment";
import proofsRouter from "./routes/proofs";
import resultsRouter from "./routes/results";

const app = new Hono<Environment>();
app.use(logger(), injectDb, async (c, next) => {
  if (!process.env.PROPOSITION_PROOF_SECRET)
    throw new Error("PROPOSITION_PROOF_SECRET is required in the environment");

  c.set("secret", String(process.env.PROPOSITION_PROOF_SECRET));
  await next();
});

const propositionApiRoutes = app
  .basePath("/api")
  .route("/proofs", proofsRouter)
  .route("/results", resultsRouter);

export type PropositionApiRoutes = typeof propositionApiRoutes;

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
