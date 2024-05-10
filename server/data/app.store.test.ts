import { createMiddleware } from "hono/factory";
import { mock } from "bun:test";
import type { Environment } from "../environment";
import type { AppStore } from "./app.store";
import ballotStore from "./ballot.store.test";
import electionStore from "./election.store.test";
import initiationStore from "./invitation.store.test";
import memberStore from "./member.store.test";
import teamStore from "./team.store.test";
import userStore from "./user.store.test";
import validationStore from "./validation.store.test";
import voteStore from "./vote.store.test";

export const appStore = mock<() => AppStore>(() => ({
  ballots: ballotStore,
  elections: electionStore,
  invitations: initiationStore,
  members: memberStore,
  teams: teamStore,
  users: userStore,
  validations: validationStore,
  votes: voteStore,
}));

export default createMiddleware<Environment>(async (c, next) => {
  c.set("data", appStore());
  await next();
});
