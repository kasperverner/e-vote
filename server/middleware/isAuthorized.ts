import { createMiddleware } from "hono/factory";
import type { Environment } from "../environment";
import jwt, { type JwtPayload } from "jsonwebtoken";
import type { PrismaClient } from "@prisma/client/extension";

const cache = new Map<string, string>();

export default createMiddleware<Environment>(async (c, next) => {
  const { db } = c.var;
  const { authorization } = c.req.header();
  const [tokenType, token] = authorization?.split(" ");

  if (!tokenType || !token || tokenType.toLowerCase() !== "bearer")
    return c.json({ message: "Unauthorized" }, 401);

  const payload = jwt.verify(token, process.env.JWT_PUBLIC_KEY as string, {
    algorithms: ["RS256"],
    issuer: process.env.JWT_ISSUER,
    ignoreExpiration: true,
  }) as JwtPayload;

  if (!payload.sub)
    return c.json({ message: "Unauthorized" }, 401);

  const user_id = await getUserId(
    String(payload.sub),
    String(payload.name ?? payload.email.split("@")[0]),
    String(payload.email),
    db);

  c.set("user_id", user_id);

  await next();
});

const getUserId = async (
  principalId: string,
  name: string,
  email: string,
  db: PrismaClient
): Promise<string> => {
  // Check if the user ID is stored in the memory cache
  if (cache.has(principalId))
    return String(cache.get(principalId));

  // Check if the user ID is stored in the database
  const user = await db.users.findFirst({
    where: {
      principal_id: principalId,
    },
  });

  // If the user is found in the database, store the ID in the memory cache
  if (user) {
    cache.set(principalId, user.id);
    return user.id;
  }

  // Create a new user in the database
  const newUser = await db.users.create({
    data: {
      principal_id: principalId,
      name,
      email,
    },
  });

  // Store the new user ID in the memory cache
  cache.set(principalId, newUser.id);

  // Return the user ID
  return newUser.id;
};