import express from "express";
import hasher from "../utilities/hasher";

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

export default router;