import express from "express";
import hasher from "../utilities/hasher";
import db from "../utilities/db.server";

const router = express.Router();

/**
 * GET /proofs/:proposition_id
 * generate a proposition proof for a vote
 */
router.get("/:proposition_id", async (req, res) => {
  try {
    const { proposition_id } = req.params;
    const proof = hasher(proposition_id, process.env.PROOF_SECRET as string);

    return res.status(200).json(proof);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * GET /validations/:election_id
 * validate all votes for an election
 */
router.get("/:election_id", async (req, res) => {
  try {
    const { election_id } = req.params;

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
      return res.status(200).json({ message: `No propositions found for election with ID ${election_id}`, success: false });

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
      return res.status(200).json({ message: `No votes found for election with ID ${election_id}`, success: false });

    // Generate a list of valid proposition proofs
    const propositionProofs = propositions.map(({ id }) =>
      hasher(id, process.env.PROOF_SECRET as string)
    );

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { proposition_proof } = votes[i];

      // If the proposition proof is not in the list of valid proofs, return an error
      if (!propositionProofs.includes(proposition_proof)) {
        return res.status(200).json({ message: `Validation failed for election with ID ${election_id}`, success: false });
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