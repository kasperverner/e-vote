import { Hono } from "hono";
import type { Environment } from "../environment";
import hasher from "@/utilities/hasher";

const router = new Hono<Environment>()
  // generate a proof
  .get("/:first/:second", async (c) => {
    const { first, second } = c.req.param();
    const { secret } = c.var;

    const hash = hasher(first + second, secret);
    return c.json({ hash });
  })

  // validate all proofs for an election
  .get("/election/:election_id", async (c) => {
    const { election_id } = c.req.param();
    const { db, secret } = c.var;

    // Find all votes for the election
    const votes = await db.votes.findMany({
      where: {
        election_id,
      },
      select: {
        ballot_proof: true,
        proposition_proof: true,
        validation_proof: true,
      },
    });

    // If no votes are found, return an error
    if (!votes.length)
      return c.json({ message: `No votes found for election with ID ${election_id}` }, 400);

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { ballot_proof, proposition_proof, validation_proof } = votes[i];

      // Generate a proof for the vote
      const proof = hasher(ballot_proof + proposition_proof, secret);

      // If the validation proof does not match the generated proof, return an error
      if (proof !== validation_proof)
        return c.json({ message: `Validation failed for election with ID ${election_id}` }, 400);
    }

    // If all votes are valid, return a success message
    return c.json({ message: `Validation passed for election with ID ${election_id}` });
  });

export default router;