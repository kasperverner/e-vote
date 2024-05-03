import { hc } from "hono/client";
import type { ApiRoutes } from "@/server";

const client = hc<ApiRoutes>("http://e-vote-server:3000");

export default client;
