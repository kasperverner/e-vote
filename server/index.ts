import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import type { Environment } from "./environment";
import electionsRouter from "./routes/elections";
import membersRouter from "./routes/members";
import teamsRouter from "./routes/teams";
import configureElectionValidationJob from "./cronjobs/configureElectionValidationJob";

const app = new Hono<Environment>();
app.use(logger());

app
  .basePath("/api")
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

app.get(
  "*",
  serveStatic({
    root: "./server/frontend/dist",
  })
);

app.get(
  "*",
  serveStatic({
    path: "./server/frontend/dist/index.html",
  })
);

configureElectionValidationJob();

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
