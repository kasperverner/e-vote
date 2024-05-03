import { hc } from "hono/client";
import type { BallotApiRoutes } from "@/services/ballot-service";

const client = hc<BallotApiRoutes>("http://e-vote-ballot-service:3000");

export default client;