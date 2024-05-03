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

    if (!ballots.length)
      return c.json({
        message: `No ballots found for election with ID ${election_id}`
      }, 400);

    const votes = await db.votes.findMany({
      where: {
        election_id,
      },
      select: {
        ballot_proof: true,
      },
    });

    if (!votes.length)
      return c.json({
        message: `No votes found for election with ID ${election_id}`
      }, 400);

    // To save iterations, we can check if the number of votes is equal to the number of ballots
    // If the number of votes does not match the number of ballots, return an error
    if (votes.length !== ballots.length)
      return c.json({
        message: `Not all ballots have been voted on for election with ID ${election_id}`
      }, 400);

    // Generate a list of valid ballot proofs
    const ballotProofs = ballots.map(({ id }) => hasher(id, secret));

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { ballot_proof } = votes[i];

      // If the ballot proof is not in the list of valid proofs, return an error
      if (!ballotProofs.includes(ballot_proof)) {
        return c.json({
          message: `Validation failed for election with ID ${election_id}`
        }, 400);
      }
    }

    // If all votes are valid, return a success message
    return c.json({ message: `Validation passed for election with ID ${election_id}` });
  });

export default router;