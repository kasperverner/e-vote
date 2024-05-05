import { Hono } from "hono";
import type { Environment } from "../environment";
import hasher from "@/utilities/hasher";

const router = new Hono<Environment>()
  // get the results of an election
  .get("/election/:election_id", async (c) => {
    const { election_id } = c.req.param();
    const { db, secret } = c.var;

    // Find all votes for the election
    const votes = await db.votes.groupBy({
      by: ["proposition_proof"],
      _count: {
        proposition_proof: true,
      },
      where: {
        election_id,
      },
    });

    // Create a map to store the vote count for each proposition to be able to use the Map.get() method
    const tally = votes.reduce((map, { proposition_proof, _count }) => {
      return map.set(proposition_proof, _count.proposition_proof);
    }, new Map<string, number>());

    // Find all propositions for the election
    const propositions = await db.propositions.findMany({
      where: {
        election_id,
      },
      select: {
        id: true,
      },
    });

    // Create a map to store the results of the election
    // Mapping over the propositions array, to use the proposition ID as the key and the vote count as the value
    const results = propositions.reduce((map, { id }) => {
      const hash = hasher(id, secret);

      return map.set(id, tally.get(hash) || 0);
    }, new Map<string, number>());

    // If all votes are valid, return a success message
    return c.json(results);
  });

export default router;