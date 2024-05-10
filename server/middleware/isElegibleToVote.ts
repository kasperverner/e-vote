import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { election_id } = c.req.param();
  const { user_id, data } = c.var;

  const ballot = await data.ballots.findFirst(user_id, election_id);

  if (ballot)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});