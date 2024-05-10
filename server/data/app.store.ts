import { createMiddleware } from "hono/factory";
import ballotStore, { type BallotStore } from "./ballot.store";
import electionStore, { type ElectionStore } from "./election.store";
import invitationStore, { type InvitationStore } from "./invitation.store";
import memberStore, { type MemberStore } from "./member.store";
import teamStore, { type TeamStore } from "./team.store";
import userStore, { type UserStore } from "./user.store";
import validationStore, { type ValidationStore } from "./validation.store";
import voteStore, { type VoteStore } from "./vote.store";
import type { Environment } from "../environment";

export type AppStore = {
  ballots: BallotStore;
  elections: ElectionStore;
  invitations: InvitationStore;
  members: MemberStore;
  teams: TeamStore;
  users: UserStore;
  validations: ValidationStore;
  votes: VoteStore;
};

const appStore: AppStore = {
  ballots: ballotStore,
  elections: electionStore,
  invitations: invitationStore,
  members: memberStore,
  teams: teamStore,
  users: userStore,
  validations: validationStore,
  votes: voteStore,
};

export default createMiddleware<Environment>(async (c, next) => {
  c.set("data", appStore);
  await next();
});
