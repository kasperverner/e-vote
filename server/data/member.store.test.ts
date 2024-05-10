import type { Member, MemberStore } from "./member.store";

const db = new Set<Member>();

const invitationStore: MemberStore = {
  create: async (team_id: string, user_id: string, is_admin: boolean) => {
    const member = {
      id: `test_member_${db.size + 1}`,
      team_id,
      user_id,
      is_admin,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
    };

    db.add(member);
    return member;
  },
  findById: async (member_id: string) => {
    return (
      Array.from(db).find(
        (member) => member.id === member_id && !member.is_deleted
      ) || null
    );
  },
  findFirst: async (team_id: string, user_id: string) => {
    return (
      Array.from(db).find(
        (member) =>
          member.team_id === team_id &&
          member.user_id === user_id &&
          !member.is_deleted
      ) || null
    );
  },
  findMany: async (team_id: string) => {
    return Array.from(db).filter(
      (member) => member.team_id === team_id && !member.is_deleted
    );
  },
  update: async (member_id: string, user_id: string, is_admin: boolean) => {
    const member = Array.from(db).find(
      (member) => member.id === member_id && !member.is_deleted
    );

    if (!member) {
      return null;
    }

    member.user_id = user_id;
    member.is_admin = is_admin;
    member.updated_at = new Date();

    return member;
  },
  delete: async (member_id: string) => {
    const member = Array.from(db).find(
      (member) => member.id === member_id && !member.is_deleted
    );

    if (!member) {
      return null;
    }

    member.is_deleted = true;
    member.updated_at = new Date();

    return member;
  },
};

export default invitationStore;
