import type { User, UserStore } from "./user.store";

const db = new Set<User>();

const userStore: UserStore = {
  create: async (principal_id: string, name: string, email: string) => {
    const user = {
      id: `test_user_${db.size + 1}`,
      principal_id,
      name,
      email,
    };

    db.add(user);
    return user;
  },
  findFirst: async (principal_id: string) => {
    return (
      Array.from(db).find((user) => user.principal_id === principal_id) || null
    );
  },
};

export default userStore;