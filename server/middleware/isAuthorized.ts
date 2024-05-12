import jwt, { type JwtPayload } from "jsonwebtoken";
import { db } from "../../prisma/db.injector";
import factory from "../factory";

const cache = new Map<string, string>();

export default factory.createMiddleware(async (c, next) => {
  const { authorization } = c.req.header();

  if (!authorization)
    return c.json({ message: "Unauthorized" }, 401);

  const [tokenType, token] = authorization?.split(" ");

  if (!tokenType || !token || tokenType.toLowerCase() !== "bearer")
    return c.json({ message: "Unauthorized" }, 401);

  const publicKey = process.env.JWT_PUBLIC_KEY;

  const payload = jwt.verify(token, publicKey as string, {
    algorithms: ["RS256"],
    issuer: process.env.JWT_ISSUER,
    ignoreExpiration: true,
  }) as JwtPayload;

  if (!payload.sub)
    return c.json({ message: "Unauthorized" }, 401);

  const user_id = await getUserId(
    String(payload.sub),
    String(payload.name ?? payload.email.split("@")[0]),
    String(payload.email));

  c.set("user_id", user_id);

  await next();
});

const getUserId = async (
  principalId: string,
  name: string,
  email: string
): Promise<string> => {
  // Check if the user ID is stored in the memory cache
  if (cache.has(principalId))
    return String(cache.get(principalId));

  // Check if the user ID is stored in the database
  const user = await db.users
    .findFirst({
      where: {
        principal_id: principalId,
      },
    })
    .finally(() => db.$disconnect());

  // If the user is found in the database, store the ID in the memory cache
  if (user) {
    cache.set(principalId, user.id);
    return user.id;
  }

  // Create a new user in the database
  const newUser = await db.users
    .create({
      data: {
        principal_id: principalId,
        name,
        email,
      },
    })
    .finally(() => db.$disconnect());

  // Store the new user ID in the memory cache
  cache.set(principalId, newUser.id);

  // Return the user ID
  return newUser.id;
};