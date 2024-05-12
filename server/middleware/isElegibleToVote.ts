import { db } from "../../prisma/db.injector";
import factory from "../factory";

export default factory.createMiddleware(async (c, next) => {
  const { election_id } = c.req.param();
  const { user_id } = c.var;

  const ballot = await db.ballots
    .findFirst({
      where: {
        user_id,
        is_used: true,
        election_id,
      },
    })
    .finally(() => db.$disconnect());

  if (ballot)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});