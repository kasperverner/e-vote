import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import injectDb from "@/prisma/db.injector";
import type { Environment } from "./environment";
import isAuthorized from "./middleware/isAuthorized";
import electionsRouter from "./routes/elections";
import membersRouter from "./routes/members";
import teamsRouter from "./routes/teams";

const app = new Hono<Environment>();
app.use(logger(), injectDb, isAuthorized);

const apiRoutes = app
  .basePath("/api")
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export type ApiRoutes = typeof apiRoutes;

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
