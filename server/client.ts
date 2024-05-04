import { hc } from "hono/client";
import type { ApiRoutes } from "@/server";

const client = hc<ApiRoutes>("http://localhost:4000/api");

export default client;
