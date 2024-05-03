import { Hono } from "hono";
import type { Environment } from "../environment";
import hasher from "@/utilities/hasher";

const router = new Hono<Environment>()
  // generate a proof
  .get("/:value", async (c) => {
    const { value } = c.req.param();
    const { secret } = c.var;

    const hash = hasher(value, secret);
    return c.json({ hash });
  })
  // validate all proofs for an election
  .get("/election/:election_id", async (c) => {
    const { election_id } = c.req.param();
    const { db, secret } = c.var;

    const propositions = await db.propositions.findMany({
      where: {
        election_id,
      },
      select: {
        id: true,
      },
    });

    // If no propositions are found, return an error
    if (!propositions.length)
      return c.json({ message: `No propositions found for election with ID ${election_id}` }, 400);

    // Find all votes for the election
    const votes = await db.votes.findMany({
      where: {
        election_id,
      },
      select: {
        proposition_proof: true,
      },
    });

    // If no votes are found, return an error
    if (!votes.length)
      return c.json({ message: `No votes found for election with ID ${election_id}` }, 400);

    // Generate a list of valid proposition proofs
    const propositionProofs = propositions.map(({ id }) => hasher(id, secret));

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { proposition_proof } = votes[i];

      // If the proposition proof is not in the list of valid proofs, return an error
      if (!propositionProofs.includes(proposition_proof)) {
        return c.json({ message: `Validation failed for election with ID ${election_id}` }, 400);
      }
    }

    // If all votes are valid, return a success message
    return c.json({ message: `Validation passed for election with ID ${election_id}` });
  });


export default router;