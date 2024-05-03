import { hc } from "hono/client";
import type { PropositionApiRoutes } from "@/services/proposition-service";

const client = hc<PropositionApiRoutes>("http://e-vote-proposition-service:3000");

export default client;
