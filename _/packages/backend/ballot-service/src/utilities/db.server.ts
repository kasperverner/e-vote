import { PrismaClient } from "../../../prisma/client";

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

const db = global.__db;

export default db;