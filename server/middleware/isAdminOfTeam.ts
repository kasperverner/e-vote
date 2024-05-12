import { db } from "@/prisma/db.injector";
import factory from "../factory";

export default factory.createMiddleware(async (c, next) => {
  const { team_id } = c.req.param();
  const { user_id } = c.var;

    const member = await db.teamMembers.findFirst({
      where: {
        team_id,
        user_id,
        is_deleted: {
          not: true,
        },
        is_admin: true,
      },
    }).finally(() => db.$disconnect());

  if (!member || !member.is_admin)
    return c.json({ message: "Forbidden" }, 403);

  await next();
});
