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

  // Find all used ballots for the election
  const ballots = await db.ballots.findMany({
    where: {
      election_id,
      is_used: true,
    },
    select: {
      id: true,
    },
  });

  // If no ballots are found, return no content
  if (!ballots.length) return c.body(null, 204);

  // Find all votes for the election
  const votes = await db.votes.findMany({
    where: {
      election_id,
    },
    select: {
      ballot_proof: true,
    },
  });

  // If no votes are found, return no content
  if (!votes.length) return c.body(null, 204);

  // To save iterations, we can check if the number of votes is equal to the number of ballots
  // If the number of votes does not match the number of ballots, return an error
  if (votes.length !== ballots.length)
    return c.text(`Validation failed for election with ID ${election_id}`, 400);

  // Generate a list of valid ballot proofs
  const ballotProofs = ballots.map(({ id }) => hasher(id, secret));

  // Validate each vote
  for (let i = 0; i < votes.length; i++) {
    const { ballot_proof } = votes[i];

    // If the ballot proof is not in the list of valid proofs, return an error
    if (!ballotProofs.includes(ballot_proof)) {
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