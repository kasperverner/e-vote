import express from "express";
import hasher from "../utilities/hasher";

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

export default router;