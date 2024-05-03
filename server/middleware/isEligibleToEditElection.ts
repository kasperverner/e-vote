import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { election_id } = c.req.param();
  const { user_id } = c.var;

  var election = await c.var.db.elections.findFirst({
    where: {
      id: election_id,
      team: {
        members: {
          some: {
            user_id,
            is_admin: true,
          },
        },
      },
      start_at: {
        gt: new Date(),
      },
    },
  });

  if (!election) return c.json({ message: "Forbidden" }, 403);

  await next();
});
