import { Hono } from "hono";
import type { Environment } from "../environment";
import hasher from "@/utilities/hasher";

const router = new Hono<Environment>()
  // get the results of an election
  .get("/election/:election_id", async (c) => {
    const { election_id } = c.req.param();
    const { db } = c.var;

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

    // Create a map to tally the votes
    const tally = new Map<string, number>();

    // Iterate over each vote in the votes array
    for (const vote of votes) {
      const { proposition_proof } = vote;

      // Increment the count for the proposition proof in the tally.
      // If it doesn't exist, start with 1.
      const currentCount = tally.get(proposition_proof) ?? 0;
      tally.set(proposition_proof, currentCount + 1);
    }

    // Create a map to store the results of the election
    // Mapping over the propositions array, to use the proposition ID as the key and the vote count as the value
    const results = propositions.reduce((map, { id }) => {
      const hash = hasher(id, process.env.SECRET as string);

      return map.set(id, tally.get(hash) || 0);
    }, new Map<string, number>());

    // If all votes are valid, return a success message
    return c.json(results);
  });

export default router;