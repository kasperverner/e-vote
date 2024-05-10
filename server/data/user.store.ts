import { db } from "@/prisma/db.injector";

export type User = {
  id: string;
  principal_id: string;
  name: string;
  email: string;
};

export type UserStore = {
  create: (principal_id: string, name: string, email: string) => Promise<User>;
  findFirst: (principal_id: string) => Promise<User | null>;
};

const userStore: UserStore = {
  create: async (principal_id: string, name: string, email: string) => {
    return db.users.create({
      data: {
        principal_id,
        name,
        email,
      },
    });
  },
  findFirst: async (principal_id: string) => {
    return db.users.findFirst({
      where: {
        principal_id,
      },
    });
  },
};

export default userStore;