import type { PrismaClient } from "@prisma/client";

export type Environment = {
  Variables: {
    db: PrismaClient;
    secret: string;
  };
};
