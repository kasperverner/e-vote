import factory from "../factory";
import { db } from "../../prisma/db.injector";

export default factory.createMiddleware(async (c, next) => {
  const { team_id, election_id } = c.req.param();
  const { user_id } = c.var;

  const election = await db.elections
    .findFirst({
      where: {
        id: election_id,
        team: {
          id: team_id,
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
    })
    .finally(() => db.$disconnect());

  if (!election) return c.json({ message: "Forbidden" }, 403);

  await next();
});
