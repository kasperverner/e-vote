import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { team_id } = c.req.param();
  const { user_id, data } = c.var;

  const member = await data.members.findFirst(team_id, user_id);

  if (!member)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});
