import type { PrismaClient } from "@prisma/client";

export type Environment = {
  Variables: {
    db: PrismaClient;
    user_id: string;
  };
};
