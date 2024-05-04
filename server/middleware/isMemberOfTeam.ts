import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { team_id } = c.req.param();
  const { user_id } = c.var;

  const team = await c.var.db.teams.findFirst({
    where: {
      id: team_id,
      members: {
        some: {
          user_id,
          is_deleted: {
            not: true,
          },
        },
      },
    },
  });

  if (!team) return c.json({ message: "Forbidden" }, 403);

  await next();
});
