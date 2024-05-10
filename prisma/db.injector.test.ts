import { mock } from "bun:test";
import { PrismaClient } from "@prisma/client";
import { createMiddleware } from "hono/factory";
import type { Environment } from "../server/environment";

// Making a mock model that can be used to create a table
// All models have an id field that is a string
type Model = {
  id: string;
  [key: string]: any;
};

type PrismaOperator<T> = {
  equals?: T;
  contains?: T extends string ? string : never;
  gt?: T extends number ? number : never;
  gte?: T extends number ? number : never;
  lt?: T extends number ? number : never;
  lte?: T extends number ? number : never;
};

type WhereClause<T> = {
  [P in keyof T]?: T[P] extends object
    ? WhereClause<T[P]>
    : PrismaOperator<T[P]>;
};

const matches_where_clause = (item: Model, where: WhereClause<Model>): boolean => {
  return Object.keys(where).every((key) => {
    const itemValue = item[key as keyof Model];
    const condition = where[key as keyof Model];

    if (typeof condition === "object" && condition !== null) {
      if ("equals" in condition && condition.equals !== undefined) {
        return itemValue === condition.equals;
      }
      if ("contains" in condition && typeof itemValue === "string") {
        return itemValue.includes(condition.contains as string);
      }
      if ("gt" in condition && typeof itemValue === "number" && condition.gt !== undefined && typeof condition.gt === "number") {
        return itemValue > condition.gt;
      }
      if ("lt" in condition && typeof itemValue === "number" && condition.lt !== undefined && typeof condition.lt === "number") {
        return itemValue < condition.lt;
      }
      if ("gte" in condition && typeof itemValue === "number" && condition.gte !== undefined && typeof condition.gte === "number") {
        return itemValue >= condition.gte;
      }
      if ("lte" in condition && typeof itemValue === "number" && condition.lte !== undefined && typeof condition.lte === "number") {
        return itemValue <= condition.lte;
      }
    } else {
      return itemValue === condition;
    }
  });
}

// Function to create a mock table
const mock_table = (tableName: string) => {
  const table = new Set<Model>();

  return {
    create: ({ data }: { data: object }): Promise<Model> => {
      const id = `test_${tableName}_${table.size}`;
      table.add({ id, ...data });
      return Promise.resolve({ id, ...data });
    },

    delete: (id: string): Promise<Model | undefined> => {
      const item = Array.from(table).find((item) => item.id === id);
      if (item) table.delete(item);
      return Promise.resolve(item);
    },

    // TOOD: Implement the where functionality
    findFirst: ({ where }: { where: WhereClause<Model>}): Promise<Model | undefined> =>
      Promise.resolve(
        Array.from(table).find((item) => matches_where_clause(item, where)
        )
      ),

    findMany: ({ where }: { where: WhereClause<Model> | undefined}): Promise<Model[]> =>
      Promise.resolve(
        Array.from(table).filter((item) =>
          where ? matches_where_clause(item, where) : true
        )
      ),

    // TOOD: Implement the groupBy functionality
    groupBy: () => Promise.resolve([]),

    update: ({
      where,
      data,
    }: {
      where: WhereClause<Model>,
      data: object
    }): Promise<Model | undefined> => {
      const item = Array.from(table).find((item) => matches_where_clause(item, where));
      if (!item)
        return Promise.resolve(undefined);

      Object.assign(item, data);
      return Promise.resolve(item);
    },
  };
}

const mockPrisma = Object.create(PrismaClient.prototype);
for (const k in mockPrisma) {
  mockPrisma[k] = mock(() => Promise.resolve());
}

// Creating mock tables for the PrismaClient
mockPrisma.users = mock_table("users");
mockPrisma.teams = mock_table("teams");
mockPrisma.teamMembers = mock_table("teamMembers");
mockPrisma.elections = mock_table("elections");
mockPrisma.electionValidation = mock_table("electionValidation");
mockPrisma.invitations = mock_table("invitations");
mockPrisma.propositions = mock_table("propositions");
mockPrisma.ballots = mock_table("ballots");
mockPrisma.votes = mock_table("votes");

export const db = mock(() => mockPrisma as PrismaClient);

export default createMiddleware<Environment>(async (c, next) => {
  c.set("db", db());
  await next();
});
