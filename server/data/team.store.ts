import { db } from "@/prisma/db.injector";

export type Team = {
  id: string;
  name: string;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
};

export type TeamStore = {
  create: (name: string) => Promise<Team>;
  findFirst: (team_id: string) => Promise<Team | null>;
  findMany: () => Promise<Team[]>;
  update: (team_id: string, name: string) => Promise<Team | null>;
  delete: (team_id: string) => Promise<Team | null>;
};

const teamStore: TeamStore = {
  create: async (name: string) => {
    return db.teams.create({
      data: {
        name,
      },
    });
  },
  findFirst: async (team_id: string) => {
    return db.teams.findFirst({
      where: {
        id: team_id,
      },
    });
  },
  findMany: async () => {
    return db.teams.findMany({
      where: {
        is_deleted: false,
      },
    });
  },
  update: async (team_id: string, name: string) => {
    return db.teams.update({
      where: {
        id: team_id,
      },
      data: {
        name,
      },
    });
  },
  delete: async (team_id: string) => {
    return db.teams.update({
      where: {
        id: team_id,
      },
      data: {
        is_deleted: true,
      },
    });
  },
};

export default teamStore;
