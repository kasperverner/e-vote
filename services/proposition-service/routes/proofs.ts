import { Hono } from "hono";
import type { Environment } from "../environment";
import hasher from "../../../utilities/hasher";

/**
 * The router for the proof endpoint.
 * @param {Environment} c The Hono context with the db and secret injected
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>();

// generate a proof
router.get("/:value", async (c) => {
  const { value } = c.req.param();
  const { secret } = c.var;

  // Generate a hash using the value and secret
  const hash = hasher(value, secret);

  // Return the hash as a JSON response
  return c.json({ hash });
})

// validate all proofs for an election
router.get("/election/:election_id", async (c) => {
  const { election_id } = c.req.param();
  const { db, secret } = c.var;

  // Find all propositions for the election
  const propositions = await db.propositions.findMany({
    where: {
      election_id,
    },
    select: {
      id: true,
    },
  });

  // If no propositions are found, return no content
  if (!propositions.length) return c.body(null, 204);

  // Find all votes for the election
  const votes = await db.votes.findMany({
    where: {
      election_id,
    },
    select: {
      proposition_proof: true,
    },
  });

  // If no votes are found, return no content
  if (!votes.length) return c.body(null, 204);

  // Generate a list of valid proposition proofs
  const propositionProofs = propositions.map(({ id }) => hasher(id, secret));

  // Validate each vote
  for (let i = 0; i < votes.length; i++) {
    const { proposition_proof } = votes[i];

    // If the proposition proof is not in the list of valid proofs, return an error
    if (!propositionProofs.includes(proposition_proof)) {
      return c.text(
        `Validation failed for election with ID ${election_id}`,
        400
      );
    }
  }

  // If all votes are valid, return no content
  return c.body(null, 204);
});

export default router;