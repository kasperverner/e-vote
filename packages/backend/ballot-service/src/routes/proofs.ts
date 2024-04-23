import express from "express";
import hasher from "../utilities/hasher";
import db from "../utilities/db.server";

const router = express.Router();

/**
 * GET /proofs/:ballot_id
 * generate a ballot proof for a vote
 */
router.get("/:ballot_id", async (req, res) => {
  try {
    const { ballot_id } = req.params;
    const proof = hasher(ballot_id, process.env.SECRET as string);

    return res.status(200).json(proof);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * GET /proofs/validate/:election_id
 * validate all votes for an election
 */
router.get("/validate/:election_id", async (req, res) => {
  try {
    const { election_id } = req.params;

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

    // If no ballots are found, return an error
    if (!ballots.length)
      return res.status(200).json({ message: `No ballots found for election with ID ${election_id}`, success: false });

    // Find all votes for the election
    const votes = await db.votes.findMany({
      where: {
        election_id,
      },
      select: {
        ballot_proof: true,
      },
    });

    // If no votes are found, return an error
    if (!votes.length)
      return res.status(200).json({ message: `No votes found for election with ID ${election_id}`, success: false });

    // To save iterations, we can check if the number of votes is equal to the number of ballots
    // If the number of votes does not match the number of ballots, return an error
    if (votes.length !== ballots.length)
      return res.status(200).json({ message: `Not all ballots have been voted on for election with ID ${election_id}`, success: false });

    // Generate a list of valid ballot proofs
    const ballotProofs = ballots.map(({ id }) => hasher(id, process.env.SECRET as string));

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { ballot_proof } = votes[i];

      // If the ballot proof is not in the list of valid proofs, return an error
      if (!ballotProofs.includes(ballot_proof)) {
        return res.status(200).json({
          message: `Validation failed for election with ID ${election_id}`,
          success: false,
        });
      }
    }

    // If all votes are valid, return a success message
    return res.status(200).json({ message: `Validation passed for election with ID ${election_id}`, success: true });
  } catch (error) {
    // If an error occurs, return an error message
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;