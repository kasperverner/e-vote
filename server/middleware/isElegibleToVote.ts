import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { election_id } = c.req.param();
  const { user_id } = c.var;

  const ballot = await c.var.db.ballots.findFirst({
    where: {
      user_id,
      is_used: true,
      election_id,
    },
  });

  if (ballot)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});