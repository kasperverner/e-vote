import type { Team, TeamStore } from "./team.store";

const db = new Set<Team>();

const teamStore: TeamStore = {
  create: async (name: string) => {
    const team = {
      id: `test_team_${db.size + 1}`,
      name,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
    };

    db.add(team);
    return team;
  },
  findFirst: async (team_id: string) => {
    return Array.from(db).find((team) => team.id === team_id && !team.is_deleted) || null;
  },
  findMany: async () => {
    return Array.from(db).filter((team) => !team.is_deleted);
  },
  update: async (team_id: string, name: string) => {
    const team = Array.from(db).find((team) => team.id === team_id && !team.is_deleted);
    if (!team) {
      return null;
    }

    team.name = name;
    team.updated_at = new Date();
    return team;
  },
  delete: async (team_id: string) => {
    const team = Array.from(db).find((team) => team.id === team_id && !team.is_deleted);
    if (!team) {
      return null;
    }

    team.is_deleted = true;
    team.updated_at = new Date();
    return team;
  },
};

export default teamStore;
