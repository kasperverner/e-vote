import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import type { Environment } from "./environment";
import electionsRouter from "./routes/elections";
import membersRouter from "./routes/members";
import teamsRouter from "./routes/teams";
import configureElectionValidationJob from "./cronjobs/configureElectionValidationJob";
import injectStore from "./data/app.store"
import isAuthorized from "./middleware/isAuthorized";

/**
 * The Hono application for the server.
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const app = new Hono<Environment>();
// Add the logger middleware to the application
app.use(logger());

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

// Serve the OpenAPI spec
app.get(
  "/openapi",
  serveStatic({
    path: "./server/openapi.yml",
  })
);

// Serve the Swagger UI
app.get(
  "/docs",
  swaggerUI({
    url: "/openapi",

  })
);

app
  // Add the injectDb and isAuthorized middleware to the application
  // This will inject the db and user_id into the context
  .use(injectStore, isAuthorized)
  // Set the base path for the API
  .basePath("/api")
  // Add the routers for the teams, elections, and members endpoints
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

// Configure the election validation job
configureElectionValidationJob();

export default app;
