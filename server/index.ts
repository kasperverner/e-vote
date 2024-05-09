import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import type { Environment } from "./environment";
import electionsRouter from "./routes/elections";
import membersRouter from "./routes/members";
import teamsRouter from "./routes/teams";
import configureElectionValidationJob from "./cronjobs/configureElectionValidationJob";

/**
 * The router for the teams endpoints.
 * logger middleware is used to log the request and response
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const app = new Hono<Environment>();
app.use(logger());

app
  // Set the base path for the API
  .basePath("/api")
  // Add the routers for the teams, elections, and members endpoints
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

// Serve the frontend
app.get(
  "*",
  serveStatic({
    root: "./server/frontend/dist",
  })
);

// Serve the index.html file for all unknown routes
app.get(
  "*",
  serveStatic({
    path: "./server/frontend/dist/index.html",
  })
);

// Configure the election validation job
configureElectionValidationJob();

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3000,
};
