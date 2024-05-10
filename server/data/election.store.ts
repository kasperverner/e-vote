import { db } from "@/prisma/db.injector";
import type { Proposition } from "./proposition.store";

export type Election = {
  id: string;
  team_id: string;
  name: string;
  description: string | null;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
  start_at: Date;
  end_at: Date;
  validation_id: string | null;
  propositions?: Proposition[];
};

export type ElectionStore = {
  isEligibleToEditElection: (
    user_id: string,
    election_id: string
  ) => Promise<Election | null>;
  create: (
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null
  ) => Promise<Election>;
  findFirst: (team_id: string, election_id: string) => Promise<Election | null>;
  findMany: (team_id: string) => Promise<Election[]>;
  update: (
    election_id: string,
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null
  ) => Promise<Election | null>;
  delete: (election_id: string) => Promise<Election | null>;
  start: (election_id: string) => Promise<Election | null>;
  end: (election_id: string) => Promise<Election | null>;
};

const electionStore: ElectionStore = {
  isEligibleToEditElection: async (user_id: string, election_id: string) => {
    return db.elections.findFirst({
      where: {
        id: election_id,
        team: {
          members: {
            some: {
              user_id,
              is_admin: true,
            },
          },
        },
        start_at: {
          gt: new Date(),
        },
      },
    });
  },
  create: async (
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null = null
  ) => {
    return db.elections.create({
      data: {
        team_id,
        name,
        start_at,
        end_at,
        propositions: {
          create: propositions,
        },
        description,
      },
    });
  },
  findFirst: async (team_id: string, election_id: string) => {
    return db.elections.findFirst({
      where: {
        id: election_id,
        team_id,
      },
    });
  },
  findMany: async (team_id: string) => {
    return db.elections.findMany({
      where: {
        team_id,
      },
    });
  },
  update: async (
    election_id: string,
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null = null
  ) => {
    return db.elections.update({
      where: {
        id: election_id,
        team_id,
      },
      data: {
        name,
        description,
        start_at,
        end_at,
        propositions: {
          create: propositions,
        },
      },
    });
  },
  delete: async (election_id: string) => {
    return db.elections.update({
      where: {
        id: election_id,
      },
      data: {
        is_deleted: true,
      },
    });
  },
  start: async (election_id: string) => {
    return db.elections.update({
      where: {
        id: election_id,
      },
      data: {
        start_at: new Date(),
      },
    });
  },
  end: async (election_id: string) => {
    return db.elections.update({
      where: {
        id: election_id,
      },
      data: {
        end_at: new Date(),
      },
    });
  },
};

export default electionStore
