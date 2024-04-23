import express from "express";
import hasher from "../utilities/hasher";
import db from "../utilities/db.server";

const router = express.Router();

/**
 * GET /proofs/:ballot_proof/:proposition_proof
 * generate a validation proof for a vote
 */
router.get("/:ballot_proof/:proposition_proof", async (req, res) => {
  try {
    const { ballot_proof, proposition_proof } = req.params;
    const proof = hasher(
      ballot_proof + proposition_proof,
      process.env.SECRET as string
    );

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
      return res
        .status(200)
        .json({
          message: `No votes found for election with ID ${election_id}`,
          success: false,
        });

    // Validate each vote
    for (let i = 0; i < votes.length; i++) {
      const { ballot_proof, proposition_proof, validation_proof } = votes[i];

      // Generate a proof for the vote
      const proof = hasher(
        ballot_proof + proposition_proof,
        process.env.SECRET as string
      );

      // If the validation proof does not match the generated proof, return an error
      if (proof !== validation_proof) {
        return res
          .status(200)
          .json({
            message: `Validation failed for election with ID ${election_id}`,
            success: false,
          });
      }
    }

    // If all votes are valid, return a success message
    return res
      .status(200)
      .json({
        message: `Validation passed for election with ID ${election_id}`,
        success: true,
      });
  } catch (error) {
    // If an error occurs, return an error message
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;