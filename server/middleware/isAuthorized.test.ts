import factory from "../factory";
import type { User } from "../services/members.test";

const cache = new Map<string, string>();
const db = new Set<User>();

export default factory.createMiddleware(async (c, next) => {
  const { authorization } = c.req.header();

  if (!authorization)
    return c.json({ message: "Unauthorized" }, 401);

  const [tokenType, token] = authorization?.split(" ");

  if (!tokenType || !token || tokenType.toLowerCase() !== "bearer" || token !== "test_user_token")
    return c.json({ message: "Unauthorized" }, 401);

  const test_user_id = await get_user_id("test_user_pricipal", "Test User", "test_user@domain.tld");

  c.set("user_id", test_user_id);

  await next();
});

const get_user_id = async (
  principalId: string,
  name: string,
  email: string
): Promise<string> => {
  // Check if the user ID is stored in the memory cache
  if (cache.has(principalId)) return String(cache.get(principalId));

  // Check if the user ID is stored in the database
  const user = Array.from(db).find((user) => user.principalId === principalId);

  // If the user is found in the database, store the ID in the memory cache
  if (user) {
    cache.set(principalId, user.id);
    return user.id;
  }



  // Create a new user in the database
  const new_user = {
    id: `user-${db.size + 1}`,
    principalId,
    name,
    email,
  };

  db.add(new_user);

  // Store the new user ID in the memory cache
  cache.set(principalId, new_user.id);

  // Return the user ID
  return new_user.id;
};