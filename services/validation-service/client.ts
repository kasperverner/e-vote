import { hc } from "hono/client";
import type { ValidationApiRoutes } from "@/services/validation-service";

const client = hc<ValidationApiRoutes>("http://e-vote-validation-service:3000");

export default client;
