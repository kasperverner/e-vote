import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";

export default createMiddleware<Environment>(async (c, next) => {
  const { team_id, election_id } = c.req.param();
  const { user_id, data } = c.var;

  const election = await data.elections.findFirst(team_id, election_id);

  if (!election || election.start_at > new Date())
    return c.json({ message: "Forbidden" }, 403);

  const member = await data.members.findFirst(team_id, user_id);

  if (!member || !member.is_admin)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});
