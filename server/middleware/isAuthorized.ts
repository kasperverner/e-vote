import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  // Get bearer token from request headers
  // validate the clerk token
  // get the user_id from the token
  // set the user_id in the context

  c.set("user_id", "1234");

  // if the user is not authorized, return c.status(401).json({ message: "Unauthorized" });

  await next();
});