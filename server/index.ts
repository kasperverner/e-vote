import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import electionsRouter from "./routes/elections";
import membersRouter from "./routes/members";
import teamsRouter from "./routes/teams";
import configureElectionValidationJob from "./cronjobs/configureElectionValidationJob";
import factory from "./factory";

/**
 * The Hono application for the server.
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const app = factory.createApp();
// Add the logger middleware to the application
app.use(logger());

app
  // Set the base path for the API
  .basePath("/api")
  // Add the routers for the teams, elections, and members endpoints
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

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

export default app;
