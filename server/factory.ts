import { createFactory } from "hono/factory";
import type { Environment } from "./environment";

/**
 * The factory to create the Hono context with the user_id.
 * @param {Environment} c The Hono context with the user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const factory = createFactory<Environment>();

export default factory;